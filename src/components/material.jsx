import { React, useState } from "react";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import generalAlert from "../components/general_alert"
import { isEmpty } from "../utils/validator"

export default function Material({ state, session }) {
  const alertObject = { message: "Hay campos incorrectos", show: false, icon: faExclamationTriangle, variant: "warning" }
  const [alertState, setAlertState] = useState(alertObject);

  const [formState, setFormState] = useState(state);

  const [type, setType] = useState(state.id === 0 ? "create" : "view");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const readOnly = type === "view";
  const save = type === "create" || type === "edit";

  const invalidInput = () => {
    if (isEmpty(formState.nombre) || isEmpty(formState.descripcion) || isEmpty(formState.color)
    || isEmpty(formState.cantidad) || isEmpty(formState.unidad) || isEmpty(formState.costo)) {
      alertObject.show = true
      alertObject.message = "Hay campos sin llenar"
      alertObject.variant = "danger"
      setAlertState(alertObject)
      return true
    }

    if(formState.descripcion.length > 255){
      alertObject.show = true
      alertObject.message = "La descripción es mayor a 255 caracteres"
      alertObject.variant = "danger"
      setAlertState(alertObject)
      return true
    }
    return false
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormState({ ...formState, [name]: value });

    alertObject.show = false;
    setAlertState(alertObject);
  };
  const handleHide = async () => {
    if (formState.disponible === 1) {
      formState.disponible = 0;
    } else {
      formState.disponible = 1;
    }
    try {
      const pream = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-access-token": session.token,
        },
        body: JSON.stringify(formState),
      };

      const url = `${process.env.REACT_APP_API_URL}/materials/${formState.id}`;

      const resp = await fetch(url, pream);
      if (resp.ok) {
        window.location.reload();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();

    if(invalidInput()) return;
    const saveData = async () => {
      try {
        const pream = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(formState),
        };

        const url = `${process.env.REACT_APP_API_URL}/materials/create`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          setType("view");
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    const updateData = async () => {
      try {
        const pream = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(formState),
        };

        const url = `${process.env.REACT_APP_API_URL}/materials/${formState.id}`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          setType("view");
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (formState.id === 0) {
      saveData();
    } else {
      updateData();
    }
  };

  const handleEdit = () => {
    setType("edit");
  };

  return (
    <>
      <Row className="mt-3">
      {generalAlert({ show: alertState.show, variant: alertState.variant, message: alertState.message, icon: alertState.icon })}
        <Col sm={3}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del material"
              name="nombre"
              value={formState.nombre}
              onChange={handleChange}
              required
              readOnly={readOnly}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese la descripción del material"
              name="descripcion"
              value={formState.descripcion}
              onChange={handleChange}
              readOnly={readOnly}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={1}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese el Color del material"
              name="color"
              value={formState.color}
              onChange={handleChange}
              readOnly={readOnly}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={1}>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Ingrese la cantidad del material"
              min="0"
              name="cantidad"
              value={formState.cantidad}
              onChange={handleChange}
              required
              readOnly={readOnly}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={1}>
          <Form.Group className="mb-3">
            <Form.Select
              aria-label="Default select example"
              name="unidad"
              value={formState.unidad}
              onChange={handleChange}
              disabled={readOnly}
              plaintext={readOnly ? {} : null}
            >
              <option value="metros">Metros</option>
              <option value="pulgadas">Pulgadas</option>
              <option value="gramos">Gramos</option>
              <option value="unidad">Unidad</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={1}>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Ingrese el Costo del material"
              name="costo"
              min="0"
              value={formState.costo}
              onChange={handleChange}
              required
              readOnly={readOnly}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={1}>
          {save ? (
            <Button variant="primary" className="mx-2 p-1" onClick={handleSave}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-device-floppy"
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
                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                  <circle cx="12" cy="14" r="2"></circle>
                  <polyline points="14 4 14 8 8 8 8 4"></polyline>
                </svg>
              </span>
            </Button>
          ) : (
            <Button variant="primary" className="mx-2 p-1" onClick={handleEdit}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-edit"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                  <line x1="16" y1="5" x2="19" y2="8" />
                </svg>
              </span>
            </Button>
          )}

          {formState.disponible === 1 ? (
            <Button variant="success" className="mx-2 p-1" onClick={handleShow}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eye-check"
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
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"></path>
                  <path d="M15 19l2 2l4 -4"></path>
                </svg>
              </span>
            </Button>
          ) : (
            <Button variant="danger" className="mx-2 p-1" onClick={handleShow}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eye-off"
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
                  <line x1="3" y1="3" x2="21" y2="21"></line>
                  <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                  <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                </svg>
              </span>
            </Button>
          )}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Quieres {formState.disponible === 1 ? "ocultar" : "mostrar"} el
            material?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formState.disponible === 1
            ? "El material no se podrá agregar a las prendas"
            : "El material se podrá agregar a las prendas"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleHide}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
