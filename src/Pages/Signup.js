import React from "react";
import Axios from "axios";
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


class Signup extends React.Component{
    constructor(){
        super()
        this.state= {
            formUser : {
                username: '',
                full_name: '',
                email: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let newFormUser = {...this.state.formUser}
        const target = e.target
        const name = target.name
        const value = target.value
        newFormUser[name] = value
        this.setState({
          formUser: newFormUser
        })
    }

    handleSubmit(e){
        Axios.post('http://localhost:8016/users/register', this.state.formUser)
          .then(res => {
            console.log(res)
            if(res.data.status == 401){
                alert("Data not valid!");
            }else if(res.data.status == 403){
                alert("Email already in use!");
            }else{
                alert("Register Success");
                window.location.href="http://localhost:3000/login"
            }
          })
          .catch(err => console.log(err))
          e.preventDefault();
    }

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
                        
                        <Form onSubmit={this.handleSubmit}>
                            <Card className="form-username">
                                <Card.Body style={{padding:'0'}}>
                                    <Form.Group controlId="formBasicUsername" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Username</Form.Label> 
                                        <Form.Control name="username" type="text" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-fullname">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicFullName" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Full Name</Form.Label>
                                        <Form.Control name="full_name" type="text" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-email">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Email</Form.Label>
                                        <Form.Control name="email" type="email" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <Card className="form-password">
                                <Card.Body style={{padding:'0'}}>
                                <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                        <Form.Label style={{fontSize: '14px',color: 'grey'}}>Password</Form.Label>
                                        <Form.Control name="password" type="password" className="form-input" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <ButtonToolbar >
                                <Button type="submit" variant="dark" className="btn-sg">Sign Up</Button>
                                <Link to="login">
                                    <Button variant="light" className="btn-login">Login</Button>
                                </Link>
                            </ButtonToolbar>
                        </Form>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup;