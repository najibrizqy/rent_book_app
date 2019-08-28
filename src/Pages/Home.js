import React, {Fragment} from 'react';
import Sidebar from "react-sidebar";
import Axios from 'axios'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHistory, faBookMedical, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';

import logo from '../logo.png';
import userImage from '../user.png';
import '../Css/style.css';
import GenreDropdown from '../Components/GenreDropdown';
import TimeDropdown from '../Components/TimeDropdown';
import BooksList from '../Components/BooksList';
import BookCarousel from '../Components/BookCarousel';
import ModalAddBook from '../Components/ModalAddBook';
import BooksSearch from '../Components/BooksSearch';

class Menu extends React.Component{
    constructor() {
        super();
        this.state = {
          sidebarOpen: false,
          openModal: false,
          userData: [],
          booksData: [],
          search: '',
        };
        this.Logout = this.Logout.bind(this);
      }

      componentDidMount = async () => {
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

      onSetSidebarOpen = (action) => {
        this.setState({ sidebarOpen: action });
      }

      openModalAddBook(open){
        this.setState({openModal: open})
      }

      Logout(){
        localStorage.removeItem('token')
        window.location.reload()
      }
     
      render() {
        const user  = this.state.userData;
        const SideBarContent = (
            <div>
                <span className="float-right icon-menu">
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(false)}/>
                </span>
                <img src={userImage} alt="Not Found" className="userImage"/>
                <center className="bottom"><h5>{user.fullname}</h5></center>
                
                {/* Menu */}
                <div style={{marginTop:"6vh", marginLeft:"4vh"}}>
                    <h6 style={link} onClick={() => this.props.history.push(`/home/explore`)}><FontAwesomeIcon icon={faSearch} className="mr-4"/>Explore</h6><br />
                    <h6 style={link}><FontAwesomeIcon icon={faHistory} className="mr-4"/>History</h6><br />
                    {
                      user.level === "admin" ?
                      <Fragment>
                        <h6 style={link} onClick={() => this.openModalAddBook(true)}><FontAwesomeIcon icon={faBookMedical} className="mr-4"/>Add Book</h6><br />
                      </Fragment>
                      : ''
                    }
                    <h6 style={link} onClick={this.Logout}><FontAwesomeIcon icon={faSignOutAlt} className="mr-4"/>Log out</h6>
                </div>
            </div>
        )

        return (
            <div style={{overflowX:'hidden'}}>
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
                            <GenreDropdown history={this.props.history}/>
                            <TimeDropdown history={this.props.history}/>
                        </Nav>
                        <BooksSearch history={this.props.history}/>
                        <img src={logo} style={{width: '50px', cursor: 'pointer'}} alt="Not Found" className="ml-auto" onClick={(e) => this.props.history.push('/')}/>
                        <b style={{fontSize: '30px', marginRight: '43px', cursor: 'pointer'}} onClick={(e) => this.props.history.push('/')}>Library</b>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{margin:'0px',maxWidth:"none"}}>
                  <Route 
                    path="/home" 
                    exact={true}
                    render={({history}) => {
                      let params = new URLSearchParams(window.location.search)
                      return(
                        <Fragment>
                          <BookCarousel />
                          <BooksList key={window.location.href} search={params.get("search")} history={history} Source={`http://localhost:8016/books`}/>
                        </Fragment>
                      );
                    }} 
                  />
                  <Route 
                    path="/home/explore" 
                    exact={true}
                    render={({history}) => {
                      let params = new URLSearchParams(window.location.search)
                      return(
                        <div>
                          <BooksList key={window.location.href} search={params.get("search")} history={history} Source={`http://localhost:8016/books`}/>
                        </div>
                      );
                    }} 
                  />
                  <Route 
                    path="/home/genre/:genre" 
                    component={(url) => {
                      return <BooksList key={window.location.href} Source={`http://localhost:8016/books/genre/${url.match.params.genre}`}/>;
                    }} 
                  />
                  <Route 
                    path="/home/year/:year" 
                    component={(url) => {
                      return <BooksList key={window.location.href} Source={`http://localhost:8016/books/year/${url.match.params.year}`}/>;
                    }} 
                  />
                </Container>
                <ModalAddBook open={this.state.openModal} hide={() => this.setState({openModal: false})} />
            </div>
        );
      }
}

// styling
const link = {
    cursor: 'pointer'
}
const stylingSideBar = {
  sidebar: { 
      background: "white",
      width: '45vh',
      position: 'fixed'
  }
}


export default Menu;