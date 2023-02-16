import { React } from "react";
import { Col, Card } from "react-bootstrap";
import Franela from "assets/a.jpg";

export default function minCatalog({ data }) {
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src={Franela} />
        <Card.Body>
          <Card.Title className="text-center"></Card.Title>
          <b>{data.prenda.nombre}</b>
          <Card.Text className="text-center">Talla: {data.prenda.talla}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
