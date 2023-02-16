import { React, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Catalog from "components/minCatalog";
import NavBar from "components/navbar";

export default function Catalogo({ session, setSession }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const pream = {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          const data = await resp.json();
          const filtered = data.filter(
            (prenda) => prenda.prenda.disponible === 1
          );
          setData(filtered);
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <NavBar session={session} setSession={setSession} />
      <Container className="my-4">
        <h3 className="text-center">Catalogo</h3>
        <Row className="my-5">
          {data.map((prenda, i) => (
            <Catalog data={prenda} key={i} />
          ))}
        </Row>
      </Container>
    </>
  );
}
