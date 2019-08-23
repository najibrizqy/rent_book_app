import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Lib from '../lib2.png'
import Logo from '../logo.png'
import '../Css/Signup.css'
import Form from "react-bootstrap/Form";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';


class Login extends React.Component{
    render(){
        return(
            <Container className="Signup">
                <Row>
                    <Col md={7}>
                        <img src={Lib} alt="Not Found" className="img"/>
                    </Col>
                    <Col md={4}>
                        <img src={Logo} alt="Not Found" className="logo float-right"/> 

                        <p className="logoTitle">Book is a window <br/>to the world</p>  

                        <p className="bottomFooter">Photo by Mark Pan4ratte on Unsplash</p>

                        <p className="title">Register</p> 
                        <p className="desc-title">Welcome Back, Please Register <br/>to create account</p>

                        
                        <p className="term">
                            By signing up, you agree to Book's<br/><b style={{color:'black'}}>Terms and Conditions</b> & <b style={{color:'black'}}>Privacy Policy</b>
                        </p>
                        <Form>
                            <div className="formParent">

                            </div>
                            <Card className="form-username">
                                <Card.Body style={{padding:'0'}}>
                                    <Form.Group controlId="formBasicUsername" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Username</Form.Label> 
                                        <Form.Control type="text" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-fullname">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicFullName" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Full Name</Form.Label>
                                        <Form.Control type="text" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-email">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Email</Form.Label>
                                        <Form.Control type="email" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-password">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Password</Form.Label>
                                        <Form.Control type="password" className="form-input"/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Form>

                        <ButtonToolbar >
                            <Button variant="dark" className="btn-sg">Sign Up</Button>
                            <Link to="login">
                                <Button variant="light" className="btn-login">Login</Button>
                            </Link>
                        </ButtonToolbar>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;