import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Container, Button, Modal, Form} from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';

import {borrowBook, borrowBookByUser} from '../Public/Actions/borrow';

class ModalBorrow extends Component {
    constructor(props){
        super(props)
        this.state = {
            formData: {
                id_book : props.id_book,
                id_user : null
            },
            resModal: false,
            Msg: '',
            status: '',
            titleModal: ''
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

    handleSubmit = async (e, level) => {
        e.preventDefault()
        console.log("ANJAY", level)
        const functionSubmit = level == "admin" ? borrowBook : borrowBookByUser
        
        await this.props.dispatch(functionSubmit(this.state.formData))
        .then(res =>{
            this.setState({
                resModal:true,
                Msg: 'Successful book borrowing',
                status: 'success',
                titleModal: 'Success'
            })
            
            level == "admin" ? this.props.setAvailability(2) : this.props.setAvailability(4)
            this.props.hide()
          })
        .catch(() => {
            this.setState({
                resModal:true,
                Msg: this.props.borrow.errMsg,
                status: 'danger',
                titleModal: 'Warning!'
            })
        })
    }

    render(){
        let borrow = new Date()
        borrow.setDate(borrow.getDate() + 7)
        let return_limit = new Date(borrow).toLocaleString()
        const {resModal, Msg, status, titleModal} = this.state
        const isUser = this.props.isUser;
        console.log("DATAT",isUser)
        return(
            <Fragment>
                <Modal size="sm" show={this.props.open} onHide={this.props.hide}>
                    <Modal.Header closeButton style={{borderBottom:"none"}}>
                        <Modal.Title>Borrow Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={e => this.handleSubmit(e, isUser.level)}>
                            <Container>
                                <Form.Group controlId="formBasicIdUser">
                                    <Form.Label>ID Card User</Form.Label>
                                    <Form.Control type="number" name="id_user" placeholder="Enter ID Card User" onChange={this.handleChange} defaultValue={isUser.level == "user" ? isUser.id : ''} readOnly={isUser.level == "user" ? true : false} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>ID Book</Form.Label>
                                    <Form.Control type="number" name="id_book" defaultValue={this.props.id_book} readOnly/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Borrow At</Form.Label>
                                    <Form.Control type="text" name="borrow_at" value={new Date().toLocaleString()} readOnly/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Return Limit</Form.Label>
                                    <Form.Control type="text" name="return_at" value={return_limit} readOnly/>
                                </Form.Group>
                            </Container>
                            <Button type="submit" variant="warning" className="btn-save float-right mt-3">
                                Save
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <SweetAlert type={status} showCloseButton title={titleModal} show={resModal} onConfirm={() => this.setState({resModal: false})}>
                    {Msg}
                </SweetAlert>
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