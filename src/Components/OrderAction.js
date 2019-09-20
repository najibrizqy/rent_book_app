import React, {Component, Fragment} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

import {rejectRequest, confirmRequest} from '../Public/Actions/borrow';
import {confirmBook} from '../Public/Actions/books';

class OrderAction extends Component {
    constructor(props){
        super(props)
        this.state = {
            id_transaction : props.data.id,
            rejectM: false, 
            confirmM: false, 
            SuccessModal: false,
            titleM: '',
            msg: '',
            formData:{
                id_book: props.data.id_book,
                rent_at: new Date,
                isConfirm: 1,
            },
            setStatus: {
                id_status: 2,
            }
        }
    }

    confirmOrder = async (id) => {
        await this.props.dispatch(confirmBook(this.state.setStatus, this.state.formData.id_book))
        await this.props.dispatch(confirmRequest(this.state.formData, id))
        .then(() => {
            this.setState({
                confirmM : false,
                titleM : 'Confirmed!',
                msg: 'Request has been confirmed!',
                SuccessModal: true
            })
            setTimeout(() => {
                this.setState({
                    SuccessModal: false
                })
            }, 3000);
            setInterval(() => {
                this.props.setDataOrder()
            }, 3000)
        })
    } 

    rejectOrder = async (id) => {
        await this.setState({
            setStatus : {...this.state.setStatus, id_status:1},
        })
        await this.props.dispatch(confirmBook(this.state.setStatus, this.state.formData.id_book))
        await this.props.dispatch(rejectRequest(id))
        .then(() => {
            this.setState({
                rejectM : false,
                titleM : 'Rejected!',
                msg: 'Request has been rejected!',
                SuccessModal: true
            })
            setTimeout(() => {
                this.setState({
                    SuccessModal: false
                })
            }, 3000);
            setInterval(() => {
                this.props.setDataOrder()
            }, 3000)
        })
    }
    render(){
        const {id_transaction, msg, titleM} = this.state
        console.log(this.state)
        return(
            <Fragment>
                <Button variant="outline-primary" onClick={() => this.setState({confirmM:true})}>
                    Accept
                </Button>
                <Button variant="outline-danger ml-3" onClick={() => this.setState({rejectM:true})} style={{position:'absolute'}}>
                    Reject
                </Button>

                {/* Reject Alert */}
                <SweetAlert
                    show={this.state.rejectM}
                    warning
                    showCancel
                    confirmBtnText="Yes, reject it!"
                    confirmBtnBsStyle='danger'
                    cancelBtnBsStyle="default"
                    title="Reject?"
                    onConfirm={() => {this.rejectOrder(id_transaction)}}
                    onCancel={() => {this.setState({rejectM: false})}}
                >
                    Are you sure to reject this request ?
                </SweetAlert>

                {/* Confirm Alert */}
                <SweetAlert
                    show={this.state.confirmM}
                    warning
                    showCancel
                    confirmBtnText="Yes, confirm it!"
                    confirmBtnBsStyle='success'
                    cancelBtnBsStyle="default"
                    title="Confirm?"
                    onConfirm={() => {this.confirmOrder(id_transaction)}}
                    onCancel={() => {this.setState({confirmM: false})}}
                >
                    Are you sure to confirm this request ?
                </SweetAlert>

                <SweetAlert success title={titleM} show={this.state.SuccessModal} showConfirm={false} >
                    {msg}
                </SweetAlert>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      books : state.books,
      borrow: state.borrow,
    };
};

export default connect (mapStateToProps) (OrderAction);