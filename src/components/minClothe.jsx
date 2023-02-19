import { React, useState } from "react";
import { Col, Row, Button, Form, Card, Modal } from "react-bootstrap";
import MinMaterial from "./minMaterial";

export default function Clothe({ state, session }) {
  const [prenda, setPrenda] = useState(state.prenda);
  const [image, setImage] = useState(null);
  const [materials, setMaterials] = useState(state.materiales);
  const [type, setType] = useState(prenda.id === 0 ? "create" : "view");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const readOnly = type === "view";
  const save = type === "create" || type === "edit";

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPrenda({ ...prenda, [name]: value });
  };

  const handleImageInput = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    const obj = { name, file };
    console.log(obj);
    console.log("file: ", file);
    setImage(obj);
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

  const handleSave = () => {
    const saveData = async () => {
      try {
        const pream = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify({ prenda: prenda }),
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/create`;

        const resp = await fetch(url, pream);

        if (resp.ok) {
          const x = await prenda.json();
          x.id = resp.id;
          setPrenda(x);
          if (image) {
            await updateImage({ id: x.id });
          }
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
          body: JSON.stringify(prenda),
        };

        const url = `${process.env.REACT_APP_API_URL}/clothes/${prenda.id}`;

        const resp = await fetch(url, pream);
        if (resp.ok) {
          if (image) {
            await updateImage({ id: prenda.id });
          }
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
    // window.location.reload();
  };

  const updateImage = async ({ id }) => {
    console.log("id: ", id);
    try {
      const fileBody = new FormData();
      fileBody.append("file", image.file, image.file.name);
      const pream = {
        method: "POST",
        headers: {
          "x-access-token": session.token,
        },
        body: fileBody,
      };

      const url = `${process.env.REACT_APP_API_URL}/clothes/${id}/image`;

      const resp = await fetch(url, pream);
      if (resp.ok) {
        setType("view");
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = () => {
    setType("edit");
  };
  const handleHide = async () => {
    if (prenda.disponible === 1) {
      prenda.disponible = 0;
    } else {
      prenda.disponible = 1;
    }
    try {
      const pream = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-access-token": session.token,
        },
        body: JSON.stringify(prenda),
      };

      const url = `${process.env.REACT_APP_API_URL}/clothes/${prenda.id}`;

      const resp = await fetch(url, pream);
      if (resp.ok) {
        window.location.reload();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={8}>
          <Card body>
            <Row className="mt-3">
              <Col sm={2}>
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
              <Col sm={4}>
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

              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label></Form.Label>
                  {save ? (
                    <Button
                      variant="primary"
                      className="mx-2 p-1"
                      onClick={handleSave}
                    >
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
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                          <circle cx="12" cy="14" r="2"></circle>
                          <polyline points="14 4 14 8 8 8 8 4"></polyline>
                        </svg>
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="mx-2 p-1"
                      onClick={handleEdit}
                    >
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
                  {prenda.disponible === 1 ? (
                    <Button
                      variant="success"
                      className="mx-2 p-1"
                      onClick={handleShow}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye-check"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"></path>
                          <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      className="mx-2 p-1"
                      onClick={handleShow}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye-off"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <line x1="3" y1="3" x2="21" y2="21"></line>
                          <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                          <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                        </svg>
                      </span>
                    </Button>
                  )}
                </Form.Group>
              </Col>
            </Row>
            {(type === "create" || type === "edit") && (
              <Row>
                <Col sm={4}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Imagen de la prenda</Form.Label>
                    <Form.Control
                      type="file"
                      name="image"
                      accept=".jpg"
                      onChange={handleImageInput}
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}

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
                  session={session}
                />
              ))}
            {type === "view" && (
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
            )}
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            ¿Quieres {prenda.disponible === 1 ? "ocultar" : "mostrar"} la
            prenda?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {prenda.disponible === 1
            ? "La prenda no estará disponible en el catalogo ni se podrá agregar a las ordenes"
            : "La prenda estará disponible en el catalogo y se podrá agregar a las ordenes"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleHide}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
