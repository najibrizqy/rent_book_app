import React from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import '../Css/style.css';

class FormEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id_book : props.id_book,
            formData:{
                title: props.title,
                description: props.description,
                image: props.image,
                date_released: props.date_released,
                id_genre: props.id_genre,
                id_status: props.id_status
            },
            genreList: [],
            statusList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
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

    handleSubmit(event){
        const item = localStorage.getItem('UserData');
        const parse = JSON.parse(item);
        const token = parse.dataUser.token;

        Axios.patch(`http://localhost:8016/books/${this.state.id_book}`,this.state.formData,{
          headers:{
            Authorization : token,
          }
        })
        .then(res => {
            console.log(res)
            window.location.reload()
          })
          .catch(err => console.log(err))
        event.preventDefault();
    }

    componentDidMount = () => {
        Axios.get ('http://localhost:8016/genre')
          .then (res => {
            this.setState ({genreList: res.data.values});
          })
          .catch (err => console.log ('error =', err));
        
        Axios.get ('http://localhost:8016/status')
          .then (res => {
            this.setState ({statusList: res.data.values});
          })
          .catch (err => console.log ('error =', err));
    };

    render(){
        const {genreList} = this.state
        const {statusList} = this.state
        const {formData} = this.state
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
                            <Form.Control type="date" name="date_released" placeholder="Date Released..." onChange={this.handleChange} value={formData.date_released} required />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Genre</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_genre" onChange={this.handleChange} required >
                            {genreList.length !== 0 ? genreList.map((genre) => {
                                const selected = this.state.id_genre === genre.id_genre ? 'selected':''
                                return <option {...selected} value={genre.id_genre} key={genre.id_genre}> {genre.name} </option>
                                })
                                :<option>Loading...</option>
                            }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Status</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_status" onChange={this.handleChange} required >
                            {statusList.length !== 0 ? statusList.map((status) => {
                                const selected = this.state.id_status == status.id_status ? 'selected':''
                                return <option {...selected} value={status.id_status} key={status.id_status}> {status.availability} </option>
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

const ModalEditBook = ({id_book, title, description, image, date_released, id_genre, id_status, open, hide}) => {
    return(
        <Modal size="lg" show={open} onHide={hide}>
            <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormEdit 
                    id_book={id_book}
                    title={title}
                    description={description}
                    image={image}
                    date_released={date_released}
                    id_genre={id_genre}
                    id_status={id_status}
                />
            </Modal.Body>
            {/* <Modal.Footer style={{borderTop:"none"}}>
                <Button variant="warning" onClick={hide} className="btn-save">
                Save
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default ModalEditBook