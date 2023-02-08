import { React } from "react";
import Material from "components/material";
import NavBar from "components/navbar";
import { useParams } from "react-router-dom";

export default function MaterialsCreate() {
  const params = useParams();

  const type = "view";

  return (
    <section>
      <NavBar />
      <Material type={type} id={params.id} />
    </section>
  );
}
