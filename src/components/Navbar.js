import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Navlinks from "../data/navlinks";
import ProfileData from "../data/profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-purple-900 body-font fixed inset-x-0 z-50 bg-pink-100 shadow-sm">
      <div className="mx-auto py-3 px-5 flex flex-row justify-between lg:justify-around items-center">
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          spy={true}
          smooth={true}
          offset={-100}
          duration={750}
          to="home"
          className="flex items-center w-fit"
        >
          {/* <h2 className="text-2xl font-bold text-purple-700">Daniela Castillo</h2> */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-200 text-pink-700 font-bold text-xl shadow-md border border-pink-300 select-none">
            DC
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden lg:flex flex-wrap items-center text-lg justify-center gap-10"
        >
          {Navlinks.map((item) => (
            <Link
              key={item.title}
              spy={true}
              smooth={true}
              offset={-100}
              duration={750}
              to={item.link}
              className="cursor-pointer text-purple-700 hover:text-pink-500 transition-colors font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="lg:hidden mr-2"
        >
          <button onClick={toggleMenu} className="p-2 text-purple-700">
            {isMenuOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <BiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Resume Button */}
        <button
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="false"
          className="hidden lg:flex items-center justify-center w-fit"
        >
          <a
            href={ProfileData.resume}
            target="_blank"
            rel="noreferrer"
            className="leading-none text-white bg-pink-500 hover:bg-pink-600 py-2.5 px-8 rounded-2xl font-semibold text-lg shadow-md transition-all"
          >
            Resume
          </a>
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-16 inset-x-0 z-50 bg-pink-100 shadow-xl lg:hidden rounded-b-xl py-6 px-5">
            <nav className="flex flex-col gap-y-6 text-xl text-purple-800 font-medium">
              {Navlinks.map((item) => (
                <Link
                  key={item.title}
                  onClick={() => setIsMenuOpen(false)}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={750}
                  to={item.link}
                  className="cursor-pointer hover:text-pink-500 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <a
                href={ProfileData.resume}
                target="_blank"
                rel="noreferrer"
                className="text-white bg-pink-500 hover:bg-pink-600 py-2.5 px-8 rounded-2xl font-semibold text-lg shadow-md w-fit mx-auto transition-all"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
