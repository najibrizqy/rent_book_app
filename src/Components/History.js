import React, {Component, Fragment} from 'react';
import {Container, Table} from 'react-bootstrap';
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

    componentDidMount = async () =>{
        //Get User Data
        await this.props.dispatch(getProfile())
        this.setState({
          userData: this.props.user.userProfile
        })

        //Get History
        await this.props.dispatch (getHistory (this.state.userData.id));
        this.setState ({
            data: this.props.borrow,
        });
    }

    render(){
        return(
            <Fragment>
                <Container className="mt-4">
                    <Table striped bordered hover responsive>
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
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