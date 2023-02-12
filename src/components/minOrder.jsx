import { React, useState } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";

export default function Order() {
  return (
    <>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={12}>
          <Card body>
            <Row className="mt-3">
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DNI"
                    name="DNI"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="apellido"
                    name="apellido"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="telefono"
                    name="telefono"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="precio"
                    name="precio"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Creacion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="fecha creacion"
                    name="fechaCreacion"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="status"
                    name="status"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Actualizacion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="fecha actualizacion"
                    name="fechaActualizacion"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Costo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="costo"
                    name="costo"
                    /*onChange={handleChange}
                    value={prenda.nombre}
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null} */
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-1">
                  <Form.Label className="mt-5 pb-1"></Form.Label>
                  <Button
                    variant="primary"
                    className="mx-2 p-1 mb-2"
                    // onClick={handleEdit}
                  >
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
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <h5>
                  <b>Prenda</b>
                </h5>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={1}>
                <b>Nombre</b>
              </Col>
              <Col sm={1}>
                <b>Cantidad</b>
              </Col>
              <Col sm={1}>
                <b>Costo</b>
              </Col>
            </Row>
            <Row>
              <Col sm={1} className="my-auto">
                Camisa
              </Col>
              <Col sm={1} className="my-auto">
                5
              </Col>
              <Col sm={1} className="my-auto">
                9800
              </Col>
              <Col sm={2} className="text-left">
                <Button
                  variant="primary"
                  className="mx-2 p-1"
                  //onClick={addMaterial}
                >
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

                <Button
                  variant="danger"
                  className="mx-2 p-1"
                  //onClick={handleShow}
                >
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
          </Card>
        </Col>
      </Row>
    </>
  );
}
