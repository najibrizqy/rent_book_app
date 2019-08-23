import React from 'react'
import Axios from 'axios'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

class GenreDropdown extends React.Component{
  constructor(){
    super()
    this.state = {
      listGenre: [],
    }
  }

  componentDidMount = () => {
    Axios.get ('http://localhost:8016/genre')
      .then (res => {
        console.log("DATA = ", res)
        this.setState ({listGenre: res.data.values});
      })
      .catch (err => console.log ('err = ', err));
  };
  
  render() {
    const listGenre = this.state.listGenre
    return(
        <NavDropdown title="All Categories">
            {listGenre.length > 0 ? 
            listGenre.map((genre) => {
              return (
                <NavDropdown.Item href={`/genre/${genre.id_genre}`}>{genre.name}</NavDropdown.Item>
              )
            }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
        </NavDropdown>
    )
  }
}
export default GenreDropdown