import React from 'react';
import {Modal} from 'react-bootstrap';

import '../Css/style.css';
import FormEdit from './FormEdit'

const ModalEditBook = (props) => {
    return(
        <Modal size="lg" show={props.open} onHide={props.hide}>
            <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                <Modal.Title>Edit Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormEdit
                bookDetail={props.bookDetail}
                history={props.history}/>
            </Modal.Body>
        </Modal>
    )
}

export default ModalEditBook