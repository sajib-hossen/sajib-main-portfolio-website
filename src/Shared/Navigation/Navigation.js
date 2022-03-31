import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">Sajib_Hossen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto navItem">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Portfolio</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href="https://drive.google.com/file/d/1F5jR_yHLLxxU4GrMgnNIVVbsaRxnOTtA/view?usp=sharing"
                target="_blank"
              >
                <Button> Download Resume</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
