import React, {Component, Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


import '../Css/style.css';
import imageNotFound from '../image-404.jpg';


class BooksList extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: props.data
    }
  }

  handleGetDetail(id){
    window.location.href = `http://localhost:3000/book_detail/${id}`
  }

  render(){
    const {data} = this.state
    return(
      <Fragment>
        <Row className="mb-4 mt-4">
          <div className="list">
                <h3 style={font}>List Book</h3>
            </div>
        </Row>
        <Row className="mb-5">
            <div className="card-list">
              {data ?
                data.map((res) => {
                  const image = res.image.length > 0 ? res.image : imageNotFound;
                  return(
                      <Card key={res.id_book} className="card-book radius-top" onClick={() => this.handleGetDetail(res.id_book)}>
                          <Card.Header style={{padding: '0px'}} class="radius-top">
                              <Card.Img variant="top" src={image} className="book-img radius-top"/>
                          </Card.Header>
                          <Card.Body>
                              <Card.Title className="font"><center>{res.title}</center></Card.Title>
                              <Card.Text>
                                  {res.description.length > 2 ?  res.description.substr(0,150)+'...': res.description}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  )
              }): <div className="loading"><Spinner animation="border" size="lg"/> Loading...</div>}
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

export default BooksList