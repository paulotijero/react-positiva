/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  width: "50%",
  "@media (max-width: 768px)": {
    width: "100%"
  }
};

const title = {
  marginTop: "0",
  fontSize: "28px",
  fontWeight: "100",
  textAlign: "center",
  color: "#595959"
};

const services = {
  display: "flex",
  flexWrap: "wrap",
  margin: "10px",
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    img: {
      width: "100px",
      height: "100px",
      margin: "10px 0"
    },
    p: {
      margin: "5px 0",
      ":first-of-type": {
        fontSize: "18px",
        lineHeight: "25px",
        textAlign: "center",
        color: "#7878BE"
      },
      ":last-child": {
        fontSize: "16px",
        lineHeight: "22px",
        textAlign: "center",
        color: "#7A7A87"
      }
    },
    "@media (max-width: 768px)": {
      width: "100%"
    }
  }
};

function OurService() {
  return (
    <div css={container}>
      <h1 css={title}>Resumen de servicios</h1>
      <div css={services}>
        <div>
          <img src="/car.jpg" alt="La Positiva" />
          <p>Vehículo de reemplazo</p>
          <p>
            Hasta 15 días por choque y/o volcadura y 30 dias por robo total
            acumulables al año
          </p>
        </div>
        <div>
          <img src="/car.jpg" alt="La Positiva" />
          <p>Vehículo de reemplazo</p>
          <p>
            Hasta 15 días por choque y/o volcadura y 30 dias por robo total
            acumulables al año
          </p>
        </div>
        <div>
          <img src="/car.jpg" alt="La Positiva" />
          <p>Vehículo de reemplazo</p>
          <p>
            Hasta 15 días por choque y/o volcadura y 30 dias por robo total
            acumulables al año
          </p>
        </div>
        <div>
          <img src="/car.jpg" alt="La Positiva" />
          <p>Vehículo de reemplazo</p>
          <p>
            Hasta 15 días por choque y/o volcadura y 30 dias por robo total
            acumulables al año
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurService;
