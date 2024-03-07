import React from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function MyNav({navmenu}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navmenu.map((elem)=> <Nav.Link key={elem} href="#">{elem}</Nav.Link>)}   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
