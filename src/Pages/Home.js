import React, {Fragment} from 'react';
import Sidebar from "react-sidebar";
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHistory, faBookMedical, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {getProfile, logout} from '../Public/Actions/user';
import userImage from '../user.png';
import '../Css/style.css';

import BooksList from '../Components/BooksList';
import Navbar from '../Components/Navbar';
import BookCarousel from '../Components/BookCarousel';
import ModalAddBook from '../Components/ModalAddBook';
import History from '../Components/History';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
          sidebarOpen: false,
          openModal: false,
          userData: [],
          search: '',
        };
        this.Logout = this.Logout.bind(this);
      }

      onSetSidebarOpen = (action) => {
        this.setState({ sidebarOpen: action });
      }

      openModalAddBook(open){
        this.setState({openModal: open})
      }

      Logout = async () =>{
        await this.props.dispatch(logout())
        localStorage.clear()
        this.props.history.push('/login')
      }

      componentDidMount = async () => {
        //Get Token
        let token = localStorage.getItem('token')
        if(!token)
        this.props.history.push('/')

        //Get User Data
        await this.props.dispatch(getProfile())
        this.setState({
          userData: this.props.user.userProfile
        })
      };
     
      render() {
        const user  = this.state.userData;
        const SideBarContent = (
            <div>
                <span className="float-right icon-menu">
                    <FontAwesomeIcon icon={faBars} onClick={() => this.onSetSidebarOpen(false)}/>
                </span>
                <img src={userImage} alt="Not Found" className="userImage"/>
                <div className="bottom">
                  <center >
                    <h5 style={{marginBottom:'0px'}}>{user.fullname}</h5>
                    { 
                      user.level == "user" ? 
                        <h6 style={{color:'rgba(78, 70, 70, 0.73)'}}>@{user.username}</h6>
                      : 
                        <h6 style={{color:'rgba(78, 70, 70, 0.73)'}}>Admin</h6>
                    }
                  </center>
                  {
                    user.level == "user" ?  
                      <div className="profile">
                        <span>Id Card : {user.id}</span><br/>
                        <span>Email : {user.email}</span>
                      </div>
                    : ""
                  }
                   
                </div>
                
                {/* Menu */}
                <div style={{marginTop:"6vh", marginLeft:"4vh"}}>
                    <h6 style={link} onClick={
                        () => {
                          this.props.history.push(`/home/explore`)
                          this.onSetSidebarOpen(false)
                        }
                      }>
                      <FontAwesomeIcon icon={faSearch} className="mr-4"/>Explore
                    </h6><br />
                    {
                      user.level === "admin" ?
                      <Fragment>
                        <h6 style={link} onClick={() => this.openModalAddBook(true)}><FontAwesomeIcon icon={faBookMedical} className="mr-4"/>Add Book</h6><br />
                      </Fragment>
                      : 
                      <Fragment>
                        <h6 style={link} onClick={() => {
                            this.props.history.push(`/home/history/`)
                            this.onSetSidebarOpen(false)
                          }
                        }><FontAwesomeIcon icon={faHistory} className="mr-4" />History</h6><br />
                      </Fragment>
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
                <Navbar openSideBar={() => this.onSetSidebarOpen(true)} history={this.props.history} />
                <Container style={{margin:'0px',maxWidth:"none"}}>
                  <Route 
                    path="/home" 
                    exact={true}
                    render={({history}) => {
                      let params = new URLSearchParams(window.location.search)
                      return(
                        <Fragment>
                          <BookCarousel history={history}/>
                          <BooksList key={window.location.href} search={params.get("search")} history={history} Source={`${process.env.REACT_APP_HOST}/books`}/>
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
                        <Fragment>
                          <BooksList key={window.location.href} search={params.get("search")} history={history} Source={`${process.env.REACT_APP_HOST}/books`}/>
                        </Fragment>
                      );
                    }} 
                  />
                  <Route 
                    path="/home/history" 
                    exact={true}
                    render={({history}) => {
                      return(
                        <Fragment>
                          <History key={window.location.href} history={history} />
                        </Fragment>
                      );
                    }} 
                  />
                  <Route 
                    path="/home/genre/:genre"
                    component={(url) => {
                      return <BooksList key={window.location.href} Source={`${process.env.REACT_APP_HOST}/books/genre/${url.match.params.genre}`} history={url.history} />;
                    }}
                  />
                  <Route 
                    path="/home/year/:year" 
                    component={(url) => {
                      return <BooksList key={window.location.href} Source={`${process.env.REACT_APP_HOST}/books/year/${url.match.params.year}`} history={url.history} />;
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
      position: 'fixed',
  }
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
  }
}

export default connect (mapStateToProps) (Home);