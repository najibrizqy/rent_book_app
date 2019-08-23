import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

import '../Css/style.css'

const Carousel = ({property, index}) => {
    const {title, genre, image} = property;
    return(
        <Link to='book_detail' style={link}>
            <Card className="card-carousel wrap" id={`card-${index}`} style={{backgroundImage: `url(${image})`}}>
                <Card.Body></Card.Body>
                <Card.Footer className="footer">
                    <h3 className="mb-2">{title}</h3>
                    {genre}
                </Card.Footer>
            </Card>
        </Link>
    )
}

Carousel.propTypes = {
    property: PropTypes.object.isRequired
}
// styling
const link = {
    color:'black',
    textDecoration:"none"
  }

export default Carousel;