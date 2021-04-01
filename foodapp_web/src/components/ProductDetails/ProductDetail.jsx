import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/components/ProductDetail.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import { ShareFill } from 'react-bootstrap-icons';


function ProductDetail({children, Name, NetContent, Brand, IngredientsText}){
   
    return(
     <Container className="container-layout" fluid>
         <Row>
             <Col> <h2 className="titulo-producto">{Name}</h2></Col>
         </Row>
         <Row>
            <Col sm={4}>
                <Row className="justify-content-md-center">
                    <Col md="auto"><Image className="image" src="./cocacola600.png" rounded /></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto" xs={6}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" className="dropdown-Toggle-fixed"><ShareFill/></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Facebook</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Col>
            <Col sm={8}>
                <Row>
                    <Col>
                        <h4 className="titulo-producto">Caracteristicas del producto</h4>
                            <li>Cantidad: {NetContent}</li>
                            <li>Marcas: {Brand}</li>
                            <li>Descripción: {IngredientsText}</li>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4 className="titulo-producto">Ingredientes</h4>
                        {children[0]}
                    </Col>
                    <Col>
                        <h4 className="titulo-producto">Aditivos</h4>
                        {children[1]}
                    </Col>
                </Row>
            </Col>
         </Row>
     </Container>
    );
}

export default ProductDetail;
