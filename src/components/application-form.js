/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Input, Label, Button } from "./ui";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  button: {
    alignSelf: "center",
    margin: "5px 0 15px 0px"
  }
};

function ApplicationForm() {
  return (
    <div css={container}>
      <Label>Nombres Completos</Label>
      <Input type="text" placeholder="Nombres completos" />
      <Label>Celular</Label>
      <Input type="phone" placeholder="Celular" />
      <Label>Correo electrónico</Label>
      <Input type="email" placeholder="ejemplo@correo.com" />
      <Button>SIGUIENTE</Button>
    </div>
  );
}

export default ApplicationForm;
