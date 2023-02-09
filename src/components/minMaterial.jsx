import { React, useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
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
  console.log("type: ", type);
  const save = type === "create" || type === "edit";
  console.log("save: ", save);
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

  return (
    <Row className="mt-3">
      <Col sm={3}>
        <Form.Group className="mb-3">
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
      </Col>
      <Col sm={4}>
        <Form.Group className="mb-3">
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
      </Col>
      <Col sm={1}>
        <Form.Group className="mb-3">
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
      </Col>
      <Col sm={1}>
        <Form.Group className="mb-3">
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
      <Col sm={1}>
        <Form.Group className="mb-3">
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
      <Col sm={1}>
        <Form.Group className="mb-3">
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
      </Col>
      <Col sm={1}>
        {save ? (
          <Button variant="primary" className="mx-2 p-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit"
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
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
            </span>
          </Button>
        ) : (
          <Button variant="primary" className="mx-2 p-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-device-floppy"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>
                  Download more icon variants from
                  https://tabler-icons.io/i/device-floppy
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                <circle cx="12" cy="14" r="2"></circle>
                <polyline points="14 4 14 8 8 8 8 4"></polyline>
              </svg>
            </span>
          </Button>
        )}

        <Button variant="danger" className="mx-2 p-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
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
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </span>
        </Button>
      </Col>
    </Row>
  );
}