import React from "react";
import { Link } from "react-scroll";
import AboutData from "../data/about";
import ProfileData from "../data/profile";

const About = () => {
  return (
    <section className="bg-pink-50 body-font text-purple-800">
      <div className="p-5 mt-3 mx-auto md:mt-5 md:mx-10 lg:mx-16">
        {/* Header */}
        <div id="about" className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-pink-600">
            About Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-purple-600 text-center"
          >
            Why hire me?
          </p>
        </div>

        {/* Image + Text */}
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="lg:max-w-lg sm:w-2/3 lg:w-1/2 w-full mb-10 md:mb-0"
          >
            <img
              className="object-cover object-center rounded-2xl shadow-md border border-pink-200"
              alt="hero"
              src={AboutData.image}
            />
          </div>

          <div className="lg:w-1/2 justify-center lg:p-5 xl:p-7 md:p-5 flex flex-col items-center text-justify">
            {AboutData.description?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="font-normal text-purple-700 text-lg lg:text-base xl:text-xl leading-relaxed xl:leading-8 mb-4"
              >
                {item}
              </p>
            ))}

            {/* Buttons */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="mt-6 flex gap-x-4 md:gap-x-6 justify-center md:justify-between"
            >
              <button className="inline-flex font-medium text-white bg-purple-500 border-2 border-purple-500 py-3 px-7 rounded-full hover:bg-white hover:text-purple-600 hover:border-purple-400 transition duration-300 text-md xl:px-10 shadow-sm">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a href={ProfileData.resume} target="_blank" rel="noreferrer">
                <button className="inline-flex font-medium text-white bg-pink-500 border-2 border-pink-500 py-3 px-7 rounded-full hover:bg-white hover:text-pink-500 hover:border-pink-400 transition duration-300 text-md xl:px-10 shadow-sm">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
