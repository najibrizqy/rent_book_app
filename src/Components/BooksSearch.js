import React from 'react';
import {FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const BooksSearch = ({handleChange}) =>{
    return(
        <React.Fragment>
            <div className="box-search">
                <div>
                    <FormControl 
                    type="text" 
                    name="search"
                    placeholder="Search book" 
                    className="mr-sm-2 btn-search"
                    onChange={handleChange}/>
                </div>
                        
                <div className="icon-search">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>

            </div>
        </React.Fragment>
    )
}

export default BooksSearch;