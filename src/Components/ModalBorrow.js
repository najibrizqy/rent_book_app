import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Container, Button, Modal, Form} from 'react-bootstrap';

import {borrowBook} from '../Public/Actions/borrow';

class ModalBorrow extends Component {
    constructor(props){
        super(props)
        this.state = {
            formData: {
                id_book : props.id_book,
                id_user : null
            }
        }
    }

    handleChange = (e) => {
        let newFormData = {...this.state.formData}
        const target = e.target
        const name = target.name
        const value = target.value
        newFormData[name] = value
        this.setState({
          formData: newFormData
        }, () => {console.log(this.state.formData)})
      }

    handleSubmit = async (e) => {
        e.preventDefault()
        await this.props.dispatch(borrowBook(this.state.formData))
        this.props.hide()
        this.props.setAvailability()
    }

    render(){
        return(
            <Fragment>
                <Modal size="sm" show={this.props.open} onHide={this.props.hide}>
                    <Modal.Header closeButton style={{borderBottom:"none"}}>
                        <Modal.Title>Borrow Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Container>
                                <Form.Group controlId="formBasicIdUser">
                                    <Form.Label>ID Card User</Form.Label>
                                    <Form.Control type="number" name="id_user" placeholder="Enter ID Card User" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>ID Book</Form.Label>
                                    <Form.Control type="number" name="id_book" defaultValue={this.props.id_book} readOnly/>
                                </Form.Group>
                            </Container>
                            <Button type="submit" variant="warning" className="btn-save float-right mt-3">
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    }
} 

const mapStateToProps = state => {
    return{
      borrow: state.borrow
    }
  }

export default connect (mapStateToProps) (ModalBorrow);