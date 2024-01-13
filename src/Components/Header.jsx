import React from "react";
import logo from "../assets/images/page-logo.png";
import searchicon from "../assets/images/search-icon.svg";
import arrow from "../assets/images/arrows.svg";
import sun from "../assets/images/sun.svg";

const Header = () => {
  return (
    <>
      <header className="bg-img flex min-h-svh flex-col relative  ">
        <nav className="py-6">
          <div className="container mx-auto px-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={logo} alt="pagelogo" />
                <h3 className="ml-3 mt-1.5 pagelogo ff-work font-serif text-2xl text-center font-normal not-italic">
                  maître d
                </h3>
              </div>
              <label for="iconbar">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="iconbar" hidden />
              <ul className="flex items-center gap-x-11 menubar">
                <li>
                  <a
                    href="#"
                    className="font-normal text-base font-serif nav-bar not-italic before:bg-gradient-to-r from-orange-400 to-orange-700 hover:bg-gradient-to-r from-orange-400 to-orange-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-base font-serif nav-bar not-italic before:bg-gradient-to-r from-orange-400 to-orange-700 hover:bg-gradient-to-r from-orange-400 to-orange-700"
                  >
                    Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-base font-serif nav-bar not-italic before:bg-gradient-to-r from-orange-400 to-orange-700 hover:bg-gradient-to-r from-orange-400 to-orange-700"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal text-base font-serif nav-bar not-italic before:bg-gradient-to-r from-orange-400 to-orange-700 hover:bg-gradient-to-r from-orange-400 to-orange-700"
                  >
                    Features
                  </a>
                </li>
                <li className=" items-center flex gap-x-11 font-normal text-base font-serif">
                  <a
                    href="#"
                    className="font-normal text-base font-serif nav-bar not-italic before:bg-gradient-to-r from-orange-400 to-orange-700 hover:bg-gradient-to-r from-orange-400 to-orange-700"
                  >
                    Contact Us
                  </a>
                  <img src={searchicon} alt="search-icon" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="grow flex items-center">
          <div className="container mx-auto px-3 relative">
            <div className="center-text">
              <h1 className="heading-1 text-center mt-10 md:text-6xl text-4xl font-extrabold not-italic">
                Maitre D – Store Management for Barbers
              </h1>
              <div className="mt-10 center-text">
                <button className="head-btn btn-font text-xl font-bold hover:scale-90">
                  Submit
                </button>
              </div>
            </div>
            <img className="absolute arrow" src={arrow} alt="arrow" />
            <img className="absolute sun" src={sun} alt="sun" />
          </div>
        </div>
        <div className="bg-orange-layer"></div>
        <div className="bg-white-layer"></div>
      </header>
    </>
  );
};

export default Header;
