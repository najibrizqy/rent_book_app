import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import {connect} from 'react-redux';

import {getGenres} from '../Public/Actions/genres';

class GenreDropdown extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount = async () => {
    await this.props.dispatch (getGenres ());
    this.setState ({
      data: this.props.genres,
    });
  };
  
  render() {
    const genre = this.state.data
    return(
        <NavDropdown title="All Categories">
            {genre.genresList ? 
            genre.genresList.map((genre) => {
              return (
                <NavDropdown.Item href={`/genre/${genre.id_genre}`}>{genre.name}</NavDropdown.Item>
              )
            }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
        </NavDropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres,
  };
};

export default connect (mapStateToProps) (GenreDropdown)