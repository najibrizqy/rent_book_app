import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { getBookDetail, deleteBook } from '../Public/Actions/books';
import '../Css/style.css';
import ModalEditBook from '../Components/ModalEditBook';
import ModalDelete from '../Components/ModalDelete';

class BookDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id_book: this.props.id_book,
            openModalEdit : false,
            openModalDelete : false,
            bookDetail: [],
        }
    }

    openModalEdit(open){
        this.setState({openModalEdit: open})
    }

    openModalDelete(open){
        this.setState({openModalDelete: open})
    }

    DeleteBook = async () => {
        await this.props.dispatch (deleteBook (this.state.id_book));
        this.setState({openModalDelete: true})
        setTimeout(() => {
            this.props.history.push('/');
        }, 3000);
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
    }

    render(){
        const {bookDetail} = this.state
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
                        <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                            <span><a href="javascript:void(0)" style={menu} onClick={() => this.openModalEdit(true)}>Edit</a></span>&nbsp;&nbsp; 
                            <span><a href="javascript:void(0)" style={menu} onClick={this.DeleteBook}>Delete</a></span>
                        </Col>
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
                            <Button variant="warning" className="float-right btn-borrow"><b>Borrow</b></Button><br/>
                        </Col>
                    </Row>
                </Container>

                <ModalEditBook
                id_book={bookDetail.id_book}
                title={bookDetail.title}
                description={bookDetail.description}
                image={bookDetail.image}
                date_released={bookDetail.date_released}
                id_genre={bookDetail.id_genre}
                id_status={bookDetail.id_status}
                open={this.state.openModalEdit}
                history={this.props.history} hide={() => this.setState({openModalEdit: false})} />

                <ModalDelete title={bookDetail.title}
                open={this.state.openModalDelete} hide={() => this.setState({openModalDelete: false})} />
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
      book: state.books
    }
}

export default connect (mapStateToProps) (BookDetail)