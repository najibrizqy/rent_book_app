import React from 'react';
import {FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const BooksSearch = (props) =>{
    return(
        <React.Fragment>
            <div className="box-search">
                <div>
                    <FormControl 
                    type="text" 
                    name="search"
                    placeholder="Search book" 
                    className="mr-sm-2 btn-search"
                    onKeyPress={(e)=>{
                        if(e.key === 'Enter') {
                            props.history.push(`/home?search=${e.target.value}`)
                          e.preventDefault()
                        }
                      }}/>
                </div>
                        
                <div className="icon-search">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>

            </div>
        </React.Fragment>
    )
}

export default BooksSearch;