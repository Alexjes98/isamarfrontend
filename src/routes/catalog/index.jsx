import { React, useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <NavBar session={session} setSession={setSession} />
      <Container className="my-4">
        <Row>
          <Col sm={11}>
            <h3 className="text-center">Catalogo</h3>{" "}
          </Col>
          <Col sm={1}>
            <Button
              variant="primary"
              className="mx-2 p-1"
              onClick={handlePrint}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-printer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"></path>
                  <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"></path>
                  <rect x="7" y="13" width="10" height="8" rx="2"></rect>
                </svg>
              </span>
            </Button>
          </Col>
        </Row>

        <Row className="my-5">
          {data.map((prenda, i) => (
            <Catalog data={prenda} key={i} />
          ))}
        </Row>
      </Container>
    </>
  );
}
