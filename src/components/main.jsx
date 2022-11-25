import React from "react";
import Navbar from "./navbar";
import Socials from "./socials";
import Home from "./home";
import Education from "./education";
import Certificates from "./certificates.jsx";
import Awards from "./awards";
import Skills from "./skills";
import Contact from "./contact";
const main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Socials />
        <div className="flex flex-col ">
          <Home />
          <Education />
          <Certificates />
          <Awards />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default main;
