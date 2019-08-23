import React from 'react'
import Axios from 'axios'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

class GenreDropdown extends React.Component{
  constructor(){
    super()
    this.state = {
      listYear: [],
    }
  }

  componentDidMount = () => {
    Axios.get ('http://localhost:8016/books/year')
      .then (res => {
        console.log("DATA = ", res)
        this.setState ({listYear: res.data.values});
      })
      .catch (err => console.log ('err = ', err));
  };
  
  render() {
    const listYear = this.state.listYear
    return(
        <NavDropdown title="All Time">
            {listYear.length > 0 ? 
            listYear.map((year) => {
              return (
                <NavDropdown.Item href={`http://localhost:3000/home/year/${year.year}`}>{year.year}</NavDropdown.Item>
              )
            }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
        </NavDropdown>
    )
  }
}
export default GenreDropdown