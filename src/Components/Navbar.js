import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../logo.png';
import '../Css/style.css';
import BooksSearch from '../Components/BooksSearch';
import GenreDropdown from '../Components/GenreDropdown';
import TimeDropdown from '../Components/TimeDropdown';

const NavigationBar = (props) => {
    return(
        <Navbar bg="light" expand="lg" className="navbarHome">
            <Navbar.Brand style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBars} onClick={props.openSideBar}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{marginLeft: '10px'}}>
                    <GenreDropdown history={props.history}/>
                    <TimeDropdown history={props.history}/>
                </Nav>
                <BooksSearch history={props.history}/>
                <img src={logo} style={{width: '50px', cursor: 'pointer'}} alt="Not Found" className="ml-auto" onClick={(e) => props.history.push('/')}/>
                <b style={{fontSize: '30px', marginRight: '43px', cursor: 'pointer'}} onClick={(e) => props.history.push('/')}>Library</b>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;