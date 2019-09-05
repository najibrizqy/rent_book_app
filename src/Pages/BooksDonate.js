import React, {Component, Fragment} from 'react';
import {Container, Table, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getBooksDonate} from '../Public/Actions/books';
import DonateAction from '../Components/DonateAction';

class BooksDonate extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
        }
    }

    // handleGetDetail(id){
    //     this.props.history.push(`/book_detail/${id}`)
    // }

    getDataDonate = async() => {
        await this.props.dispatch(getBooksDonate())
        .then(() => {
            this.setState({
                data: this.props.books.booksDonate
            })
        })
    }

    componentDidMount =  () =>{
        this.getDataDonate()
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
                                        <th className="wd-des">Description</th>
                                        <th className="wd-genre">Genre</th>
                                        <th className="wd-donate">Donate By</th>
                                        <th className="wd-action text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((res, index) => {
                                            //Date time for expected limit
                                            let getDate = new Date(res.date_released);
                                            let month = ["January", "February", "March", "April", "May", "June",
                                            "July", "August", "September", "October", "November", "December"][getDate.getMonth()];
                                            const date_released = ('0' + (getDate.getDate())).slice(-2) + ' ' + month + ' ' + getDate.getFullYear();
                                            
                                            return(
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td className="text-center">
                                                            {res.title}<br />
                                                            <img src={res.image} className="img-donate" /> <br />
                                                            {date_released}
                                                        </td>
                                                        <td>
                                                            {res.description.length > 2 ?  res.description.substr(0,300)+'...': res.description}
                                                        </td>
                                                        <td>{res.genre}</td>
                                                        <td>{res.addBy}</td>
                                                        <td style={{position: "relative"}}>
                                                            <DonateAction data={res} setData={this.getDataDonate}/>
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

export default connect (mapStateToProps) (BooksDonate)