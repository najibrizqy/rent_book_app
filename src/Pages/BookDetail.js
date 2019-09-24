import React, {Component, Fragment} from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';

import { getBookDetail, deleteBook } from '../Public/Actions/books';
import { getProfile, getUserById } from '../Public/Actions/user';
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
            showConfirmModal: false,
            bookDetail: [],
            userData: [],
            borrowedBook: [],
            userRegular:[],
            formData: {
                return_at: new Date()
            },
            formConfirm: {
                id_user: '',
                id_book: '',
            },
            returnLimit:''
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

    setAvailability = (id) => {
        const available = id == 2 ? "Not Available" : "Ordered"
        this.setState({
            bookDetail : {...this.state.bookDetail, id_status: id, availability: available},
        })
        this.getBorrowedBook()
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

    handleBookOrder = async () => {
        this.props.history.push('/home/ordered_books')
    }

    getUserId = async () =>{
        const id = this.state.id_book;
        if(this.state.borrowedBook !== undefined){
            await this.props.dispatch (getUserById(this.state.borrowedBook.id_user));
            this.setState({
                userRegular: this.props.user.userId[0],
                formConfirm: {...this.state.formConfirm, id_user: this.state.borrowedBook.id_user, id_book: id}
            },() => {console.log(this.state)})
        }
    }

    getBorrowedBook = async () => {
        const id = this.state.id_book;
        await this.props.dispatch (getBorrowedBook(id));
        await this.setState ({
            borrowedBook: this.props.borrow.borrowedBook
        });
        await this.getUserId()
        this.getReturnLimit()
    }

    getReturnLimit = () => {
        if(this.state.borrowedBook != undefined){
            let rent_at = new Date(this.state.borrowedBook.rent_at)
            rent_at.setDate(rent_at.getDate() + 7)
            let month_limit = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][rent_at.getMonth()];
            let time = rent_at.toLocaleTimeString()
            let return_date = ('0' + (rent_at.getDate())).slice(-2) + ' ' + month_limit + ' ' + rent_at.getFullYear() + ', ' + time;
            this.setState({
                returnLimit: return_date
            })
        }
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

        this.getBorrowedBook()

        await this.props.dispatch (getProfile());
        this.setState({
            userData: this.props.user.userProfile
        })
    }

    render(){
        const {bookDetail, userRegular, returnLimit, id_book} = this.state
        const user = this.state.userData

        let getDate = new Date(bookDetail.date_released);
        let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"][getDate.getMonth()];
        const date_released = ('0' + (getDate.getDate())).slice(-2) + ' ' + month + ' ' + getDate.getFullYear();
        
        const UserId = user.id == userRegular.id_user; // if Login by User

        return(
            <React.Fragment>
                <Container className="detail-container">
                    <Row className="image-header" style={{backgroundImage:`url(${bookDetail.image})`,padding:"0px"}}>
                        <Col md={9}>
                            <Button variant="light" className="btn-back" onClick={() => this.props.history.goBack()}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Button>
                        </Col>
                        {
                            user.level == "admin" ? 
                                <Col md={3} className="text-right btn-action">
                                    <Button variant="outline-primary btn-edit" onClick={() => this.openModalEdit(true)}>Edit</Button>
                                    <Button variant="outline-danger" onClick={() => this.openModalDelete(true)}>Delete</Button>
                                </Col>
                            : ""
                        }
                    </Row>
                    <Row className="detail-items">
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>{bookDetail.genre}</b></Button><br/>
                            <Row>
                                <Col md={9}>
                                    <h1>{bookDetail.title}</h1>
                                    <h5>{date_released}</h5>
                                    {
                                        bookDetail.availability == "Available" ?
                                            ""
                                        : (bookDetail.availability == "Ordered") ?
                                            UserId ?
                                                <span className="order">Please wait until admin confirm the order</span>
                                            :   <Fragment>
                                                    <span className="order">Ordered By : </span>
                                                    <span className="borrow-item">{userRegular.full_name}</span><br/>
                                                    <span className="order">Please wait until book available</span>
                                                </Fragment>
                                        : UserId ?
                                            <Fragment>
                                                <span className="borrowed">Don't forget maximum book return at {returnLimit}</span>
                                            </Fragment>
                                         :
                                            <Fragment>
                                                <span className="borrowed">Borrowed By : </span>
                                                <span className="borrow-item">{userRegular.full_name}</span><br/>
                                                <span className="borrowed">Expected Return At   : </span>
                                                <span className="borrow-item">{returnLimit}</span>
                                            </Fragment>
                                            
                                    }
                                </Col>
                                <Col md={3} className="text-right">
                                { 
                                    (bookDetail.availability == "Available") ? 
                                        <h4 style={{color:"#99D815"}}>{bookDetail.availability}</h4>
                                    : (bookDetail.availability == "Ordered") ?
                                        <h4 style={{color:"#007bff"}}>{bookDetail.availability}</h4>
                                    :   
                                        <h4 style={{color:"red"}}>{bookDetail.availability}</h4>}
                                    
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
                                : (bookDetail.availability == "Ordered") ? 
                                    <Fragment>
                                        <Button variant="warning" className="float-right btn-order" onClick={() => this.handleBookOrder()}><b>BooksOrder</b></Button><br/>
                                    </Fragment>
                                :    <Fragment>
                                        <Button variant="warning" className="float-right btn-borrow" onClick={() => this.returnBook()}><b>Return</b></Button><br/>
                                    </Fragment>
                            : (bookDetail.availability == "Available") ? 
                                <Fragment>
                                    <Button variant="warning" className="float-right btn-borrow" onClick={() => this.modalBorrow(true)}><b>Borrow</b></Button><br/>
                                </Fragment>
                            : ""
                            
                        }
                            
                        </Col>
                    </Row>
                </Container>

                <ModalEditBook
                id_book={id_book}
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
                isUser={user}
                onSubmit={this.handleSubmit}
                setAvailability={this.setAvailability}/>

                <SweetAlert success showCloseButton title="Success!" show={this.state.showReturnModal} showConfirm={false}>
                    Successful book returning
                </SweetAlert>

                <SweetAlert success showCloseButton title="Success!" show={this.state.showConfirmModal} showConfirm={false}>
                    Successful book confirm
                </SweetAlert>
            </React.Fragment>
        )
    }
}

// styling
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