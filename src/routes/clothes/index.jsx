import { React, useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import NavBar from "components/navbar";
import Clothe from "components/minClothe";

export default function Clothes({ session, setSession }) {
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

          setData(data);
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const addClothe = () => {
    const empty = {
      prenda: {
        id: 0,
        nombre: "",
        descripcion: "",
        talla: "",
        costo: 0,
        disponible: 1,
      },
      materiales: [],
    };
    const mat = [...data, empty];
    setData(mat);
  };
  return (
    <>
      <NavBar session={session} setSession={setSession} />
      <Container fluid className="my-4">
        {data.map((clothe, i) => (
          <Clothe state={clothe} key={i} session={session} />
        ))}

        <Row className="mt-4">
          <Col className="text-center">
            <Button variant="primary" className="mx-2 p-1" onClick={addClothe}>
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
      </Container>
    </>
  );
}
