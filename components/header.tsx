'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image alt="Hola" width={200} height={100} src="/img/Echoes-logo-w.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{ color: 'white' }}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/Ayuda" style={{ color: 'white' }}>
              Ayuda
            </Nav.Link>
            <NavDropdown
              title="Categorías"
              id="navbarScrollingDropdown"
              style={{ color: 'white' }}
            >
              <NavDropdown.Item href="/Vinilos" style={{ color: 'blak' }}>
                Vinilos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{ color: 'black' }}>
                Tornamesa
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ backgroundColor: 'black' }} />
              <NavDropdown.Item href="#action5" style={{ color: 'black' }}>
                Lo más vendido
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Cart" style={{ color: 'white' }}>
              Carrito
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-light"
              className="text-white hover:text-black hover:bg-white"
            >
              Buscar
            </Button>
            
          </Form>
          <Nav.Link className='lg:mx-[30px] lg:my-0 sm:mx-0 my-3 text-white' href="/Login">
              Iniciar sesión
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;