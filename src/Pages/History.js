import React, {Component, Fragment} from 'react';
import {Container, Table, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import {getHistory} from '../Public/Actions/borrow';
import {getProfile} from '../Public/Actions/user';

class History extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: [],
            data: [],
        }
    }

    handleGetDetail(id){
        this.props.history.push(`/book_detail/${id}`)
    }

    componentDidMount = async () =>{
        //Get User Data
        await this.props.dispatch(getProfile())
        this.setState({
          userData: this.props.user.userProfile
        })

        //Get History
        await this.props.dispatch (getHistory (this.state.userData.id));
        this.setState ({
            data: this.props.borrow.historyBorrow,
        });
    }

    render(){
        const {data} = this.state
        return(
            <Fragment>
                <Container className="mt-5">
                    <Table striped bordered hover responsive className="historyTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Borrow At</th>
                                <th>Expected Return At</th>
                                <th>Return At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((res, index) => {
                                    //Date time for expected limit
                                    let rent_at = new Date(res.rent_at)
                                    rent_at.setDate(rent_at.getDate() + 7)
                                    let month = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"];
                                    let month_limit = month[rent_at.getMonth()]
                                    let time_limit = rent_at.toLocaleTimeString();
                                    let limit_date = ('0' + (rent_at.getDate())).slice(-2) + ' ' + month_limit + ' ' + rent_at.getFullYear() + ', ' + time_limit;

                                    //Date time for borrow at
                                    let borrow = new Date(res.rent_at)
                                    let month_borrow = month[borrow.getMonth()]
                                    let time_borrow = borrow.toLocaleTimeString();
                                    let borrow_date = ('0' + (borrow.getDate())).slice(-2) + ' ' + month_borrow + ' ' + borrow.getFullYear() + ', ' + time_borrow;

                                    //Date time for return at
                                    let return_at = new Date(res.return_at)
                                    let month_return = month[return_at.getMonth()]
                                    let time_return = return_at.toLocaleTimeString();
                                    let return_date = ('0' + (return_at.getDate())).slice(-2) + ' ' + month_return + ' ' + return_at.getFullYear() + ', ' + time_return;

                                    return(
                                        <Fragment key={index}>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{res.title}</td>
                                                <td>{borrow_date}</td>
                                                <td>{limit_date}</td>
                                                <td>{res.return_at != null ? return_date : <b>Not been restored</b>}</td>
                                                <td>
                                                    <Button variant="outline-primary" onClick={() => this.handleGetDetail(res.id_book)}>
                                                        Book Detail
                                                    </Button>
                                                </td>
                                            </tr>
                                        </Fragment>
                                    )
                                 })
                            }
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      user : state.user,
      borrow: state.borrow,
    };
  };

export default connect (mapStateToProps) (History)