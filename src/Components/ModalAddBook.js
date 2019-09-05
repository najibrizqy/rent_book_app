import React, {Component, Fragment} from 'react';
import {Button, Container, Row, Col, Form, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';

import {addBook} from '../Public/Actions/books';
import {getGenres} from '../Public/Actions/genres';
import '../Css/style.css';

class ModalAddBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            genreList:[],
            formData:{
                title: '',
                description:'',
                date_released: new Date().toISOString().split('T')[0],
                id_genre:'1',
            },
            image: {},
            resModal: false,
            msg: ''
        }
    }

    resModalShow = (open) => {
        this.setState({ resModal: open });
    }

    handleChange = async (e) => {
        let newFormData = {...this.state.formData}
        const target = e.target
        const name = target.name
        const value = target.value
        newFormData[name] = value
        await this.setState({
          formData: newFormData
        })
        console.log(this.state.formData)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        const data = this.state.formData
        formData.append('title', data.title)
        formData.append('image', this.state.image)
        formData.append('description', data.description)
        formData.append('date_released', data.date_released)
        formData.append('id_genre', data.id_genre)
        console.log(formData)
        await this.props.dispatch(addBook(formData))
        .then(() => {
            const level = this.props.level;
            if(level == "admin"){
                this.props.hide();
                this.setState({
                    msg: `Data ${this.state.formData.title} successfully added.`
                })
                this.resModalShow(true)
                setTimeout(() => {
                    this.resModalShow(false)
                }, 3000);  
            }else{
                this.props.hide();
                this.setState({
                    msg: `Please wait until book confirmed.`
                })
                this.resModalShow(true)
                setTimeout(() => {
                    this.resModalShow(false)
                }, 3000);  
            }
        })
        .catch(() => {
            alert("GAGAL")
        })
    }

    handleImage = (e) => {
        const files = Array.from(e.target.files)
        this.setState({image:files[0]})
    }

    componentDidMount = async () => {
        await this.props.dispatch(getGenres())
        this.setState ({
            genreList: this.props.genres.genresList
        })
    };

    render(){
        const {genreList, msg} = this.state
        return(
            <Fragment>
                <Modal size="lg" show={this.props.open} onHide={this.props.hide}>
                    <Modal.Header closeButton style={{borderBottom:"none"}}>
                        <Modal.Title>Add Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                                        <Form.Control name="image" type="file" placeholder="Image Url..." onChange={this.handleImage} required/>
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={2}>Date Released</Col>
                                    <Col md={10}>
                                        <Form.Control name="date_released" type="date" defaultValue={new Date().toISOString().split('T')[0]} onChange={this.handleChange} required/>
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
                    </Modal.Body>
                </Modal>
        
                {/* Response Modal */}
                {/* <Modal show={this.state.resModal} onHide={() => this.setState({resModal: false})}>
                    <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <center>
                            <img src={check} alt="Not Found." width="120px" className="mb-3"/>
                            <p>Data <b>{this.state.formData.title}</b> successfully added.</p> 
                        </center>
                    </Modal.Body>
                    <Modal.Footer style={{borderTop:"none"}}>
                    </Modal.Footer>
                </Modal> */}
                <SweetAlert success showCloseButton title="Success!" show={this.state.resModal} showConfirm={false}>
                    {msg}
                </SweetAlert>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
      genres: state.genres
    }
}

export default connect (mapStateToProps) (ModalAddBook)