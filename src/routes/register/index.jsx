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

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import generalAlert from "../../components/general_alert"
import { isEmpty, notPhoneNumber } from "../../utils/validator"

export default function Register() {
  const alertObject = { message: "Hay campos incorrectos", show: false, icon: faExclamationTriangle, variant: "warning" }
  const [alertState, setAlertState] = useState(alertObject);
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
    alertObject.show = false;
    setAlertState(alertObject);
  };

  const invalidInput = () => {
    if(isEmpty(state.nombre) || isEmpty(state.apellido) || isEmpty(state.dni) || isEmpty(state.password) || isEmpty(state.telefono)){
      alertObject.show = true
      alertObject.message = "Hay campos sin llenar"
      alertObject.variant = "danger"
      setAlertState(alertObject)
      return true
    }
    if(notPhoneNumber(state.telefono)){      
      alertObject.show = true
      alertObject.message = "No es un numero de telefono valido"
      alertObject.variant = "danger"
      setAlertState(alertObject)
    }    
    return false
  }

  const handleRegister = async () => {
    try {
      if(invalidInput()) return;
      const pream = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(state),
      };

      const url = `${process.env.REACT_APP_API_URL}/register/`;

      const resp = await fetch(url, pream);
      const jsonResp = await resp.json();
      if (resp.ok) {
        setState({ ...state, redirect: true });
      } else {
        alertObject.show =true;
        alertObject.message = jsonResp.error;
        alertObject.variant = "danger"
        setAlertState(alertObject);
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
          {generalAlert({ show: alertState.show, variant: alertState.variant, message: alertState.message, icon: alertState.icon })}
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
                      type="tel"
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
