import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import {Row, Button, Spinner} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

import {getBooksNewRelease} from '../Public/Actions/books';
import '../Css/style.css'

class Carousel extends Component{
    constructor(){
        super()
        this.state = {
          index: 2,
          data: [],
          property: {},
        }
    }

    componentDidMount = async () =>{
        await this.props.dispatch (getBooksNewRelease());
        this.setState ({
            data: this.props.books.booksNewRelease
        });
    }

    nextProperty = () => {
        const newIndex = this.state.index+1;
        this.setState({
          property: this.state.data[newIndex],
          index: newIndex
        })
      }

    prevProperty = () => {
        const newIndex = this.state.index-1;
        this.setState({
            property: this.state.data[newIndex],
            index: newIndex
        })
    }

    handleGetDetail = (id) => {
        this.props.history.push(`/book_detail/${id}`)
    }

    render(){
        const {index, data} = this.state;
        return(
            <Row className={`container1 cards-slider active-slide-${index}`}>
                <div className="cards-slider-wrapper" style={{
                    'transform': `translateX(-${index*(100/data.length)}%)`
                }}>
                    {
                        data.length > 0 ?
                            data.map((bookData, index) => 
                                <Card className="card-carousel wrap" key={bookData.id_book} id={`card-${index}`} style={{backgroundImage: `url(${bookData.image})`}} onClick={() => this.handleGetDetail(bookData.id_book)}>
                                    <Card.Body></Card.Body>
                                    <Card.Footer className="footer">
                                        <h3 className="mb-2">{bookData.title}</h3>
                                        <span className="genre-carousel">{bookData.genre}</span>
                                    </Card.Footer>
                                    <div className="ribbon ribbon-top-right"><span>New</span></div>
                                </Card>
                            )
                        : 
                            <Spinner animation="border" variant="primary" className="loading-carousel" />
                    }
                </div>
                {
                    data.length > 0 ?
                    <div className="btn-slide">
                        <Button variant="light" className="slide-left" onClick={() => this.prevProperty()} disabled={index === 0}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </Button>
                        <Button variant="light" className="slide-right" onClick={() => this.nextProperty()} disabled={index === data.length-1}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </Button>
                    </div>
                    :""
                }
            </Row>
            )
    }
}

Carousel.propTypes = {
    property: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
      books: state.books
    };
  };
  

export default connect (mapStateToProps) (Carousel);