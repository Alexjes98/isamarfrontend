import { React, useState } from "react";
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

export default function Login({ setSession }) {
  const [state, setState] = useState({
    dni: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const pream = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(state),
      };

      const url = `${process.env.REACT_APP_API_URL}/login`;
      console.log("login in");
      const resp = await fetch(url, pream);

      if (resp.ok) {
        console.log("ok!");
        const x = await resp.json();
        console.log(x);
        localStorage.setItem("session", JSON.stringify(x));
        setSession(x);
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Container>
        <Row className="mt-4 d-flex justify-content-center">
          <Col sm={4}>
            <Card body>
              <Row>
                <Col className="text-center">
                  <Image variant="top" src={Logo} className="w-75" fluid />
                </Col>
              </Row>
              <Form.Group className="mt-5">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese DNI"
                  name="dni"
                  onChange={handleChange}
                  value={state.dni}
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese contraseña"
                  name="password"
                  onChange={handleChange}
                  value={state.password}
                />
              </Form.Group>
              <Form.Group className="mt-5 mb-3 text-center">
                <Form.Label></Form.Label>
                <Button variant="primary" onClick={handleLogin}>
                  Iniciar sesión
                </Button>
              </Form.Group>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
