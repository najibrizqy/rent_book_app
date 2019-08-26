import React from 'react';
import Sidebar from "react-sidebar";
import Axios from 'axios'
import {Navbar, Nav, Container, Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import logo from '../logo.png';
import userImage from '../user.png';
import '../Css/style.css';
import GenreDropdown from '../Components/GenreDropdown';
import TimeDropdown from '../Components/TimeDropdown';
import BooksList from '../Components/BooksList';
import BookCarousel from '../Components/BookCarousel';
import ModalAddBook from '../Components/ModalAddBook';
import BooksSearch from '../Components/BooksSearch';

const stylingSideBar = {
    sidebar: { 
        background: "white",
        width: '45vh',
        position: 'fixed'
    }
}

class Menu extends React.Component{
    constructor() {
        super();
        this.state = {
          sidebarOpen: false,
          openModal: false,
          index: 2,
          properties: [],
          property: {},
          userData: null
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.Logout = this.Logout.bind(this);
      }

      componentDidMount = () => {
        //Carousel
        Axios.get ('http://localhost:8016/books?sort=date_released&type=desc&limit=5')
          .then (res => {
            this.setState ({properties: res.data.values, property: res.data.values[0]});
          })
          .catch (err => console.log ('err = ', err));
      };

      nextProperty = () => {
        const newIndex = this.state.index+1;
        this.setState({
          property: this.state.properties[newIndex],
          index: newIndex
        })
      }

      prevProperty = () => {
        const newIndex = this.state.index-1;
        this.setState({
          property: this.state.properties[newIndex],
          index: newIndex
        })
      }
     
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
        localStorage.removeItem('UserData')
        window.location.reload()
      }

      componentWillMount(){
        let getStorage = localStorage.getItem('UserData')
        if(!getStorage)
          window.location.replace("http://localhost:3000/")
        
        let parse = JSON.parse(getStorage);

        this.setState({
          userData: parse.dataUser
        })
      }
     
      render() {
        const {properties} = this.state;
        const index = this.state.index;
        const user  = this.state.userData;
        const SideBarContent = (
            <div>
                <span className="float-right" style={{fontSize: "3vh", marginRight:"2vh"}}>
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarClose(false)}/>
                </span>
                <img src={userImage} alt="Not Found" className="userImage"/>
                <center><h5>{user.full_name}</h5></center>
                
                {/* Menu */}
                <div style={{marginTop:"8vh", marginLeft:"4vh"}}>
                    <h6><a href="javascript:void(0)" style={menu}>Explore</a></h6><br />
                    <h6><a href="javascript:void(0)" style={menu}>History</a></h6><br />
                    <h6><a href="javascript:void(0)" style={menu} onClick={() => this.openModalAddBook(true)}>Add Book</a></h6><br/>
                    <h6><a href="javascript:void(0)" style={menu} onClick={this.Logout}>Log out</a></h6>
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
                    <Navbar.Brand href="">
                        <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(true)}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" style={{marginLeft: '10px'}}>
                            <GenreDropdown />
                            <TimeDropdown />
                        </Nav>
                        <BooksSearch />
                        <img src={logo} style={{width: '50px'}} alt="Not Found" className="ml-auto"/>
                        <b style={{fontSize: '30px', marginRight: '43px'}}>Library</b>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{margin:'0px',maxWidth:"none"}}>
                    <Row className={`container1 cards-slider active-slide-${index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${index*(100/properties.length)}%)`
                        }}>
                        {
                            properties.map((bookData, index) => <BookCarousel key={bookData.id_book} property={bookData} index={index}/>)
                        } 
                        </div>
                        <div className="btn-slide">
                            <Button variant="light" className="slide-left" onClick={() => this.prevProperty()} disabled={index === 0}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </Button>
                            <Button variant="light" className="slide-right" onClick={() => this.nextProperty()} disabled={index === properties.length-1}>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </Button>
                        </div>
                    </Row>
                    <BooksList />
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

export default Menu;