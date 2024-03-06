import React from "react";

import Home from "../components/Home";
import About from "../components/About";
import Clients from "../components/Clients";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
// import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      {/* <Portfolio /> */}
      <Clients />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
