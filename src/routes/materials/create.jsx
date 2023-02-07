import React from "react";
import {
  Col,
  Row,
  Form,
  Button,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MaterialsCreate() {
  return (
    <section>
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
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del material"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la descripción del material"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el Color del material"
                  />
                </Form.Group>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese la cantidad del material"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Unidad</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="1">Metros</option>
                      <option value="2">Pulgadas</option>
                      <option value="3">Gramos</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Costo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el Costo del material"
                  />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
