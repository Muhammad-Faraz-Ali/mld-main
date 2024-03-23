import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";

import ScrollToTop from "./components/ScrollToTop";
import useDocTitle from "./hooks/useDocTitle";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("Tvinzo"); //project name changed to tvinzo
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/get-demo" element={<DemoProduct />} />  */}
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
