import React from 'react';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

import { editBook } from '../Public/Actions/books';
import { getStatus } from '../Public/Actions/status';
import { getGenres } from '../Public/Actions/genres';
import '../Css/style.css';

class FormEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id_book : props.id_book,
            formData:{
                title: props.bookDetail.title,
                description: props.bookDetail.description,
                image: props.bookDetail.image,
                date_released: props.bookDetail.date_released,
                id_genre: props.bookDetail.id_genre,
                id_status: props.bookDetail.id_status
            },
            genreList: [],
            statusList: []
        }
    }

    handleChange = (e) => {
        let newFormData = {...this.state.formData}
        const target = e.target
        const name = target.name
        const value = target.value
        newFormData[name] = value
        this.setState({
          formData: newFormData
        })
        console.log(this.state.formData)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.props.dispatch (editBook(this.state.formData, this.state.id_book));
        window.location.reload()
    }

    componentDidMount = async () => {
        await this.props.dispatch (getGenres());
        this.setState ({
            genreList: this.props.genres.genresList,
        });
        
        await this.props.dispatch (getStatus());
        this.setState ({
            statusList: this.props.status.statusList,
        });
    };

    render(){
        const {genreList} = this.state
        const {statusList} = this.state
        const {formData} = this.state
        const getdate = new Date(formData.date_released);
        const date = ('0' + (getdate.getDate())).slice(-2);
        const month = ('0' + (getdate.getMonth()+1)).slice(-2);
        const year = getdate.getFullYear();
        const date_released = year + '-' + month + '-' + date;
        return(
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="mb-4">
                        <Col md={2}>Title</Col>
                        <Col md={10}>
                            <Form.Control type="text" name="title" placeholder="Title..." onChange={this.handleChange} value={formData.title} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Image Url</Col>
                        <Col md={10}>
                            <Form.Control type="text" name="image" placeholder="Image Url..." onChange={this.handleChange} value={formData.image} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Date Released</Col>
                        <Col md={10}>
                            <Form.Control type="date" name="date_released" onChange={this.handleChange} value={date_released} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Genre</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_genre" value={formData.id_genre} onChange={this.handleChange} required >
                            {genreList.length !== 0 ? genreList.map((genre) => {
                                return <option value={genre.id_genre} key={genre.id_genre}> {genre.name} </option>
                                })
                                :<option>Loading...</option>
                            }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Status</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_status" value={formData.id_status} onChange={this.handleChange} required >
                            {statusList.length !== 0 ? statusList.map((status) => {
                                return <option value={status.id_status} key={status.id_status}> {status.availability} </option>
                                })
                                :<option>Loading...</option>
                            }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Description</Col>
                        <Col md={10}>
                            <Form.Control as="textarea" name="description" rows="3" onChange={this.handleChange} value={formData.description}/>
                        </Col>
                    </Row>
                </Container>
                <Button type="submit" variant="warning" className="btn-save float-right mt-3">
                Save
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      genres: state.genres,
      status: state.status,
      books: state.books
    }
}

export default connect (mapStateToProps) (FormEdit)