import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './../../img/beer-logo.png';

function Header() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar.Brand href="#">Brewers Paradise</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;