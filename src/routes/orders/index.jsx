import { React, useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

import NavBar from "components/navbar";
import Order from "components/minOrder";

export default function Orders() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <Order />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
