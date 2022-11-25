import React from "react";
import Titleimg from "./ImgJSX/titleimg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
     <nav className="navbar bg-white">
      <div className="navbar-container container">
      <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li>
                <HashLink smooth to="#home">
                  <i className=" transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                    Home
                  </i>
              </HashLink>
              </li>
              <li>
              </li>
              <li>
              <HashLink smooth to="#education and project"> 
              <i className="transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500 ">
                Education & Projects
              </i>
            </HashLink>
              </li>
              <li>
              <HashLink smooth to="#certificates">
              <i className="transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Certificates and Courses
              </i>
            </HashLink>
              </li>
              <li>
              <HashLink smooth to="#awards">
              <i className="transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Awards and Achievements
              </i>
            </HashLink>
              </li>
              <li>
              <HashLink smooth to="#skills">
              <i className="transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold  px-1 py-1 hover:text-sky-500  ">
                Skills
              </i>
            </HashLink>
              </li>
              <li>
              <HashLink smooth to="#contact">
              <i className="transition ease-in-out delay-50 duration-300 mx-1 text-lg not-italic font-semibold px-1 py-1 hover:text-sky-500 ">
                Contact
              </i>
            </HashLink>
              </li>
          </ul>
          <div className=" transition ease-in-out delay-50 duration-100 hover:scale-110 pl-2">
          <HashLink smooth to="#home">
            <Titleimg width="50px" height="50px" />
          </HashLink>
          </div>
      </div>
  </nav>
  );
};

export default Navbar;
