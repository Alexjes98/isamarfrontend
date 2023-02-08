import { React } from "react";
import NavBar from "components/navbar";

import Material from "components/material";

export default function MaterialsCreate() {
  const type = "create";
  return (
    <section>
      <NavBar />
      <Material type={type} />
    </section>
  );
}
