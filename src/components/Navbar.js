import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

const Topbar = () => {
    return ( 
<Navbar expand="md" variant="dark" className="nav">
  <Container>
    <Navbar.Brand href="#">Quoto</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Features</Nav.Link>
        <Nav.Link href="#action1">About Us</Nav.Link>
        <Nav.Link href="#action1">Portfolio</Nav.Link>
        <Nav.Link href="#action2">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}
 
export default Topbar;