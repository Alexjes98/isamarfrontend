import { React, useEffect, useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

export default function Material({ type, id }) {
  const defaultForm = {
    nombre: "",
    descripcion: "",
    color: "",
    cantidad: 0,
    unidad: "1",
    costo: 0,
  };
  const [formState, setFormState] = useState(defaultForm);

  const readOnly = type === "view";
  const create = type === "create";
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(formState);
  };

  useEffect(() => {
    const getData = async ({ id }) => {
      try {
        const pream = {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };

        const url = `${process.env.REACT_APP_API_URL}/materials/${id}`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          const data = await resp.json();

          console.log(data);
          setFormState(data[0]);
        } else {
          setFormState(defaultForm);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (id && id >= 0 && type === "view") {
      getData({ id });
    }
  }, [id, type]);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del material"
                  name="nombre"
                  value={formState.nombre}
                  onChange={handleChange}
                  required
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese la descripción del material"
                  name="descripcion"
                  value={formState.descripcion}
                  onChange={handleChange}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el Color del material"
                  name="color"
                  value={formState.color}
                  onChange={handleChange}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Row>

            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingrese la cantidad del material"
                    min="0"
                    name="cantidad"
                    value={formState.cantidad}
                    onChange={handleChange}
                    required
                    readOnly={readOnly}
                    plaintext={readOnly ? {} : null}
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Unidad</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="unidad"
                    value={formState.unidad}
                    onChange={handleChange}
                    disabled={readOnly}
                    plaintext={readOnly ? {} : null}
                  >
                    <option value="1">Metros</option>
                    <option value="2">Pulgadas</option>
                    <option value="3">Gramos</option>
                    <option value="3">Unidad</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Costo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese el Costo del material"
                  name="costo"
                  min="0"
                  value={formState.costo}
                  onChange={handleChange}
                  required
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Row>
            {create && (
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
