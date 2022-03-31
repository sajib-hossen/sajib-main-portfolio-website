import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <>
          <Navbar.Brand href="#home">Sajib_Hossen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto navItem">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Skill</Nav.Link>
              <Nav.Link href="#pricing">Portfolio</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                // eventKey={1}
                href="https://drive.google.com/file/d/1F5jR_yHLLxxU4GrMgnNIVVbsaRxnOTtA/view?usp=sharing"
                target="_blank"
              >
                <button className="nav-btn"> Download Resume</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default Navigation;
