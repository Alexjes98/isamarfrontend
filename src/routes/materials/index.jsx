import { React } from "react";
import { Col, Row, Container, Button, Card, Form } from "react-bootstrap";

export default function MaterialsCreate() {
  return (
    <Container fluid className="my-4 px-4">
      <Row className="my-5">
        <Col sm={10}>
          <Card>
            <Card.Header className="text-center">Materiales</Card.Header>
            <Card.Body>
              <Card.Title className="text-center">Datos</Card.Title>
              <Card.Text>
                <Form>
                  <Row className="my-3">
                    <Col sm={3}>Nombre</Col>
                    <Col sm={4}>Descripción</Col>
                    <Col sm={1}>Color</Col>
                    <Col sm={1}>Cantidad</Col>
                    <Col sm={1}>Unidad</Col>
                    <Col sm={1}>Costo</Col>
                    <Col sm={1}></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col sm={3}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese el nombre del material"
                          name="nombre"
                          value="nombre"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese la descripción del material"
                          name="descripcion"
                          value="descripcion"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese el Color del material"
                          name="color"
                          value="color"
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
                          value="cantidad"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Form.Group className="mb-3">
                        <Form.Select
                          aria-label="Default select example"
                          name="unidad"
                          value="unidad"
                        >
                          <option value="1">Metros</option>
                          <option value="2">Pulgadas</option>
                          <option value="3">Gramos</option>
                          <option value="3">Unidad</option>
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
                          value="costo"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Button variant="primary" className="mx-2 p-1">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                          </svg>
                        </span>
                      </Button>
                      <Button variant="primary" className="mx-2 p-1">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                  <Row className="mt-3">
                    <Col sm={3}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese el nombre del material"
                          name="nombre"
                          value="nombre"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese la descripción del material"
                          name="descripcion"
                          value="descripcion"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ingrese el Color del material"
                          name="color"
                          value="color"
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
                          value="cantidad"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Form.Group className="mb-3">
                        <Form.Select
                          aria-label="Default select example"
                          name="unidad"
                          value="unidad"
                        >
                          <option value="1">Metros</option>
                          <option value="2">Pulgadas</option>
                          <option value="3">Gramos</option>
                          <option value="3">Unidad</option>
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
                          value="costo"
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={1}>
                      <Button variant="primary" className="mx-2 p-1">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-edit"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                            <line x1="16" y1="5" x2="19" y2="8" />
                          </svg>
                        </span>
                      </Button>
                      <Button variant="primary" className="mx-2 p-1">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-trash"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="#ffffff"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                </Form>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              <Button variant="primary" className="mx-2 p-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-square-plus"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                </span>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
