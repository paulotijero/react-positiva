/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { DataContext } from "../contexts/data";
import data from "../services/data.json"

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
  const contextType = React.useContext(DataContext); // Access to fetch at 'https://challenge-labp.s3.amazonaws.com/services.json' from origin has been blocked by CORS 
  return (
    <div css={container}>
      <h1 css={title}>Resumen de servicios</h1>
      <div css={services}>
        {data.map(service => {
          return (
            <div key={service.id}>
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurService;
