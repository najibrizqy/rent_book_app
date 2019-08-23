import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import '../Css/style.css';
import ModalEditBook from '../Components/ModalEditBook';
import ModalDelete from '../Components/ModalDelete';

class BookDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openModalEdit : false,
            openModalDelete : false
        }
    }

    openModalEdit(open){
        this.setState({openModalEdit: open})
    }

    openModalDelete(open){
        this.setState({openModalDelete: open})
    }


    render(){
        return(
            <React.Fragment>
                <Container style={{margin:"0px", maxWidth:"100%", fontFamily:"Airbnb Cereal App Medium"}}>
                    <Row style={{padding:"0px"}} className="image-header">
                        <Col md={10} style={{padding: '16px 0px 0px 19px', margin:'0px'}}>
                            <Link to='home'>
                                <Button variant="light" style={{borderRadius:"5vh"}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Button>
                            </Link>
                        </Col>
                        <Col md={2} className="float-right text-center" style={{fontSize:"20px", color:"#FFF"}}>
                            <span><a href="javascript:void(0)" style={menu} onClick={() => this.openModalEdit(true)}>Edit</a></span>&nbsp;&nbsp; 
                            <span><a href="javascript:void(0)" style={menu} onClick={() => this.openModalDelete(true)}>Delete</a></span>
                        </Col>
                    </Row>
                    <Row style={{padding:"3vh", paddingLeft:"40px"}}>
                        <Col md={8}>
                            <Button variant="warning" className="btn-genre"><b>Novel</b></Button><br/>
                            <Row>
                                <Col md={10}>
                                    <h1>DILAN 1990</h1>
                                    <h5>30 Juni 2019</h5>
                                </Col>
                                <Col>
                                    <h4 style={{color:"#99D815"}}>Available</h4>
                                </Col>
                            </Row>
                            <p style={{marginTop:"25px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, ac eleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam at elementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.
                            </p>
                        </Col>
                        <Col>
                        <Card style={{ width: '10rem',marginLeft:"30vh"}}>
                            <Card.Img variant="top" src="https://s3-alpha-sig.figma.com/img/0c53/ee2c/c00052790edb4a412728981b7e047740?Expires=1567382400&Signature=GA8pK4S8FfbIg3sTKSORuifRZeH4t5CgJKk728tF9y54grIC7UgGLUcWYCbinUb-rpQ3GtuoYnQnfRbZ9usaOZ5Zq6I84LBstrfdX9l678nL1q1vFIWMvpMxRCwLX1z-Wma3fBVEnVxhiDveATJus~mDyxpHVSgoczlYnJgUcw~cB-nsb4OeYPklMigLvKRq4a4rG1zJMGvXNg5IrNetKhCt3hy4yiUpiv24T634MRmG35muoaarGv2xBiLp0A0owaFxGj0QwxRz-hbZmJuL2k6i8tURqoQ5PPgRKVWs2HlLQ6HiQdw2twPxuWwjNdG61vx6FNdASGqAleYjFybxUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="book-cover"/>
                        </Card>
                            <Button variant="warning" className="float-right btn-borrow"><b>Borrow</b></Button><br/>
                        </Col>
                    </Row>
                </Container>
                <ModalEditBook open={this.state.openModalEdit} hide={() => this.setState({openModalEdit: false})} />
                <ModalDelete open={this.state.openModalDelete} hide={() => this.setState({openModalDelete: false})} />
            </React.Fragment>
        )
    }
}

// styling
const menu = {
    color:'#FFF',
    textDecoration:"none"
}

export default BookDetail