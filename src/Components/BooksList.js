import React from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import '../Css/style.css';
import imageNotFound from '../image-404.jpg';

class BooksList extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
      totalPage:1,
      page: 1,
      limit: 10,
    }
  }

  componentDidMount(){
    Axios.get("http://localhost:8016/books")
      .then((result) =>{
        this.setState({
          data: result.data.values
        })
      })
      .catch(err => console.log(err))
  }

  handleGetDetail(id){
    window.location.href = `http://localhost:3000/book_detail/${id}`
  }

  render(){
    const book = this.state.data
    return(
        <Row>
            <div className="list">
                <h3 style={font}>List Book</h3>
            </div>
            
            <div style={grid} className="justify-content-between">
              {book.length > 0 ?
                book.map((res) => {
                  const image = res.image.length > 0 ? res.image : imageNotFound;
                  return(
                      <Card className="card-book radius-top" onClick={() => this.handleGetDetail(res.id_book)}>
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
        
    )
  }
}

// styling
const link = {
  color:'black',
  textDecoration:"none"
}

const font= {
  fontFamily:"Airbnb Cereal App Medium"
}

const grid = {
  display: 'flex', flexWrap:"wrap", flexDirection: 'row'
}

export default BooksList