import { React, useState } from "react";
import { Col, Row, Button, Form, Card } from "react-bootstrap";
import MinMaterial from "./minMaterial";

export default function Clothe({ state }) {
  const [prenda, setPrenda] = useState(state.prenda);
  const [materials, setMaterials] = useState(state.materiales);
  const [type, setType] = useState(prenda.id === 0 ? "create" : "view");

  const readOnly = type === "view";
  const save = type === "create" || type === "edit";
  console.log("readOnly: ", readOnly);
  console.log("save: ", save);
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPrenda({ ...prenda, [name]: value });
  };

  const addMaterial = () => {
    const mat = [
      ...materials,
      {
        materialId: 0,
      },
    ];
    setMaterials(mat);
  };
  return (
    <Row className="mt-4 d-flex justify-content-center">
      <Col sm={8}>
        <Card body>
          <Row className="mt-3">
            <Col sm={3}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  name="nombre"
                  onChange={handleChange}
                  value={prenda.nombre}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese la descripción"
                  name="descripcion"
                  value={prenda.descripcion}
                  onChange={handleChange}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Label>Talla</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese talla"
                  name="talla"
                  value={prenda.talla}
                  onChange={handleChange}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Label>Costo</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese el Costo"
                  name="costo"
                  min="0"
                  value={prenda.costo}
                  onChange={handleChange}
                  readOnly={readOnly}
                  plaintext={readOnly ? {} : null}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Materiales</b>
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={2}>
              <b>Nombre</b>
            </Col>
            <Col sm={1}>
              <b>Color</b>
            </Col>
            <Col sm={1}>
              <b>Cantidad</b>
            </Col>
            <Col sm={1}>
              <b>Unidad</b>
            </Col>
            <Col sm={1}>
              <b>Costo</b>
            </Col>
          </Row>
          {Array.isArray(materials) &&
            materials.map((material, i) => (
              <MinMaterial
                state={material}
                clotheId={prenda.id}
                key={i}
                inuse={materials}
              />
            ))}
          <Row>
            <Col className="text-center">
              <Button
                variant="primary"
                className="mx-2 p-1"
                onClick={addMaterial}
              >
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
        </Card>
      </Col>
    </Row>
  );
}
