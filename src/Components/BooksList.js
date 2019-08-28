import React, {Component, Fragment} from 'react';
import {Card, Row, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

import '../Css/style.css';
import imageNotFound from '../image-404.jpg';
import {getBooks} from '../Public/Actions/books';

class BooksList extends Component{
  constructor(props){
    super(props)

    this.state = {
      Source: props.Source || "http://localhost:8016/books",
      history: props.history,
      data: []
    }
  }

  handleGetDetail(id){
    window.location.href = `http://localhost:3000/book_detail/${id}`
  }

componentDidMount = async () =>{
  //Get Data Books
  await this.props.dispatch (getBooks (this.state.Source, this.props.search));
  this.setState ({
    data: this.props.books,
  });
}

  render(){
    const {data} = this.state
    return(
      <Fragment>
        <Row className="mb-4 mt-4 book-list">
          <div className="list">
                <h3 style={font}>List Book</h3>
            </div>
        </Row>
        <Row className="mb-5">
            <div className="card-list">
              {data.booksList ?
                data.booksList.map((res) => {
                  const image = res.image.length > 0 ? res.image : imageNotFound;
                  return(
                      <Card key={res.id_book} className="card-book radius-top" onClick={() => this.handleGetDetail(res.id_book)}>
                          <Card.Header className="header-card" style={radiusTop}>
                              <Card.Img variant="top" src={image} className="book-img radius-top"/>
                              <span className={(res.availability == "available") ? "available" : "not-available"}>{res.availability}</span>
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
                  </Alert>}
            </div>
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