/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ProgressBar from "./progress-bar";
import ApplicationForm from "./application-form";
import OurService from "./our-service";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  section: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    }
  }
};

const sentence = {
  margin: "20px 10px",
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
      <section>
        <ApplicationForm />
        <OurService />
      </section>
    </main>
  );
}

export default BodyContent;
