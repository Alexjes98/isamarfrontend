import { React } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Form,
  Card,
  Image,
} from "react-bootstrap";
import Logo from "assets/logo.png";

export default function Register() {
  return (
    <>
      <Container>
        <Row className="mt-4 d-flex justify-content-center">
          <Col sm={6}>
            <Card body>
              <Row>
                <Col className="text-center">
                  <Image variant="top" src={Logo} className="w-50" fluid />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese Nombre"
                      name="firstname"
                      // onChange={handleChange}
                      // value={state.dni}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese Apellido"
                      name="lastname"
                      // onChange={handleChange}
                      // value={state.dni}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese DNI"
                      name="dni"
                      // onChange={handleChange}
                      // value={state.dni}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese contraseña"
                      name="password"
                      // onChange={handleChange}
                      // value={state.password}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Form.Group>
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese Teléfono"
                      name="phone"
                      // onChange={handleChange}
                      // value={state.dni}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Rol</Form.Label>
                  <Form.Select aria-label="rol">
                    <option>Selecione un Rol</option>
                    <option value="admin">Admin</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="confeccionista">Confeccionista</option>
                    <option value="almacenista">Almacenista</option>
                  </Form.Select>
                </Col>
              </Row>
              <Form.Group className="mt-5 mb-3 text-center">
                <Form.Label></Form.Label>
                <Button variant="primary">Registrarse</Button>
              </Form.Group>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
