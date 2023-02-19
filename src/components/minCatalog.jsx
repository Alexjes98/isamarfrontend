import { React, useState } from "react";
import { Col, Card } from "react-bootstrap";
import Franela from "assets/a.jpg";

export default function MinCatalog({ data }) {
  const prendaImg = `${process.env.REACT_APP_API_URL}/clothesimg/${data.prenda.id}.jpg`;
  const [img, setImg] = useState(prendaImg);

  const onError = () => {
    setImg(Franela);
  };
  return (
    <Col sm={3}>
      <Card>
        <Card.Img variant="top" src={img} onError={onError} />
        <Card.Body>
          <Card.Title className="text-center"></Card.Title> {data.prenda.nombre}{" "}
          <Card.Text className="text-center">{data.prenda.talla}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
