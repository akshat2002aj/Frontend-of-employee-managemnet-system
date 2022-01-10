import React from "react";

import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import history from "../history";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#"> </Nav.Link>
              <Nav.Link href="#"> </Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="primary"
                onClick={() => {
                  history.push("/");
                  window.location.reload();
                }}
              >
                Back
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
