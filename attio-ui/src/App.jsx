import React from "react";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <>
      <Navbar logo={logo} />
      <MainBody />
    </>
  );
};

export default App;
