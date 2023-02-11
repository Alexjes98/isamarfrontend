import { React } from "react";
import { Col, Card } from "react-bootstrap";
import Franela from "assets/a.jpg";

export default function minCatalog({ data }) {
  console.log(data);
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src={Franela} />
        <Card.Body>
          <Card.Text className="text-center">
            <h5>{data.prenda.nombre}</h5>
            <h5>{data.prenda.talla}</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
