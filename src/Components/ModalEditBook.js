import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import '../Css/style.css';

const ModalEditBook = ({open, hide}) => {
    return(
        <Modal size="lg" show={open} onHide={hide}>
            <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container>
                        <Row className="mb-4">
                            <Col md={2}>Title</Col>
                            <Col md={10}>
                                <Form.Control type="text" placeholder="Title..." />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={2}>Image Url</Col>
                            <Col md={10}>
                                <Form.Control type="text" placeholder="Image Url..." />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={2}>Date Released</Col>
                            <Col md={10}>
                                <Form.Control type="date" placeholder="Title..." />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={2}>Genre</Col>
                            <Col md={10}>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={2}>Description</Col>
                            <Col md={10}>
                                <Form.Control as="textarea" rows="3" />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{borderTop:"none"}}>
                <Button variant="warning" onClick={hide} className="btn-save">
                Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditBook