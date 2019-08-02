/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Symbols from "./symbols";
import Home from "../views/home";

function App() {
  return (
    <>
      <Symbols />
      <Home />
    </>
  );
}

export default App;
