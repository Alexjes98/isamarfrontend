import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
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
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    password: "",
    telefono: "",
    rol: "vendedor",
  });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleRegister = async () => {
    try {
      const pream = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(state),
      };

      const url = `${process.env.REACT_APP_API_URL}/register/`;

      const resp = await fetch(url, pream);
      if (resp.ok) {
        setState({ ...state, redirect: true });
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {state.redirect && <Navigate to="/login" />}

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
                      name="nombre"
                      onChange={handleChange}
                      value={state.nombre}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese Apellido"
                      name="apellido"
                      onChange={handleChange}
                      value={state.apellido}
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
                      onChange={handleChange}
                      value={state.dni}
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
                      onChange={handleChange}
                      value={state.password}
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
                      name="telefono"
                      onChange={handleChange}
                      value={state.telefono}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Rol</Form.Label>
                  <Form.Select
                    aria-label="rol"
                    name="rol"
                    value={state.rol}
                    onChange={handleChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="confeccionista">Confeccionista</option>
                    <option value="almacenista">Almacenista</option>
                  </Form.Select>
                </Col>
              </Row>
              <Form.Group className="mt-5 mb-3 text-center">
                <Form.Label></Form.Label>
                <Button variant="primary" onClick={handleRegister}>
                  Registrarse
                </Button>
              </Form.Group>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
