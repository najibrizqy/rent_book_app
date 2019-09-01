import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

import '../Css/style.css';

const ModalDelete = (props) => {
    return(
        <SweetAlert
        show={props.open}
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Are you sure?"
        onConfirm={props.delete()}
        onCancel={props.hide}
        >
        Are you sure to delete data <b>{props.title}</b>!
        </SweetAlert>
    )
}

export default ModalDelete