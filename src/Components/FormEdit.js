import React from 'react';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

import { editBook } from '../Public/Actions/books';
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

    handleImage = (e) => {
        const files = Array.from(e.target.files)
        this.setState({
            formData: {...this.state.formData, image:files[0]}
        })
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
        let formData = new FormData()
        const data = this.state.formData
        formData.append('title', data.title)
        formData.append('image', data.image)
        formData.append('description', data.description)
        formData.append('date_released', data.date_released)
        formData.append('id_genre', data.id_genre)
        formData.append('id_status', data.id_status)
        await this.props.dispatch (editBook(formData, this.state.id_book))
        .then(() => {
            window.location.reload()
        })
        .catch(() => {
            alert("GAGAL")
        })
    }

    componentDidMount = async () => {
        await this.props.dispatch (getGenres());
        this.setState ({
            genreList: this.props.genres.genresList,
        });
    };

    render(){
        const {genreList} = this.state
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
                            <Form.Control type="file" name="image" placeholder="Image Url..." onChange={this.handleImage} />
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
      books: state.books
    }
}

export default connect (mapStateToProps) (FormEdit)