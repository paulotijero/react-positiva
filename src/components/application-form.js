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

const message = {
  ...container,
  p: {
    ":first-of-type": {
      marginTop: "0",
      fontSize: "28px",
      fontWeight: "100",
      textAlign: "center",
      color: "#595959"
    },
    ":last-child": {
      fontSize: "40px",
      lineHeight: "25px",
      textAlign: "center",
      color: "#7878BE"
    }
  }
};

function ApplicationForm() {
  const contextType = React.useContext(DataContext);

  return (
    <React.Fragment>
      <form onSubmit={contextType.handleSubmit}>
        <div css={contextType.step === 1 ? container : withoutContainer}>
          <Label>Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={contextType.handleChange}
            value={contextType.info.name}
            required
          />
          <Label>Apellido</Label>
          <Input
            type="text"
            placeholder="Apellido"
            name="lastname"
            onChange={contextType.handleChange}
            value={contextType.info.lastname}
            required
          />
        </div>
        <div css={contextType.step === 2 ? container : withoutContainer}>
          <Label>Fecha de nacimiento</Label>
          <Input
            type="date"
            name="date"
            onChange={contextType.handleChange}
            value={contextType.info.date}
            required={contextType.step === 2 ? true : false}
          />
          <Label>Dirección</Label>
          <Input
            type="text"
            placeholder="Dirección"
            name="address"
            onChange={contextType.handleChange}
            value={contextType.info.address}
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
            value={contextType.info.phone}
            required={contextType.step === 3 ? true : false}
          />
          <Label>Correo electrónico</Label>
          <Input
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            onChange={contextType.handleChange}
            value={contextType.info.email}
            required={contextType.step === 3 ? true : false}
          />
        </div>
        <div css={contextType.step === 4 ? message : withoutContainer}>
          <p>Gracias por confiar en nosotros</p>
          <p>{contextType.info.name}</p>
        </div>
        <div css={container}>
          <Button>
            {contextType.step < 3
              ? "SIGUIENTE"
              : contextType.step < 4
              ? "FINALIZAR"
              : "ENVIAR OTRA RESPUESTA"}
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ApplicationForm;
