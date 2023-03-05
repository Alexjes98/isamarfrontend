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

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import generalAlert from "../../components/general_alert"
import validator from "../../utils/validator"

export default function Login({ setSession }) {
  const alertObject = { message: "Hay campos incorrectos", show: false, icon: faExclamationTriangle, variant: "warning" }
  const [alertState, setAlertState] = useState(alertObject);
  const [state, setState] = useState({
    dni: "",
    password: "",
  });
  const invalidInput = () => {    
    if(state.dni === ""){
      alertObject.show = true
      alertObject.message = "DNI incorrecto"
      setAlertState(alertObject)
      return true
    }
    if (state.password === "") {
      alertObject.show = true
      alertObject.message = "Contraseña incorrecta"
      setAlertState(alertObject)
      return true
    }
    return false
  }

  const handleLogin = async () => {
    if(invalidInput()) return;
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
          {generalAlert({ show: alertState.show, variant: alertState.variant, message: alertState.message, icon: alertState.icon })}
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
                  type="password"
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
