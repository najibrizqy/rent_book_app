import React, {Component, Fragment} from 'react';
import {Row, Col, Form, ButtonToolbar, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux';

import {login} from '../Public/Actions/user';
import Logo from '../logo.png'
import '../Css/Login.css'
import {Link, Redirect} from 'react-router-dom';

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password:'',
            loggedIn:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: this.state.email, 
          password: this.state.password
        }
        await this.props.dispatch(login(data))
        window.localStorage.setItem("token", this.props.user.token)
        this.setState({
          loggedIn:true
        })
    }

    isLoggedIn(){
        return window.localStorage.getItem("token")
    }

    render(){
        if(localStorage.getItem('token')) return <Redirect to="../"/>
        else return(
            <Fragment>
                <Col md={4}>
                    <Row>
                        <Col md={12}>
                            <img src={Logo} alt="Not Found" className="logo float-right"/> 
                        </Col>
                    </Row>
                    <Row className="form">
                        <Col md={12} className="title-login">
                            <span className="title">Login</span> 
                            <p className="desc-title">Welcome Back, Please Login <br/>to your account</p>
                            <div className="mt-4">
                                <Form onSubmit={this.handleSubmit}>
                                    <Card className="form-input">
                                        <Card.Body style={{padding:'0'}}>
                                            <Form.Group controlId="formBasicEmail" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                <Form.Label className="label">Email address</Form.Label> 
                                                <Form.Control name="email" type="email" onChange={this.handleChange}/>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                    <Card className="form-input" style={{boxShadow: '0 18px 34px -17px rgba(0, 0, 0, 0.25)'}}>
                                        <Card.Body style={{padding:'0'}}>
                                            <Form.Group controlId="formBasicPassword" style={{paddingLeft: '17px',paddingRight: '17px'}}>
                                                <Form.Label className="label">Password</Form.Label>
                                                <Form.Control name="password" type="password" onChange={this.handleChange}/>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>

                                    <Row className="mt-2">
                                        <Col md={6}>
                                            <Form.Check custom inline type="checkbox" label="Remember me" id="custom-inline-checkbox-1" className="remember"/>
                                        </Col>
                                        <Col md={6} style={{position:'relative'}}>
                                            <p className="forgot-password">Forgot Password</p> 
                                        </Col>
                                    </Row>
                                    
                                    <Row className="mt-2 pl-3">
                                        <ButtonToolbar >
                                            <Button type="submit" variant="dark" className="submit-lg">Log In</Button>
                                            <Link to="signup">
                                                <Button variant="light" className="submit-sg ml-3">Sign Up</Button>
                                            </Link>
                                        </ButtonToolbar>
                                    </Row>
                                </Form>
                            </div>
                            <p className="term">
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

export default connect (mapStateToProps) (LoginForm);