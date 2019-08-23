import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Lib from '../lib2.png'
import Logo from '../logo.png'
import '../Css/Login.css'
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';


class Login extends React.Component{
    render(){
        return(
            <Container className="Login">
                <Row>
                    <Col md={7}>
                        <img src={Lib} alt="Not Found" className="img"/>
                    </Col>
                    <Col md={4}>
                        <img src={Logo} alt="Not Found" className="logo float-right"/> 

                        <p className="logoTitle">Book is a window <br/>to the world</p>  

                        <p className="bottomFooter">Photo by Mark Pan4ratte on Unsplash</p>

                        <p className="title">Login</p> 
                        <p className="desc-title">Welcome Back, Please Login <br/>to your account</p>

                        <Form>
                            <Card className="form-email">
                                <Card.Body style={{padding:'0'}}>
                                    <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Email address</Form.Label> 
                                        <Form.Control type="email" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-password" style={{boxShadow: '0 18px 34px -17px rgba(0, 0, 0, 0.25)'}}>
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Password</Form.Label>
                                        <Form.Control type="password" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Form>
                        

                        <Form.Check custom inline type="checkbox" label="Remember me" id="custom-inline-checkbox-1" className="remember"/>
                        <p className="forgot-password">Forgot Password?</p>                 
                        
                        <ButtonToolbar >
                            <Button variant="dark" className="submit-lg">Log In</Button>
                            <Link to="signup">
                                <Button variant="light" className="submit-sg">Sign Up</Button>
                            </Link>
                        </ButtonToolbar>

                        <p className="term">
                            By signing up, you agree to Book's<br/><b style={{color:'black'}}>Terms and Conditions</b> & <b style={{color:'black'}}>Privacy Policy</b>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;