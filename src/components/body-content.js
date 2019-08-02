/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ProgressBar from "./progress-bar";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const sentence = {
  fontSize: "20px",
  lineHeight: "26px",
  textAlign: "center",
  color: "#595959"
};

const containerImg = {
  width: "100%",
  height: "400px",
  position: "relative",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute"
  },
  "@media (max-width: 768px)": {
    height: "200px"
  }
};

function BodyContent() {
  return (
    <main css={container}>
      <div css={containerImg}>
        <img src="/car.jpg" alt="La Positiva" />
      </div>
      <p css={sentence}>
        Déjanos tus datos. ¡Nos pondremos en contacto contigo!
      </p>
      <ProgressBar />
    </main>
  );
}

export default BodyContent;
