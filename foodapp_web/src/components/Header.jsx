import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/components/Header.scss';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(){

    return(
        <Navbar variant="dark" expand="lg">
        <Navbar.Brand className="logo" href="#home">+FoodApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Aditivos</Nav.Link>
            <Nav.Link href="#link">Acerca de nosotros</Nav.Link>
            <Nav.Link href="#link">Contactanos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;