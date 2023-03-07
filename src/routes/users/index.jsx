import { React, useEffect, useState } from "react";
import { Col, Row, Container, Button, Card } from "react-bootstrap";
import Material from "components/material";
import NavBar from "components/navbar";
import UserDisplay from "components/user_display";

export default function Users({ session, setSession }) {

    const defaultForm = {
        nombre: "",
        apellido: "",
        telefono: "",
        cantidad: 0,
        unidad: "1",
        costo: 0,
        id: 0,
    };

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

                const url = `${process.env.REACT_APP_API_URL}/users/`;

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

    return (
        <>
            <NavBar session={session} setSession={setSession} />
            <Container fluid className="my-4">
                <Row className="my-5">
                    <Col sm={10}>                    
                        <Card>
                            <Card.Header className="text-center">Usuarios</Card.Header>
                            <Card.Body>
                                <Row className="my-3">
                                    <Col sm={1}>DNI</Col>
                                    <Col sm={1}>Nombre</Col>
                                    <Col sm={1}>Apellido</Col>
                                    <Col sm={1}>Telefono</Col>
                                    <Col sm={1}>Rol</Col>
                                </Row>
                                {data.map((material, i) => (
                                    <UserDisplay state={material} key={i} session={session} />
                                ))}
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
