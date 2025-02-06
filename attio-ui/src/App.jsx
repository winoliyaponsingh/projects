import React from "react";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar logo={logo} />
      <MainBody />
      <Footer />
    </>
  );
};

export default App;
