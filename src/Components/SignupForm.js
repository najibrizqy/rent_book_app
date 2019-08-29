import React, {Component, Fragment} from "react";
import {Row, Col, Form, ButtonToolbar, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux';

import {register} from '../Public/Actions/user';
import Logo from '../logo.png'
import {Link} from 'react-router-dom';

class SignupForm extends Component{
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
    }

    handleChange = (e) => {
        let newFormUser = {...this.state.formUser}
        const target = e.target
        const name = target.name
        const value = target.value
        newFormUser[name] = value
        this.setState({
          formUser: newFormUser
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.dispatch(register(this.state.formUser))
        this.props.history.push('/login')
    }

    render(){
        return(
            <Fragment>
                <Col md={4}>
                    <Row>
                        <Col md={12}>
                            <img src={Logo} alt="Not Found" className="logo float-right"/> 
                        </Col>
                    </Row>
                    <Row className="form" style={{paddingTop:"0px"}}>
                        <Col md={12} className="title-login">
                            <span className="title">Register</span> 
                            <p className="desc-title">Welcome Back, Please Register <br/>to create account</p>
                            <div className="mt-4">
                                <Form onSubmit={this.handleSubmit}>
                                    <div style={{boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.25)'}}>
                                        <Card className="form-input">
                                            <Card.Body style={{padding:'0'}}>
                                                <Form.Group controlId="formBasicUsername" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                    <Form.Label className="label">Username</Form.Label> 
                                                    <Form.Control name="username" type="text" onChange={this.handleChange}/>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className="form-input">
                                            <Card.Body style={{padding:'0'}}>
                                                <Form.Group controlId="formBasicFullName" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                    <Form.Label className="label">Full Name</Form.Label> 
                                                    <Form.Control name="full_name" type="text" onChange={this.handleChange}/>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className="form-input">
                                            <Card.Body style={{padding:'0'}}>
                                                <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                    <Form.Label className="label">Email address</Form.Label> 
                                                    <Form.Control name="email" type="email" onChange={this.handleChange}/>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className="form-input">
                                            <Card.Body style={{padding:'0'}}>
                                                <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                    <Form.Label className="label">Password</Form.Label>
                                                    <Form.Control name="password" type="password" onChange={this.handleChange}/>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <Row className="mt-3 pl-3">
                                        <ButtonToolbar >
                                            <Button variant="light" type="submit" className="submit-sg">Sign Up</Button>
                                            <Link to="login">
                                                <Button  variant="dark" className="submit-lg ml-3">Log In</Button>
                                            </Link>
                                        </ButtonToolbar>
                                    </Row>
                                </Form>
                            </div>
                            <p className="term" style={{top:"560px"}}>
                                By signing up, you agree to Book's<br/><b style={{color:'black'}}>Terms and Conditions</b> & <b style={{color:'black'}}>Privacy Policy</b>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
      user: state.user
    }
}

export default connect (mapStateToProps) (SignupForm);