import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Landingpagerout from "./Landingpagerout";
import GIThubprofile from "./githubprofile";
import Aboutuspage from "./Aboutuspage";
import Contactpage from "./contactpage";

function Routingprojactmain() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpagerout />} />
        <Route path="/gitprofile" element={<GIThubprofile />} />
        <Route path="/about-us" element={<Aboutuspage />} />
        <Route path="/contact-us" element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routingprojactmain;
