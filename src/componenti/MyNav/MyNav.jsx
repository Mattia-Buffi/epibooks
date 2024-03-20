import React from 'react';
import { Navbar,Container,Nav,Form,Button} from 'react-bootstrap';
import { useState } from 'react';

export default function MyNav({navmenu,keySearch,setKeySearch}) {
  const [light,setLight]=useState(true);
  function deleteList(){
    setKeySearch("");
  }
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
        <Form className="d-flex me-3 align-items-baseline">
            <Form.Label className='me-2'>Cerca Titolo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              value={keySearch}
              onChange={(e)=>setKeySearch(e.target.value)}
            />
            {(keySearch!="")&&<Button className='ms-2' variant="outline-danger" onClick={deleteList}>Reset</Button>}
        </Form>
      <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={light?"Light":"Dark"}
        onChange={(e)=>setLight(!light)}
      />
      </Form>
      </Container>
    </Navbar>
  )
}
