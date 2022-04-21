import React from 'react';
import logo from './logo.webp';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';



function NavBar(props) {
    return (

<Navbar  className="headlogbg" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className="navbar-brand" src={logo} width="150px" alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Hamburguesas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Papas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Batatas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Servicios</Nav.Link>
        <Nav.Link href="#link">Acerca</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        
      </Nav>
      <CartWidget />
    </Navbar.Collapse>
  </Container>
  </Navbar>
    );
}

export default NavBar;