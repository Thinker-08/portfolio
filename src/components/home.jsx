import React from "react";
import Myphoto from "./ImgJSX/myphoto";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./about.jsx"
const about = () => {
  return (
    <BrowserRouter>
      <div className="  bg-slate-300 flex flex-wrap pb-12 pl-16 change-intro-container" id="home">
        <div className="text-left flex-wrap  py-16 pl-10 rounded-full pr-2 change-intro">
          <p className="animate-bounce text-5xl text-cyan-600">Hi, I am</p>
          <p className="text-7xl text-blue-900 font-semibold">Mihir Agrawal</p>
          <p className="text-4xl text-blue-600 font-medium py-2">
            Web Developer and Competitive Programmer
          </p>
          <p className="text-xl w-auto">
            In some ways, programming is like painting. You start with a blank
            canvas and certain basic raw materials. You use a combination of
            science, art, and craft to determine what to do with them.
            <div className="my-10">
            <Routes>
              <button className="transition ease-in-out delay-50 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-7 mx-4 rounded-full" onClick={console.log("Clicked")}>
                  <Route exact path="/about" element={<About />}/>
                About Me  
              </button>
              </Routes>
              <HashLink smooth to="#contact">
                <button className="transition ease-in-out delay-50 duration-200 hover:scale-105 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-5 px-7 mx-4 border border-blue-500 rounded-full">
                  Contact Me
                </button>
              </HashLink>
            </div>
          </p>
        </div>
        <div className="change-intro-photo">
          <Myphoto width="450px" height="450px"/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default about;
