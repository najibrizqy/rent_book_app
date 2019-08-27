import React, {Fragment} from 'react';
import Sidebar from "react-sidebar";
import Axios from 'axios'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

import logo from '../logo.png';
import userImage from '../user.png';
import '../Css/style.css';
import GenreDropdown from '../Components/GenreDropdown';
import TimeDropdown from '../Components/TimeDropdown';
import BooksList from '../Components/BooksList';
import BookCarousel from '../Components/BookCarousel';
import ModalAddBook from '../Components/ModalAddBook';
import BooksSearch from '../Components/BooksSearch';
import {getBooks} from '../Public/Actions/books';

class Menu extends React.Component{
    constructor() {
        super();
        this.state = {
          sidebarOpen: false,
          openModal: false,
          userData: [],
          booksData: [],
          search: ''
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.Logout = this.Logout.bind(this);
      }

      componentDidMount = async () => {
         //Get Data Books
         await this.props.dispatch (getBooks ());
         this.setState ({
           booksData: this.props.books.booksList,
         });

        //Get Token
        let token = localStorage.getItem('token')
        if(!token)
          window.location.replace("http://localhost:3000/")

        //Get User Data
        Axios.get("http://localhost:8016/users/profile",{
          headers:{
            Authorization : token
          }
        }).then(res => {
            const userData=res.data;
            this.setState({
              userData:userData
            })
          })
          .catch(err => console.log(err))
      };

      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

      onSetSidebarClose(close) {
        this.setState({ sidebarOpen: close });
      }

      openModalAddBook(open){
        this.setState({openModal: open})
      }

      Logout(){
        localStorage.removeItem('token')
        window.location.reload()
      }
     
      render() {
        const {index, properties, booksData, search} = this.state;
        const user  = this.state.userData;
        const filterData = booksData.filter(booksData => 
          booksData.title.toLowerCase().includes(search.toLowerCase())
        ) 
        const SideBarContent = (
            <div>
                <span className="float-right icon-menu">
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarClose(false)}/>
                </span>
                <img src={userImage} alt="Not Found" className="userImage"/>
                <center><h5>{user.fullname}</h5></center>
                
                {/* Menu */}
                <div style={{marginTop:"8vh", marginLeft:"4vh"}}>
                    <h6><a href="javascript:void(0)" style={menu}>Explore</a></h6><br />
                    <h6><a href="javascript:void(0)" style={menu}>History</a></h6><br />
                    {
                      user.level === "admin" ?
                      <Fragment>
                        <h6><a href="javascript:void(0)" style={menu} onClick={() => this.openModalAddBook(true)}>Add Book</a></h6><br />
                      </Fragment>
                      : ''
                    }
                    <h6><a href="javascript:void(0)" style={menu} onClick={this.Logout}>Log out</a></h6>
                </div>
            </div>
        )

        return (
            <div style={{overflowX:'hidden', overflowY: 'auto'}}>
                <Sidebar
                    sidebar= {SideBarContent}
                    open= {this.state.sidebarOpen}
                    onSetOpen= {this.onSetSidebarOpen}
                    styles= {stylingSideBar}
                >
                </Sidebar>
                <Navbar bg="light" expand="lg" style={{boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.25)'}}>
                    <Navbar.Brand style={{cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(true)}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{marginLeft: '10px'}}>
                            <GenreDropdown />
                            <TimeDropdown />
                        </Nav>
                        <BooksSearch handleChange={e => this.setState({search: e.target.value})}/>
                        <img src={logo} style={{width: '50px'}} alt="Not Found" className="ml-auto"/>
                        <b style={{fontSize: '30px', marginRight: '43px'}}>Library</b>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{margin:'0px',maxWidth:"none"}}>
                    <BookCarousel />
                    <BooksList key={filterData} data={filterData}/>
                </Container>
                <ModalAddBook open={this.state.openModal} hide={() => this.setState({openModal: false})} />
            </div>
        );
      }
}

// styling
const menu = {
    color:'black',
    textDecoration:"none"
}
const stylingSideBar = {
  sidebar: { 
      background: "white",
      width: '45vh',
      position: 'fixed'
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};


export default connect (mapStateToProps) (Menu);