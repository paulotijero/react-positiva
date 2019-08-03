/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  padding: "30px 50px",
  color: "#fff",
  backgroundColor: "#ff6d46",
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "25px"
  },
  p: {
    margin: "0",
    fontSize: "16px",
    lineHeight: "22px"
  },
  svg: {
    fill: "#fff",
    width: "30px",
    height: "30px",
    margin: "0 12px"
  },
  section: {
    ":first-of-type": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: "30px",
      borderBottom: "1px solid #fff"
    },
    ":last-child": {
      paddingTop: "30px"
    }
  },
  "@media (max-width: 768px)": {
    padding: "30px 30px",
    section: {
      ":first-of-type": {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline"
      }
    },
    div: {
      margin: "10px",
      ":last-child": {
        margin: "0"
      }
    },
    span: {
      display: "block"
    }
  }
};

function Footer() {
  return (
    <footer css={container}>
      <section>
        <div>
          <img
            src="https://www.labpositiva.com/_nuxt/img/96cdbff.svg"
            alt="La Positiva"
          />
        </div>
        <div>
          <label>Oficina Principal</label>
          <p>Calle Francisco Masias 370 San Isidro, Lima 27</p>
        </div>
        <div>
          <label>Síguenos</label>
          <div>
            <a
              href="https://www.facebook.com/LaPositivaSeguros/"
              target="_blank"
            >
              <svg>
                <use xlinkHref="#facebook" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/lapositivaseguros"
              target="_blank"
            >
              <svg>
                <use xlinkHref="#instagram" />
              </svg>
            </a>
            <a href="https://twitter.com/LAB_Positiva" target="_blank">
              <svg>
                <use xlinkHref="#twitter" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCmZCrICnE6lh1JdHLbkZkEA"
              target="_blank"
            >
              <svg>
                <use xlinkHref="#youtube" />
              </svg>
            </a>
            <a href="https://github.com/paulotijero/react-positiva">
              <svg>
                <use xlinkHref="#github" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <p>
          <span>© 2019</span> <span>LAB+ La Positiva Seguros</span>
          <span> Gerencia de Transformación Digital</span>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
