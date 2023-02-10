import { React } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Catalog from "components/minCatalog";
import NavBar from "components/navbar";

export default function Catalogo() {
  return (
    <>
      <NavBar />
      <Container className="my-4">
        <h3 className="text-center">Catalogo</h3>
        <Row className="my-5">
          <Catalog />
          <Catalog />
          <Catalog />
          <Catalog />
        </Row>
      </Container>
    </>
  );
}
