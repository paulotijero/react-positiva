/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  marginBottom: "25px",
  svg: {
    width: "30px",
    height: "30px",
    fill: "#ff6d46"
  }
};

const circle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  border: "2px solid #c4c4c4",
  borderRadius: "50%",
  color: "#c4c4c4"
};

const currentCircle = {
  ...circle,
  border: "2px solid #ff6d46",
  color: "#ff6d46"
};

const line = {
  width: "80px",
  border: "1px solid #c4c4c4",
  backgroundColor: "#c4c4c4",
  "@media (max-width: 768px)": {
    width: "20px"
  }
};

const currentLine = {
  ...line,
  border: "1px solid #ff6d46",
  backgroundColor: "#ff6d46"
};

function ProgressBar({ id = 2 }) {
  return (
    <div css={container}>
      <span
        css={id > 1 ? { display: "none" } : id === 1 ? currentCircle : circle}
      >
        1
      </span>
      <svg css={id > 1 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
      <span css={id > 1 ? currentLine : line} />
      <span
        css={id > 2 ? { display: "none" } : id === 2 ? currentCircle : circle}
      >
        2
      </span>
      <svg css={id > 2 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
      <span css={id > 2 ? currentLine : line} />
      <span
        css={id > 3 ? { display: "none" } : id === 3 ? currentCircle : circle}
      >
        3
      </span>
      <svg css={id > 3 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
    </div>
  );
}

export default ProgressBar;
