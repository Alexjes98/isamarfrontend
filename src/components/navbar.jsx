import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function NavBar() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Creaciones Isamar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/materials/create">
                <Nav.Link to="/materials/create"> Materials</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
