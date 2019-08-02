/** @jsx jsx */
import { jsx } from "@emotion/core";

function Input({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        margin: "10px 0",
        width: "350px",
        height: "50px",
        border: "1px solid #D2D2D2",
        borderRadius: "8px",
        ":focus": {
          outline: "none"
        },
        "::-webkit-input-placeholder": {
          paddingLeft: "10px",
          fontSize: "20px",
          color: "#D2D2D2"
        },
        ...styles
      }}
    />
  );
}

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        cursor: "pointer",
        width: "200px",
        height: "40px",
        padding: "0 30px",
        border: "1px solid #ff6d46",
        borderRadius: "34px",
        backgroundColor: "#ff6d46",
        color: "#fff",
        transition: "all 0.25s",
        ":hover": {
          backgroundColor: "#fff",
          color: "#ff6d46"
        },
        ...styles
      }}
    />
  );
}

function Label({ styles, ...props }) {
  return (
    <label
      {...props}
      css={{
        fontSize: "20px",
        color: "#878787"
      }}
    />
  );
}

export { Input, Button, Label };
