import React from 'react';
import Modal from 'react-bootstrap/Modal';

import '../Css/style.css';
import check from '../check.png';

const ModalDelete = ({title, open, hide}) => {
    return(
        <Modal show={open} onHide={hide}>
            <Modal.Header className="modal-header" closeButton style={{borderBottom:"none"}}>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <center>
                    <img src={check} alt="Not Found." width="120px" className="mb-3"/>
                    <p>Data <b>{title}</b> berhasil dihapus!</p> 
                </center>
            </Modal.Body>
            <Modal.Footer style={{borderTop:"none"}}>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete