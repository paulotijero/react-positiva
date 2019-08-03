/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { DataContext } from "../contexts/data";

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

function ProgressBar() {
  const contextType = React.useContext(DataContext);
  return (
    <div css={container}>
      <span
        css={
          contextType.step > 1
            ? { display: "none" }
            : contextType.step === 1
            ? currentCircle
            : circle
        }
      >
        1
      </span>
      <svg css={contextType.step > 1 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
      <span css={contextType.step > 1 ? currentLine : line} />
      <span
        css={
          contextType.step > 2
            ? { display: "none" }
            : contextType.step === 2
            ? currentCircle
            : circle
        }
      >
        2
      </span>
      <svg css={contextType.step > 2 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
      <span css={contextType.step > 2 ? currentLine : line} />
      <span
        css={
          contextType.step > 3
            ? { display: "none" }
            : contextType.step === 3
            ? currentCircle
            : circle
        }
      >
        3
      </span>
      <svg css={contextType.step > 3 ? "" : { display: "none" }}>
        <use xlinkHref="#check" />
      </svg>
    </div>
  );
}

export default ProgressBar;
