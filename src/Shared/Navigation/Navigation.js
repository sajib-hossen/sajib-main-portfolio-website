import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <>
          <Navbar.Brand as={Link} to="/">
            Sajib_Hossen
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto navItem">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/skill">
                Skill
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
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
