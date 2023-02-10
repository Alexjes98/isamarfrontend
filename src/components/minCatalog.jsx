import { React } from "react";
import { Col, Card } from "react-bootstrap";
import Franela from "assets/a.jpg";

export default function minCatalog() {
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src={Franela} />
        <Card.Body>
          <Card.Text className="text-center">
            <h5>Camisa</h5>
            <h5>M</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
