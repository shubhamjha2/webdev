import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        ` font-semibold block pb-2 text-sm ${
                          isActive ? "text-orange-500" : "text-blueGray-600"
                        }`
                      }
                      exact
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      className={({ isActive }) =>
                        ` font-semibold block pb-2 text-sm ${
                          isActive ? "text-orange-500" : "text-blueGray-600"
                        }`
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink
                      to="/gitprofile"
                      className={({ isActive }) =>
                        ` font-semibold block pb-2 text-sm ${
                          isActive ? "text-orange-500" : "text-blueGray-600"
                        }`
                      }
                    >
                      Github
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      className={({ isActive }) =>
                        ` font-semibold block pb-2 text-sm ${
                          isActive ? "text-orange-500" : "text-blueGray-600"
                        }`
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="http://shubhamjha.co"
                target="_blank"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                React JS by
                <a className="text-blueGray-500 hover:text-blueGray-800">
                  {" "}
                  Shubham jha
                </a>
                .
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
