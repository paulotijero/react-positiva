/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

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
    <main>
      <div css={containerImg}>
        <img src="/car.jpg" alt="La Positiva" />
      </div>
      <p css={sentence}>
        Déjanos tus datos. ¡Nos pondremos en contacto contigo!
      </p>
    </main>
  );
}

export default BodyContent;
