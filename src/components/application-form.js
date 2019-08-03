/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Input, Label, Button } from "./ui";
import { DataContext } from "../contexts/data";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "0.25s all",
  button: {
    alignSelf: "center",
    margin: "5px 0 15px 0px"
  }
};

const withoutContainer = {
  ...container,
  display: "none"
};

function ApplicationForm() {
  const contextType = React.useContext(DataContext);

  return (
    <>
      <form onSubmit={contextType.handleSubmit}>
        <div css={contextType.step === 1 ? container : withoutContainer}>
          <Label>Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={contextType.handleChange}
            required
          />
          <Label>Apellido</Label>
          <Input
            type="text"
            placeholder="Apellido"
            name="lastname"
            onChange={contextType.handleChange}
            required
          />
        </div>
        <div css={contextType.step === 2 ? container : withoutContainer}>
          <Label>Fecha de nacimiento</Label>
          <Input
            type="date"
            name="date"
            onChange={contextType.handleChange}
            required={contextType.step === 2 ? true : false}
          />
          <Label>Dirección</Label>
          <Input
            type="text"
            placeholder="Dirección"
            name="address"
            onChange={contextType.handleChange}
            required={contextType.step === 2 ? true : false}
          />
        </div>
        <div css={contextType.step === 3 ? container : withoutContainer}>
          <Label>Celular</Label>
          <Input
            type="text"
            placeholder="Celular"
            pattern="[0-9]+"
            maxLength="9"
            name="phone"
            onChange={contextType.handleChange}
            required={contextType.step === 3 ? true : false}
          />
          <Label>Correo electrónico</Label>
          <Input
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            onChange={contextType.handleChange}
            required={contextType.step === 3 ? true : false}
          />
        </div>
        <Button>SIGUIENTE</Button>
      </form>
    </>
  );
}

export default ApplicationForm;
