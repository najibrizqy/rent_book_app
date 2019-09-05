import React, {Component, Fragment} from 'react';
import {Card, Row, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

import '../Css/style.css';
import imageNotFound from '../image-404.jpg';
import {getBooks} from '../Public/Actions/books';
import Pagination from './Pagination';

class BooksList extends Component{
  constructor(props){
    super(props)

    this.state = {
      Source: props.Source || `${process.env.REACT_APP_HOST}/books`,
      data: [],
      currentPage: 1,
      totalPage: 1,
    }
  }

  handleGetDetail(id){
    this.props.history.push(`/book_detail/${id}`)
  }

  handleNext = (page) => {
    this.getBookList(this.state.currentPage + page)
  }
  
  handlePage = (page) => {
    this.getBookList(page)
  }

  componentDidMount(){
    this.getBookList(1)
  }

   getBookList = async (page) =>{
    await this.props.dispatch (getBooks (this.state.Source, this.props.search, page));
    this.setState ({
      data: this.props.books.booksList.values,
      currentPage: page,
      totalPage: this.props.books.booksList.totalPage,
    });
  }

  render(){
    const {data, currentPage, totalPage} = this.state
    return(
      <Fragment>
        <Row className="mb-4 mt-4 book-list">
          <div className="list">
                <h3 style={font}>List Book</h3>
            </div>
        </Row>
        <Row className="mb-5 justify-content-center">
            <div className="card-list">
              {data !== undefined ?
                data.map((res) => {
                  const image = res.image.length > 0 ? res.image : imageNotFound;
                  return(
                      <Card key={res.id_book} className="card-book radius-top" onClick={() => this.handleGetDetail(res.id_book)}>
                          <Card.Header className="header-card" style={radiusTop}>
                              <Card.Img variant="top" src={image} className="book-img radius-top"/>
                              <span className={(res.availability == "Available") ? "available" :(res.availability == "Ordered") ? "ordered": "not-available"}>{res.availability}</span>
                              <span className="genre-label">{res.genre}</span>
                          </Card.Header>
                          <Card.Body>
                              <Card.Title className="font"><center>{res.title.length > 20 ?  res.title.substr(0, 20)+'...': res.title}</center></Card.Title>
                              <Card.Text>
                                {res.description.length > 2 ?  res.description.substr(0,150)+'...': res.description}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  )
              }): <Alert variant="danger">
                    <Alert.Heading>Book not found.</Alert.Heading>
                  </Alert>
              }
            </div>
            <Pagination totalPage={totalPage} currentPage={currentPage} handleNext={this.handleNext} handlePage={this.handlePage}/>
        </Row>
      </Fragment>
    )
  }
}

// styling

const font= {
  fontFamily:"Airbnb Cereal App Medium"
}

const radiusTop = {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect (mapStateToProps) (BooksList);