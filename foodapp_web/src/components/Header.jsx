import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/components/Header.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(){

    return(
        <Navbar variant="dark" expand="lg">
        <Navbar.Brand className="logo" href="/">+FoodApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link >Productos</Nav.Link>
            <Nav.Link >Aditivos</Nav.Link>
            <Nav.Link >Acerca de nosotros</Nav.Link>
            <Nav.Link >Contactanos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;