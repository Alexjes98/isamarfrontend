import { useEffect } from "react";
import { React, useState } from "react";
import { Col, Row, Button, Form, Card, Modal } from "react-bootstrap";
import MinClotheOrder from "./minClotheOrder";

export default function Order({ data, session }) {
  const [orden, setOrden] = useState(data.orden);
  const [prendas, setPrendas] = useState(data.prendas);
  const [show, setShow] = useState(false);
  const [materiales, setMateriales] = useState([]);
  const [dbPrendas, setDbPrendas] = useState([]);
  const [reqMateriales, setReqMaterial] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setOrden({ ...orden, [name]: value });
  };
  const [type, setType] = useState(orden.id === 0 ? "create" : "view");
  const readOnly = type === "view";
  const save = type === "create" || type === "edit";

  const handleEdit = () => {
    setType("edit");
  };

  const defaultClothe = {
    id: 0,
    nombre: "",
    talla: "",
    cantidad: 0,
    costo: 0,
  };
  const addRow = () => {
    setPrendas([...prendas, defaultClothe]);
  };

  const [cost, setCost] = useState(0);
  useEffect(() => {
    const estimateCost = () => {
      const v = prendas.map((prenda) => prenda.costo * prenda.cantidad);
      const c = v.reduce((a, b) => a + b);

      return c;
    };
    try {
      const costoSugerido = estimateCost();
      setCost(costoSugerido);
      setOrden({ ...orden, costo: costoSugerido });
    } catch (e) {
      setCost(null);
    }
  }, []);

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
          const data = await resp.json();
          setMateriales(data);
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getPrendas = async () => {
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
          setDbPrendas(data);
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };
    getPrendas();
    getData();
  }, []);

  useEffect(() => {
    const getMateriales = (prenda) => {
      const pr = dbPrendas.filter((data) => {
        return data.prenda.id === prenda.id;
      });
      let materiales = pr.map((data) => data.materiales);
      let m = [];
      materiales.forEach((mat) => {
        mat.forEach((mat2) => {
          m = [...m, mat2];
        });
      });

      m = m.map((mati) => {
        const x = {
          id: mati.materialId,
          nombre: mati.nombre,
          cantidad: mati.cantidad * prenda.cantidad,
        };
        return x;
      });

      return m;
    };

    const getOrdenMateriales = (prendas) => {
      const z = prendas.map((prenda) => getMateriales(prenda));
      let flat = [];
      z.forEach((m) => (flat = [...flat, ...m]));
      return flat;
    };

    const flatMaterials = (materials) => {
      const keys = materials.map((m) => m.id);

      let flat = {};
      keys.forEach((key) => {
        flat[key] = { cantidad: 0 };
      });

      materials.forEach((mat) => {
        flat[mat.id].cantidad += mat.cantidad;
        flat[mat.id].nombre = mat.nombre;
        flat[mat.id].id = mat.id;
      });

      let list = [];

      const secKeys = Object.keys(flat);
      secKeys.forEach((f) => {
        list = [...list, flat[f]];
      });

      return list;
    };

    const addAvalaible = (list) => {
      const r = list.map((m) => {
        const disp = materiales.filter((md) => m.id === md.id);

        return { ...m, disponible: disp[0]?.cantidad };
      });
      return r;
    };
    const calularReq = () => {
      const z = getOrdenMateriales(prendas);
      const final = flatMaterials(z);
      const r = addAvalaible(final);
      return r;
    };

    if (Array.isArray(materiales) && Array.isArray(dbPrendas)) {
      const mlist = calularReq();
      setReqMaterial(mlist);
    }
  }, [materiales, dbPrendas]);

  const handleSave = () => {
    const saveData = async () => {
      try {
        const pream = {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-access-token": session.token,
          },
          body: JSON.stringify(orden),
        };

        const url = `${process.env.REACT_APP_API_URL}/orders/create`;

        const resp = await fetch(url, pream);
        const x = orden;
        x.id = resp.id;
        setOrden(x);
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
          body: JSON.stringify(orden),
        };

        const url = `${process.env.REACT_APP_API_URL}/orders/${orden.id}`;
        const resp = await fetch(url, pream);
        if (resp.ok) {
          console.log("updated");
          setType("view");
          window.location.reload();
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
  };
  const handleDelete = async () => {
    try {
      const pream = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-access-token": session.token,
        },
        body: JSON.stringify({}),
      };

      const url = `${process.env.REACT_APP_API_URL}/orders/${orden.id}/delete`;

      const resp = await fetch(url, pream);
      if (resp.ok) {
        window.location.reload();
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };

  const vendedor = () => {
    if (orden.status === "lista") {
      return ["lista", "completada"];
    } else if (orden.status === "creada") {
      return ["creada", "revision"];
    } else {
      return ["creada"];
    }
  };

  const almacenista = () => {
    if (orden.status === "revision") {
      return ["revision", "aprobada"];
    } else {
      return [orden.status];
    }
  };

  const confeccionista = () => {
    if (orden.status === "aprobada") {
      return ["aprobada", "encurso"];
    } else if (orden.status === "encurso") {
      return ["encurso", "lista"];
    } else {
      return [orden.status];
    }
  };

  const status = {
    admin: ["creada", "revision", "aprobada", "encurso", "lista", "completada"],
    vendedor: vendedor(),
    almacenista: almacenista(),
    confeccionista: confeccionista(),
  };

  return (
    <>
      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={12}>
          <Card body>
            <Row className="mt-3">
              <Col>
                <h5>
                  <b>Orden</b>
                </h5>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="dni"
                    name="dni"
                    onChange={handleChange}
                    value={orden.dni}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={orden.nombre}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="apellido"
                    name="apellido"
                    onChange={handleChange}
                    value={orden.apellido}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="telefono"
                    name="telefono"
                    onChange={handleChange}
                    value={orden.telefono}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="precio"
                    name="precio"
                    onChange={handleChange}
                    value={orden.precio}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista" ||
                      orden.status !== "creada"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista" ||
                      orden.status !== "creada"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Creacion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="fecha creacion"
                    name="fechaCreacion"
                    value={orden.creacion}
                    readOnly
                    plaintext
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>

                  {readOnly ? (
                    <Form.Control
                      type="text"
                      placeholder="status"
                      name="status"
                      onChange={handleChange}
                      value={orden.status}
                      readOnly={readOnly}
                      plaintext={readOnly ? {} : null}
                    />
                  ) : (
                    <Form.Select
                      aria-label="Default select example"
                      name="status"
                      value={orden.status}
                      onChange={handleChange}
                      disabled={readOnly}
                      plaintext={readOnly ? {} : null}
                    >
                      {status[session.rol]?.map((v, i) => (
                        <option value={v} key={i}>
                          {v}
                        </option>
                      ))}
                    </Form.Select>
                  )}
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Actualizacion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="fecha actualizacion"
                    name="fechaActualizacion"
                    value={orden.actualizacion}
                    readOnly
                    plaintext
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Costo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="costo"
                    name="costo"
                    onChange={handleChange}
                    value={orden.costo}
                    readOnly={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista" ||
                      orden.status !== "creada"
                    }
                    plaintext={
                      readOnly ||
                      session.rol === "almacenista" ||
                      session.rol === "confeccionista" ||
                      orden.status !== "creada"
                        ? {}
                        : null
                    }
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-3">
                  <Form.Label>Costo Sugerido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="costo"
                    name="costo"
                    value={cost}
                    readOnly
                    plaintext
                  />
                </Form.Group>
              </Col>
              <Col sm={1}>
                <Form.Group className="mb-1">
                  <Form.Label className="mt-5 pb-1"></Form.Label>
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
                  {(session.rol === "admin" || session.rol === "vendedor") && (
                    <Button
                      variant="danger"
                      className="mx-2 p-1"
                      onClick={handleShow}
                    >
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
                  )}
                </Form.Group>
              </Col>
            </Row>
            {orden.id > 0 && (
              <>
                <Row className="mt-3">
                  <Col>
                    <h5>
                      <b>Prendas</b>
                    </h5>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={1}>
                    <b>Nombre</b>
                  </Col>
                  <Col sm={1}>
                    <b>Cantidad</b>
                  </Col>
                  <Col sm={1}>
                    <b>Costo</b>
                  </Col>
                </Row>
                {prendas.map((prenda, i) => (
                  <MinClotheOrder
                    key={i}
                    orderId={orden.id}
                    data={prenda}
                    inuse={prendas}
                    session={session}
                  />
                ))}
                {(session.rol === "admin" || session.rol === "vendedor") && (
                  <Row className="mt-4">
                    <Col className="text-center">
                      <Button
                        variant="primary"
                        className="mx-2 p-1"
                        onClick={addRow}
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
              </>
            )}
            {(session.rol === "admin" || session.rol === "almacenista") && (
              <>
                <Row className="mt-3">
                  <Col>
                    <h5>
                      <b>Materiales</b>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col sm={2}>
                    <b>Material</b>
                  </Col>
                  <Col sm={1}>
                    <b>Requerido</b>
                  </Col>
                  <Col sm={1}>
                    <b>Disponible</b>
                  </Col>
                </Row>
                {reqMateriales.map((mat) => (
                  <Row
                    key={mat.id}
                    className={
                      mat.cantidad <= mat.disponible
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    <Col sm={2}>{mat.nombre}</Col>
                    <Col sm={1}>{mat.cantidad}</Col>
                    <Col sm={1}>{mat.disponible}</Col>
                  </Row>
                ))}
              </>
            )}
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Quieres eliminar la orden?</Modal.Title>
        </Modal.Header>
        <Modal.Body>La Orden se perderá para siempre</Modal.Body>
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
