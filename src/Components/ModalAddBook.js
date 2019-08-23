import React from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import '../Css/style.css';

class FormAddBook extends React.Component {
    constructor(){
        super()
        this.state = {
            genreList:[],
            formData:{
                title: '',
                description:'',
                image:'',
                date_released:'',
                id_genre:'',
            }
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

    handleSubmit(e){
        const item = localStorage.getItem('UserData');
        const parse = JSON.parse(item);
        const token = parse.dataUser.token;

        Axios.post('http://localhost:8016/books/', this.state.formData,{
          headers:{
            Authorization : token,
          }
        })
          .then(res => {
            console.log(res)
            window.location.reload()
          })
          .catch(err => console.log(err))
        e.preventDefault();
    }

    componentDidMount = () => {
        Axios.get ('http://localhost:8016/genre')
          .then (res => {
            this.setState ({genreList: res.data.values});
          })
          .catch (err => console.log ('error =', err));
    };

    render(){
        const {genreList} = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <Row className="mb-4">
                        <Col md={2}>Title</Col>
                        <Col md={10}>
                            <Form.Control name="title" type="text" placeholder="Title..." onChange={this.handleChange} required/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Image Url</Col>
                        <Col md={10}>
                            <Form.Control name="image" type="text" placeholder="Image Url..." onChange={this.handleChange} required/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Date Released</Col>
                        <Col md={10}>
                            <Form.Control name="date_released" type="date" placeholder="Title..." onChange={this.handleChange} required/>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={2}>Genre</Col>
                        <Col md={10}>
                            <Form.Control as="select" name="id_genre" onChange={this.handleChange} required>
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
                            <Form.Control name="description" as="textarea" rows="3" onChange={this.handleChange} required/>
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

const ModalAddBook = ({open, hide}) => {
    return(
        <Modal size="lg" show={open} onHide={hide}>
            <Modal.Header closeButton style={{borderBottom:"none"}}>
                <Modal.Title>Add Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormAddBook />
            </Modal.Body>
            {/* <Modal.Footer style={{borderTop:"none"}}>
                <Button variant="warning" onClick={hide} className="btn-save">
                Save
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default ModalAddBook