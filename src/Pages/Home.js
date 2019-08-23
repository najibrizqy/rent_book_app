import React from 'react';
import Sidebar from "react-sidebar";
import Axios from 'axios'
import {Navbar, Nav, NavDropdown, Form, FormControl, InputGroup, Container, Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import logo from '../logo.png';
import user from '../user.png';
import '../Css/style.css';
import GenreDropdown from '../Components/GenreDropdown';
import BooksList from '../Components/BooksList';
import BookCarousel from '../Components/BookCarousel';
import ModalAddBook from '../Components/ModalAddBook';

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
          ind: 2,
          properties: [],
          property: {}
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }

      componentDidMount = () => {
        Axios.get ('http://localhost:8016/books?sort=date_released&type=desc&limit=5')
          .then (res => {
            console.log("DATA = ", res)
            this.setState ({properties: res.data.values, property: res.data.values[0]});
          })
          .catch (err => console.log ('err = ', err));
      };

      nextProperty = () => {
        const newIndex = this.state.ind+1;
        this.setState({
          property: this.state.properties[newIndex],
          ind: newIndex
        })
      }

      prevProperty = () => {
        const newIndex = this.state.ind-1;
        this.setState({
          property: this.state.properties[newIndex],
          ind: newIndex
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
     
      render() {
        const {properties} = this.state;
        const ind = this.state.ind;
        // const [lgShow, setLgShow] = useState(false);
        const SideBarContent = (
            <div>
                <span className="float-right" style={{fontSize: "3vh", marginRight:"2vh"}}>
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarClose(false)}/>
                </span>
                <img src={user} alt="Not Found" className="userImage"/>
                <center><h5>Najibullah Rizqy F</h5></center>
                
                {/* Menu */}
                <div style={{marginTop:"8vh", marginLeft:"4vh"}}>
                    <h6><a href="javascript:void(0)" style={menu}>Explore</a></h6><br />
                    <h6><a href="javascript:void(0)" style={menu}>History</a></h6><br />
                    <h6><a href="javascript:void(0)" style={menu} onClick={() => this.openModalAddBook(true)}>Add Book</a></h6>
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
                            <NavDropdown title="All Time" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline style={{marginRight: '270px'}}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend" className="icon-search">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="text" placeholder="Search book" className="mr-sm-2 btn-search"  style={{width:'350px'}} />
                        </Form>
                        <img src={logo} style={{width: '50px'}} alt="Not Found"/>
                        <b style={{fontSize: '30px', marginRight: '43px'}}>Library</b>
                    </Navbar.Collapse>
                </Navbar>
                <Container style={{margin:'0px',maxWidth:"none"}}>
                    <Row className={`container1 cards-slider active-slide-${ind}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform': `translateX(-${ind*(100/properties.length)}%)`
                        }}>
                        {
                            properties.map((bookData, index) => <BookCarousel key={bookData.id_book} property={bookData} index={index} />)
                        } 
                        </div>
                        <div className="btn-slide">
                            <Button variant="light" className="slide-left" onClick={() => this.prevProperty()} disabled={ind === 0}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </Button>
                            <Button variant="light" className="slide-right" onClick={() => this.nextProperty()} disabled={ind === properties.length-1}>
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