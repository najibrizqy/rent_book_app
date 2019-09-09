import React, {Component, Fragment} from 'react';
import {Container, Table, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getBooksOrder} from '../Public/Actions/books';
import OrderAction from '../Components/OrderAction';

class BooksOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
        }
    }

    // handleGetDetail(id){
    //     this.props.history.push(`/book_detail/${id}`)
    // }

    getDataOrder = async() => {
        await this.props.dispatch(getBooksOrder())
        .then(() => {
            this.setState({
                data: this.props.books.booksOrder
            })
        })
        .catch(() => {
            this.setState({
                data: this.props.books.booksOrder
            })
        })
    }

    componentDidMount =  () =>{
        this.getDataOrder()
    }

    render(){
        const {data} = this.state
        return(
            <Fragment>
                <Container className="mt-5">
                    {
                        data.length > 0 ? 
                            <Table striped bordered hover responsive className="historyTable">
                                <thead>
                                    <tr>
                                        <th className="wd-no">#</th>
                                        <th className="wd-title">Title</th>
                                        <th className="wd-donate">ID Card</th>
                                        <th className="wd-donate">Request By</th>
                                        <th className="wd-donate">Username</th>
                                        <th className="wd-action text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((res, index) => {
                                            return(
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td className="text-center">
                                                            {res.title}<br />
                                                            <img src={res.image} className="img-donate" /> <br />
                                                            No Book : {res.id_book}
                                                        </td>
                                                        <td>
                                                            {res.id_user}
                                                        </td>
                                                        <td>{res.full_name}</td>
                                                        <td>@{res.username}</td>
                                                        <td style={{position: "relative"}}>
                                                            <OrderAction data={res} setDataOrder={this.getDataOrder} />
                                                        </td>
                                                    </tr>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        :
                            <Alert variant="danger emptyDonate">
                                <Alert.Heading>Empty Data.</Alert.Heading>
                            </Alert>
                    }
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      books : state.books,
    };
};

export default connect (mapStateToProps) (BooksOrder)