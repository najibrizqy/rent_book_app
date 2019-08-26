import React from 'react';
import {FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import BooksList from './BooksList'

class BooksSearch extends React.Component {
    constructor(){
        super()
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value)
    }
    
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          console.log('enter press here! ')
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="box-search">
                    <div>
                        <FormControl 
                        type="text" 
                        name="search"
                        placeholder="Search book" 
                        className="mr-sm-2 btn-search"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}/>
                    </div>
                            
                    <div className="icon-search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default BooksSearch;