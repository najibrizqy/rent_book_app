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
            <NavDropdown.Item key="all" onClick={() => this.props.history.push(`/home/`)}>All Categories</NavDropdown.Item>
            {genre.genresList ? 
            genre.genresList.map((genre) => {
              return (
                <NavDropdown.Item key={genre.id_genre} onClick={() => this.props.history.push(`/home/genre/${genre.name}`)}>{genre.name}</NavDropdown.Item>
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