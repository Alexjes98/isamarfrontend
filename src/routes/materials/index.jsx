import { React } from "react";
import { Col, Row, Container, Button, Card, Form } from "react-bootstrap";
import Material from "components/minMaterial";
import NavBar from "components/navbar";
export default function Materials() {
  return (
    <>
      <NavBar />
      <Container fluid className="my-4">
        <Row className="my-5">
          <Col sm={10}>
            <Card>
              <Card.Header className="text-center">Materiales</Card.Header>
              <Card.Body>
                <Row className="my-3">
                  <Col sm={3}>Nombre</Col>
                  <Col sm={4}>Descripción</Col>
                  <Col sm={1}>Color</Col>
                  <Col sm={1}>Cantidad</Col>
                  <Col sm={1}>Unidad</Col>
                  <Col sm={1}>Costo</Col>
                  <Col sm={1}></Col>
                </Row>
                <Material type={"view"} id={3} />
                <Material type={"edit"} id={2} />
                <Material type={"create"} />
              </Card.Body>
              <Card.Footer className="text-muted text-center">
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
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
