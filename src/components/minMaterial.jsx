import { React, useEffect, useState } from "react";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";
export default function Material({ clotheId, state, inuse, session }) {
  const [formState, setFormState] = useState(state);
  const [materiales, setMateriales] = useState([]);
  const [type, setType] = useState(state.materialId === 0 ? "create" : "view");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const readOnly = type === "view";
  const save = type === "create" || type === "edit";

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormState({ ...formState, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const saveData = async () => {
      try {
        const pream = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(formState),
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/${clotheId}/materials/add`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          console.log("saved");
          setType("view");
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    const updateData = async () => {
      try {
        const pream = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(formState),
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/${clotheId}/materials/${formState.materialId}`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          console.log("updated");
          setType("view");
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (type === "create") {
      saveData();
    } else {
      updateData();
    }
    window.location.reload();
  };

  const handleEdit = () => {
    setType("edit");
  };

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

        const url = `${process.env.REACT_APP_API_URL}/materials/`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          let data = await resp.json();
          const ids = inuse.map((material) => material.materialId);
          console.log(ids);
          data = data.filter(
            (material) =>
              !ids.includes(material.id) && material.disponible === 1
          );
          setMateriales(data);

          const minMat = data[0];
          minMat.cantidad = 1;
          minMat.materialId = minMat.id;
          setFormState(minMat);
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (type === "create") {
      getData();
    }
  }, [type]);

  const handleSelect = (e) => {
    const target = e.target;
    const value = target.value;

    const mat = materiales.filter((material) => {
      console.log(material.id);
      return material.id === parseInt(value);
    });
    const minMat = mat[0];
    minMat.cantidad = 1;
    minMat.materialId = minMat.id;
    setFormState(minMat);
  };

  const handleDelete = () => {
    console.log("borrar");
    const deleteData = async () => {
      try {
        const pream = {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(formState),
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/${clotheId}/materials/${formState.materialId}/delete`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          setType("view");
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };
    deleteData();
    handleClose();
  };

  return (
    <>
      <Row className="mt-4">
        <Col sm={2}>
          {type === "create" ? (
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                name="material"
                value={formState.materialId}
                onChange={handleSelect}
                disabled={readOnly}
                plaintext={readOnly ? {} : null}
              >
                {materiales.map((material) => (
                  <option value={material.id} key={material.id}>
                    {material.nombre}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Ingrese Nombre"
                name="nombre"
                value={formState.nombre}
                readOnly
                plaintext
              />
            </Form.Group>
          )}
        </Col>
        <Col sm={2}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese Color "
              name="color"
              value={formState.color}
              readOnly
              plaintext
            />
          </Form.Group>
        </Col>
        <Col sm={2}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese Cantidad "
              name="cantidad"
              readOnly={readOnly}
              onChange={handleChange}
              value={formState.cantidad}
              plaintext={readOnly ? {} : null}
            />
          </Form.Group>
        </Col>
        <Col sm={2}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese Unidad"
              name="unidad"
              value={formState.unidad}
              readOnly
              plaintext
            />
          </Form.Group>
        </Col>
        <Col sm={2}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingrese Costo"
              name="costo"
              value={formState.costo}
              readOnly
              plaintext
            />
          </Form.Group>
        </Col>

        <Col sm={2}>
          {save ? (
            <Button variant="primary" className="mx-2 p-1" onClick={handleSave}>
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                  <circle cx="12" cy="14" r="2"></circle>
                  <polyline points="14 4 14 8 8 8 8 4"></polyline>
                </svg>
              </span>
            </Button>
          ) : (
            <Button variant="primary" className="mx-2 p-1" onClick={handleEdit}>
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
          )}

          <Button variant="danger" className="mx-2 p-1" onClick={handleShow}>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Quieres eliminar {formState.nombre} de la prenda?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Podrás agregarlo nuevamente</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
