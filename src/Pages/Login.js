import React from "react";
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Lib from '../lib2.png'
import Logo from '../logo.png'
import '../Css/Login.css'
import Form from "react-bootstrap/Form";
import {ButtonToolbar, Button, Card} from "react-bootstrap";
import {Link, Redirect} from 'react-router-dom';


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password:'',
            loggedIn:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loggingIn = this.loggingIn.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e){
        Axios.post('http://localhost:8016/users/login', {
            email: this.state.email, 
            password: this.state.password
        })
          .then((res) => {
              if(res.data.status == 401){
                alert("Your Email or Password Incorrect");
              }else{
                  this.loggingIn(res)
              }
          })
          .catch(function (error) {
            console.log(error);
          });
          e.preventDefault();
    }

    loggingIn(res){
        console.log(res)
        const userData = res.data
        localStorage.setItem('UserData', JSON.stringify(userData))
        window.location.reload()
    }

    render(){
        if(localStorage.getItem('UserData')) return <Redirect to="/home"/>
        else
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

                        <Form onSubmit={this.handleSubmit}>
                            <Card className="form-email">
                                <Card.Body style={{padding:'0'}}>
                                    <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Email address</Form.Label> 
                                        <Form.Control name="email" type="email" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-password" style={{boxShadow: '0 18px 34px -17px rgba(0, 0, 0, 0.25)'}}>
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Password</Form.Label>
                                        <Form.Control name="password" type="password" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>

                            <Form.Check custom inline type="checkbox" label="Remember me" id="custom-inline-checkbox-1" className="remember"/>
                            <p className="forgot-password">Forgot Password?</p>                 
                            
                            <ButtonToolbar >
                                <Button type="submit" variant="dark" className="submit-lg">Log In</Button>
                                <Link to="signup">
                                    <Button variant="light" className="submit-sg">Sign Up</Button>
                                </Link>
                            </ButtonToolbar>
                        </Form>

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