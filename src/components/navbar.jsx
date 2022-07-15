import React from "react";
import Titleimg from "./titleimg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <BrowserRouter>
        <div className="sticky top-0 flex h-auto w-screen bg-white">
          <div className=" mx-2 my-1">
          <HashLink smooth to="#about">
            <Titleimg width="60px" height="60px" />
          </HashLink>
          </div>
          <div className="w-1/3"></div>
          <div className="my-5 text-blue-900 font-sans">
            <HashLink smooth to="#about">
              <i className="transition ease-in-out delay-100 duration-300  mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                About
              </i>
            </HashLink>
            <HashLink smooth to="#education"> 
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500 ">
                Education
              </i>
            </HashLink>
            <HashLink smooth to="#projects">
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500 ">
                Projects
              </i>
            </HashLink>
            <HashLink smooth to="#certificates">
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Certificates and Cources
              </i>
            </HashLink>
            <HashLink smooth to="#awards">
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Awards and Achievements
              </i>
            </HashLink>
            <HashLink smooth to="#skills">
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Skills
              </i>
            </HashLink>
            <HashLink smooth to="#contact">
              <i className="transition ease-in-out delay-100 duration-300 mx-2 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500 ">
                Contact
              </i>
            </HashLink>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default Navbar;
