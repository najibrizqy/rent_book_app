import React, {Component, Fragment} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

import {deleteBook, confirmBook} from '../Public/Actions/books';

class DonateAction extends Component {
    constructor(props){
        super(props)
        this.state = {
            id_book: props.data.id_book,
            rejectModal: false, 
            confirmModal: false, 
            showSuccessModal: false,
            titleModal: '',
            msgSuccess: '',
            formData: {
                id_status: 1,
            }
        }
    }

    confirm = async (id) => {
        await this.props.dispatch(confirmBook(this.state.formData, id))
        .then(() => {
            this.setState({
                confirmModal : false,
                titleModal : 'Confirmed!',
                msgSuccess: 'Book has been confirmed!',
                showSuccessModal: true
            })
            this.props.setData()
            setTimeout(() => {
                this.setState({
                    showSuccessModal: false
                })
            }, 3000);
        })
    } 

    reject = async (id) => {
        await this.props.dispatch(deleteBook(id))
        .then(() => {
            this.setState({
                rejectModal : false,
                titleModal : 'Rejected!',
                msgSuccess: 'Book has been rejected!',
                showSuccessModal: true
            })
            this.props.setData()
            setTimeout(() => {
                this.setState({
                    showSuccessModal: false
                })
            }, 3000);
        })
    }
    
    render(){
        const {id_book, msgSuccess, titleModal} = this.state
        return(
            <Fragment>
                <Button variant="outline-primary" onClick={() => this.setState({confirmModal:true})}>
                    Accept
                </Button>
                <Button variant="outline-danger ml-3" onClick={() => this.setState({rejectModal:true})} style={{position:'absolute'}}>
                    Reject
                </Button>

                {/* Reject Alert */}
                <SweetAlert
                    show={this.state.rejectModal}
                    warning
                    showCancel
                    confirmBtnText="Yes, reject it!"
                    confirmBtnBsStyle='danger'
                    cancelBtnBsStyle="default"
                    title="Reject?"
                    onConfirm={() => {this.reject(id_book)}}
                    onCancel={() => {this.setState({rejectModal: false})}}
                >
                    Are you sure to reject this book ?
                </SweetAlert>

                {/* Confirm Alert */}
                <SweetAlert
                    show={this.state.confirmModal}
                    warning
                    showCancel
                    confirmBtnText="Yes, confirm it!"
                    confirmBtnBsStyle='success'
                    cancelBtnBsStyle="default"
                    title="Confirm?"
                    onConfirm={() => {this.confirm(id_book)}}
                    onCancel={() => {this.setState({confirmModal: false})}}
                >
                    Are you sure to confirm this book ?
                </SweetAlert>

                <SweetAlert success title={titleModal} show={this.state.showSuccessModal} showConfirm={false} >
                    {msgSuccess}
                </SweetAlert>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      books : state.books,
    };
};

export default connect (mapStateToProps) (DonateAction);