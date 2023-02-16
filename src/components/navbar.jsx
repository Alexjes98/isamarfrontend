import { React } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function NavBar({ session, setSession }) {
  const handleLogout = () => {
    localStorage.clear();
    setSession(null);
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Creaciones Isamar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav  justify-content-end">
            <Nav className="me-auto">
              <LinkContainer to="/orders/">
                <Nav.Link to="/orders/"> Ordenes</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/catalog/">
                <Nav.Link to="/catalog/"> Catalogo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/clothes/">
                <Nav.Link to="/clothes/"> Prendas</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/materials/">
                <Nav.Link to="/materials/"> Materiales</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Text>
              Signed in as: {session.nombre} {session.dni}
            </Navbar.Text>
            <Button
              variant="secondary"
              className="mx-2 p-1 justify-content-end"
              onClick={handleLogout}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-logout"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
              </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
