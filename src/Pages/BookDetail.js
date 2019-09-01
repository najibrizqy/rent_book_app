import React, {Component, Fragment} from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';

import { getBookDetail, deleteBook } from '../Public/Actions/books';
import { getProfile } from '../Public/Actions/user';
import { getBorrowedBook, returnBook } from '../Public/Actions/borrow';
import '../Css/style.css';
import ModalEditBook from '../Components/ModalEditBook';
import ModalDelete from '../Components/ModalDelete';
import ModalBorrow from '../Components/ModalBorrow';

class BookDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            id_book: this.props.id_book,
            openModalEdit : false,
            openModalDelete : false,
            modalBorrow : false,
            showSuccessModal: false,
            showReturnModal: false,
            bookDetail: [],
            userData: [],
            borrowedBook: [],
            formData: {
                return_at: new Date()
            }
        }
    }

    openModalEdit(open){
        this.setState({openModalEdit: open})
    }

    openModalDelete(open){
        this.setState({openModalDelete: open})
    }

    modalBorrow(open){
        this.setState({modalBorrow: open})
    }

    DeleteBook = async () => {
        await this.props.dispatch (deleteBook (this.state.id_book));
        this.setState({
            openModalDelete : false,
            showSuccessModal: true
        })
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000);
    }

    setAvailability = () => {
        this.setState({
            bookDetail : {...this.state.bookDetail, id_status: 2, availability: "Not Available"},
        })
    }
    
    returnBook = async () => {
        const id = this.state.id_book;
        await this.props.dispatch (getBorrowedBook(id));
        this.setState ({
            borrowedBook: this.props.borrow.borrowedBook,
        });
        await this.props.dispatch (returnBook (this.state.formData, this.state.borrowedBook.id));
        this.setState({
            bookDetail : {...this.state.bookDetail, id_status: 1, availability: "Available"},
            showReturnModal: true
        })
        setTimeout(() => {
            this.setState({
                showReturnModal: false
            })
        }, 2000);
    }

    componentDidMount = async () => {
        const token = localStorage.getItem('token')
        if(!token)
          this.props.history.push('/');

        const id = this.state.id_book;
        await this.props.dispatch (getBookDetail(id));
        this.setState ({
            bookDetail: this.props.book.booksList,
        });

        await this.props.dispatch (getBorrowedBook(id));
        this.setState ({
            borrowedBook: this.props.borrow.borrowedBook,
        });

        await this.props.dispatch (getProfile());
        this.setState({
            userData: this.props.user.userProfile
        })
    }

    render(){
        const {bookDetail} = this.state
        const user = this.state.userData
        let getDate = new Date(bookDetail.date_released);
        let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][getDate.getMonth()];
        const date_released = ('0' + (getDate.getDate())).slice(-2) + ' ' + month + ' ' + getDate.getFullYear();
        return(
            <React.Fragment>
                <Container style={{margin:"0px", maxWidth:"100%", fontFamily:"Airbnb Cereal App Medium"}}>
                    <Row style={{padding:"0px"}} className="image-header" style={{backgroundImage:`url(${bookDetail.image})`}}>
                        <Col md={10} style={{padding: '16px 0px 0px 19px', margin:'0px'}}>
                            <Link to='../home'>
                                <Button variant="light" className="btn-back">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Button>
                            </Link>
                        </Col>
                        {
                            user.level == "admin" ? 
                                <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                                    <span><a href="javascript:void(0)" style={menu} onClick={() => this.openModalEdit(true)}>Edit</a></span>&nbsp;&nbsp; 
                                    <span><a href="javascript:void(0)" style={menu} onClick={() => this.openModalDelete(true)}>Delete</a></span>
                                </Col>
                            : ""
                        }
                    </Row>
                    <Row style={{padding:"3vh", paddingLeft:"40px"}}>
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>{bookDetail.genre}</b></Button><br/>
                            <Row>
                                <Col md={10}>
                                    <h1>{bookDetail.title}</h1>
                                    <h5>{date_released}</h5>
                                </Col>
                                <Col>
                                { (bookDetail.availability == "Available") ? 
                                    <h4 style={{color:"#99D815"}}>{bookDetail.availability}</h4>
                                : <h4 style={{color:"red"}}>{bookDetail.availability}</h4>}
                                    
                                </Col>
                            </Row>
                            <p style={{marginTop:"25px"}}>
                                {bookDetail.description}
                            </p>
                        </Col>
                        <Col>
                        <Card style={cover}>
                            <Card.Img variant="top" src={bookDetail.image} className="book-cover"/>
                        </Card>
                        {   user.level == "admin" ? 
                                (bookDetail.availability == "Available") ? 
                                    <Fragment>
                                        <Button variant="warning" className="float-right btn-borrow" onClick={() => this.modalBorrow(true)}><b>Borrow</b></Button><br/>
                                    </Fragment>
                                : 
                                    <Fragment>
                                        <Button variant="warning" className="float-right btn-borrow" onClick={() => this.returnBook()}><b>Return</b></Button><br/>
                                    </Fragment>
                            : ""
                        }
                            
                        </Col>
                    </Row>
                </Container>

                <ModalEditBook
                bookDetail={bookDetail}
                open={this.state.openModalEdit}
                history={this.props.history} hide={() => this.setState({openModalEdit: false})} />

                <ModalDelete 
                title={bookDetail.title}
                open={this.state.openModalDelete} 
                hide={() => this.setState({openModalDelete: false})} 
                delete={() => this.DeleteBook} />
                <SweetAlert success title="Deleted!" show={this.state.showSuccessModal} showConfirm={false} >
                    Book has been deleted!
                </SweetAlert>

                <ModalBorrow 
                open={this.state.modalBorrow} 
                hide={() => this.setState({modalBorrow: false})}
                id_book={this.state.id_book}
                onSubmit={this.handleSubmit}
                setAvailability={this.setAvailability}/>

                <SweetAlert success showCloseButton title="Success!" show={this.state.showReturnModal} showConfirm={false}>
                    Successful book returning
                </SweetAlert>
            </React.Fragment>
        )
    }
}

// styling
const menu = {
    color:'#FFF',
    textDecoration:"none"
}

const cover = { 
    width: '10rem',
    marginLeft:"30vh",
    borderRadius: '15px'
}

const mapStateToProps = (state) => {
    return{
      book: state.books,
      user: state.user,
      borrow: state.borrow
    }
}

export default connect (mapStateToProps) (BookDetail)