/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Header from "../components/header";
import BodyContent from "../components/body-content";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <BodyContent />
      <Footer />
    </>
  );
}

export default Home;
