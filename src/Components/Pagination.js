import React from 'react';
import {Pagination} from 'react-bootstrap';

const Paging = (props) => {
    const pageNumbers = []
    for(let i=1;i<=props.totalPage;i++){
        pageNumbers.push(i);
    } 
    const page = props.currentPage;
    const totalPage = props.totalPage;
    return(
        <Pagination className="text-center position-fixed" style={{bottom:'0px'}} items={10} size="lg">
            <Pagination.Prev onClick={() => {props.handleNext(-1)}} disabled={page === 1}/>
            {
                pageNumbers.map((res) => {
                    return(
                        <Pagination.Item key={res} active={(res == page) ? "active": ''} onClick={() => {props.handlePage(res)}}>{res}</Pagination.Item>
                    )
                })
            } 
            {/* <Pagination.Ellipsis /> */}
            <Pagination.Next onClick={() => {props.handleNext(1)}} disabled={page === totalPage}/>
        </Pagination>
    )   
}

export default Paging;