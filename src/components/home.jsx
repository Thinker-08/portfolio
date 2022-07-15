import React from "react";
import Myphoto from "./myphoto";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const about = () => {
  return (
    <BrowserRouter>
      <div className="bg-slate-300 flex py-24 pl-16 pr-10" id="home">
        <div className=" text-left flex-wrap  w-4/6 py-16 pl-10 mr-8 rounded-full">
          <p className="text-5xl text-cyan-600">Hi, I am</p>
          <p className="text-7xl text-blue-900 font-semibold">Mihir Agrawal</p>
          <p className="text-4xl text-blue-600 font-medium py-2">
            Web Developer and Competitive Programmer
          </p>
          <p className="text-xl ">
            In some ways, programming is like painting. You start with a blank
            canvas and certain basic raw materials. You use a combination of
            science, art, and craft to determine what to do with them.
            <div className="my-10">
              <button className="transition ease-in-out delay-50 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-7 mx-4 rounded-full">
                <a href="/Resume/Resume.pdf" download>
                  Download CV
                </a>
              </button>
              <HashLink smooth to="#contact">
                <button className="transition ease-in-out delay-50 duration-200 hover:scale-105 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-5 px-7 mx-4 border border-blue-500 rounded-full">
                  Contact Me
                </button>
              </HashLink>
            </div>
          </p>
        </div>
        <div>
          <Myphoto width="500px" height="500px" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default about;
