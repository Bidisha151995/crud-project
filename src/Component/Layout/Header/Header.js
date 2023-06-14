import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
    <Navbar bg="primary" variant="light">
      <Container>
      <Navbar.Brand as={Link} to="/">Api-Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/view">View</Nav.Link>
          <Nav.Link as={Link} to="/">Product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header