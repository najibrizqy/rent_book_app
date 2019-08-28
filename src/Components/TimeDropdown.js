import React from 'react'
import Axios from 'axios'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import {connect} from 'react-redux';

import {getYears} from '../Public/Actions/years';

class GenreDropdown extends React.Component{
  constructor(){
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount = async () => {
    await this.props.dispatch (getYears ());
    this.setState ({
      data: this.props.years,
    });
  };
  
  render() {
    const year = this.state.data
    return(
        <NavDropdown title="All Time">
            <NavDropdown.Item key="all" onClick={() => this.props.history.push(`/home/`)}>All Time</NavDropdown.Item>
            {year.yearsList ? 
            year.yearsList.map((year) => {
              return (
                <NavDropdown.Item key={year.year} onClick={() => this.props.history.push(`/home/year/${year.year}`)}>{year.year}</NavDropdown.Item>
              )
            }): <NavDropdown.Item href="#/"><Spinner animation="grow" size="sm"/> Loading...</NavDropdown.Item>}
        </NavDropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    years: state.years,
  };
};

export default connect (mapStateToProps) (GenreDropdown)