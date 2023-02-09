import { React } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
export default function Clothes() {
  return (
    <Row className="mt-4 d-flex justify-content-center">
      <Col sm={8}>
        <Card body>
          <Row className="mt-3">
            <Col sm={3}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  name="nombre"
                  value=""
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese la descripción"
                  name="descripcion"
                  value=""
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Label>Talla</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese talla"
                  name="talla"
                  value=""
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Label>Costo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese el Costo"
                  name="costo"
                  min="0"
                  value=""
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Materiales</b>
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={1}>
              <b>Nombre</b>
            </Col>
            <Col sm={1}>
              <b>Color</b>
            </Col>
            <Col sm={1}>
              <b>Cantidad</b>
            </Col>
            <Col sm={1}>
              <b>Unidad</b>
            </Col>
            <Col sm={1}>
              <b>Costo</b>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese Nombre"
                  name="nombre"
                  value="Rayon"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese Color "
                  name="color"
                  value="verde"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese Cantidad "
                  name="cantidad"
                  value="5"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese Unidad"
                  name="unidad"
                  value="metros"
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingrese Costo"
                  name="costo"
                  value="750"
                />
              </Form.Group>
            </Col>

            <Col sm={1}>
              <Button variant="primary" className="mx-2 p-1">
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

              <Button variant="danger" className="mx-2 p-1">
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
          <Row>
            <Col className="text-center">
              <Button variant="primary" className="mx-2 p-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-square-plus"
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
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                </span>
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
