import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import { Route } from 'react-router-dom';

import '../Css/Login.css'
import LoginForm from '../Components/LoginForm';
import SignupForm from "../Components/SignupForm";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    loggingIn(res){
        console.log(res)
        localStorage.setItem('token', res.data.dataUser.token)
        window.location.reload()
    }

    render(){
        if(localStorage.getItem('token')) return this.props.history.push('/')
        else
        return(
            <Container className="Login">
                <Row style={{height: '100vh'}}>
                    <Col md={8} className="image-login">
                        <div className="bg-image">
                            {/* loginImage */}
                        </div>
                        <div className="logoTitle">
                            <p>Book is a window <br/>to the world</p> 
                        </div>
                        <div className="bottomFooter">
                            <p style={{marginBottom: "0px"}}>Photo by Mark Pan4ratte on Unsplash</p>
                        </div>
                    </Col>
                    <Route
                        path={'/login'}
                        render={({history}) => {
                        return <LoginForm history={history}/>;
                        }}
                    />
                    <Route
                        path={'/signup'}
                        render={({history}) => {
                        return <SignupForm history={history}/>;
                        }}
                    />
                </Row>
            </Container>
        )
    }
}

export default Login;