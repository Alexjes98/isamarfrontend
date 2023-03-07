import { React, useState } from "react";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import generalAlert from "../components/general_alert"
import { isEmpty, notPhoneNumber } from "../utils/validator"

export default function UserDisplay({ state, session }) {

    const [formState, setFormState] = useState(state);
    console.log(formState)

    const alertObject = { message: "Hay campos incorrectos", show: false, icon: faExclamationTriangle, variant: "warning" }
    const [alertState, setAlertState] = useState(alertObject);

    const [type, setType] = useState(state.id === 0 ? "create" : "view");

    const readOnly = type === "view";
    const save = type === "create" || type === "edit";

    const invalidInput = () => {
        if(isEmpty(formState.nombre) || isEmpty(formState.apellido) || isEmpty(formState.dni) || isEmpty(formState.password) || isEmpty(formState.telefono)){
          alertObject.show = true
          alertObject.message = "Hay campos sin llenar"
          alertObject.variant = "danger"
          setAlertState(alertObject)
          return true
        }
        if(notPhoneNumber(formState.telefono)){      
          alertObject.show = true
          alertObject.message = "No es un numero de telefono valido"
          alertObject.variant = "danger"
          setAlertState(alertObject)
        }    
        return false
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setFormState({ ...formState, [name]: value });
        alertObject.show= false;
        setAlertState(alertObject);
    };
    const handleSave = (e) => {
        e.preventDefault();

        if(invalidInput()) return;
        console.log("NO INVALID DATA")

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
                const url = `${process.env.REACT_APP_API_URL}/users/${formState.dni}`;
                const resp = await fetch(url, pream);
                console.log(resp)
                if (resp.ok) {
                    setType("view");
                } else {
                }
            } catch (e) {
                console.log(e);
            }
        };
        updateData();
    };

    const handleDelete = (e) => {
        e.preventDefault();

        const deleteData = async () => {
            try {
                const pream = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "x-access-token": session.token,
                    },
                    body: JSON.stringify(formState),
                };

                const url = `${process.env.REACT_APP_API_URL}/users/${formState.dni}`;

                const resp = await fetch(url, pream);
                if (resp.ok) {
                    window.location.reload();
                } else {
                }
            } catch (e) {
                console.log(e);
            }
        };
        deleteData();
    }

    const handleEdit = () => {
        setType("edit");
    };

    return (
        <>
            <Row className="mt-3">
            {generalAlert({ show: alertState.show, variant: alertState.variant, message: alertState.message, icon: alertState.icon })}
                <Col sm={1}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el DNI"
                            name="dni"
                            value={formState.dni}
                            onChange={handleChange}
                            required
                            readOnly={readOnly}
                            plaintext={readOnly ? {} : null}
                        />
                    </Form.Group>
                </Col>
                <Col sm={1}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre"
                            name="nombre"
                            value={formState.nombre}
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
                            placeholder="Ingrese el Apellido"
                            name="apellido"
                            value={formState.apellido}
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
                            placeholder="Ingrese el numero de telefono"
                            min="0"
                            name="numero"
                            value={formState.telefono}
                            onChange={handleChange}
                            required
                            readOnly={readOnly}
                            plaintext={readOnly ? {} : null}
                        />
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group className="mb-3">
                        <Form.Select
                            aria-label="Default select example"
                            name="rol"
                            value={formState.rol}
                            disabled={readOnly}
                            onChange={handleChange}
                            plaintext={readOnly ? {} : null}
                        >
                            <option value="admin">Admin</option>
                            <option value="vendedor">Vendedor</option>
                            <option value="confeccionista">Confeccionista</option>
                            <option value="almacenista">Almacenista</option>
                        </Form.Select>
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
                </Col>
                <Col sm={1}>
            <Button variant="danger" className="mx-2 p-1" onClick={handleDelete}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
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
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </span>
            </Button>
                </Col>
            </Row>
        </>
    );
}
