import React from "react";
import Titleimg from "./ImgJSX/titleimg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <BrowserRouter>
        <div className="sticky top-0 flex h-14 w-2/2 bg-white py-1 ">
          <div className=" mx-1 ml-2 transition ease-in-out delay-50 duration-100 hover:scale-110 ">
          <HashLink smooth to="#home">
            <Titleimg width="50px" height="50px" />
          </HashLink>
          </div>
          <div className="w-1/3"></div>
          <div className="py-3 text-blue-900 font-sans">
          <HashLink smooth to="#home">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Home
              </i>
            </HashLink>
            <HashLink smooth to="#about">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                About
              </i>
            </HashLink>
            <HashLink smooth to="#education and project"> 
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500 ">
                Education & Projects
              </i>
            </HashLink>
            <HashLink smooth to="#certificates">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Certificates and Courses
              </i>
            </HashLink>
            <HashLink smooth to="#awards">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Awards and Achievements
              </i>
            </HashLink>
            <HashLink smooth to="#skills">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Skills
              </i>
            </HashLink>
            <HashLink smooth to="#contact">
              <i className="transition ease-in-out delay-100 duration-300 mx-1 text-lg not-italic font-semibold px-1 py-1 hover:text-sky-500 ">
                Contact
              </i>
            </HashLink>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default Navbar;
