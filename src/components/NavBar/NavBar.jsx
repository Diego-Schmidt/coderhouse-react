import React from 'react';
import logo from './logo.webp';
import CartWidget from '../CartWidget/CartWidget';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import './NavBar.css';
// import Link from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
// import { useContext } from 'react';
import useCartContext from '../../store/CartContext.jsx';



function NavBar(props) {
  const { contextFunction  } = useCartContext();
  contextFunction();
    return (
<header>
<nav>
<Navbar  className="headlogbg" bg="light" expand="lg">
  <Container>
  <LinkContainer to="/"><Navbar.Brand><img className="navbar-brand" src={logo} width="150px" alt="logo" /></Navbar.Brand></LinkContainer>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/#"><Nav.Link href="#home">Inicio</Nav.Link></LinkContainer>
        <NavDropdown title="Menú" id="basic-nav-dropdown">
        <LinkContainer to="/#"><NavDropdown.Item>Todo</NavDropdown.Item></LinkContainer>  
        <LinkContainer to="/#/category/hamburguesas"><NavDropdown.Item>Hamburguesas</NavDropdown.Item></LinkContainer>
        <LinkContainer to="/#/category/papas"><NavDropdown.Item>Papas</NavDropdown.Item></LinkContainer>
        <LinkContainer to="/#/category/batatas"><NavDropdown.Item>Batatas</NavDropdown.Item></LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/#/category/bebidas"><NavDropdown.Item>Bebidas</NavDropdown.Item></LinkContainer>
        </NavDropdown>
        <Nav.Link href="#link">Servicios</Nav.Link>
        <Nav.Link href="#link">Acerca</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        
      </Nav>
      
    </Navbar.Collapse>
    <CartWidget />
  </Container>
  
  </Navbar>
  </nav>
  </header>
    );
}

export default NavBar;