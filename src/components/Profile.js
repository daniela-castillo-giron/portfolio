import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-purple-900 bg-pink-50 body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-6 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        {/* Profile Image */}
        {/* <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4"
        >
          <img
            className="object-cover object-center border-4 border-pink-200 shadow-lg rounded-full"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div> */}

        {/* Profile Info */}
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-semibold text-purple-800"
          >
            Hello, I am{" "}
            <span className="text-pink-500">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-purple-700 mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-3 text-purple-700 text-lg md:text-xl leading-relaxed"
            >
              {item}
            </p>
          ))}

          {/* Buttons */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-6 flex gap-x-4 md:gap-x-6 justify-center md:justify-between"
          >
            <button className="inline-flex font-medium text-white bg-purple-500 border-2 border-purple-500 py-3 px-7 focus:outline-none hover:bg-white hover:text-purple-600 hover:border-purple-400 rounded-full text-md xl:px-10 shadow-sm transition-all">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Hire Me
              </Link>
            </button>
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-pink-500 border-2 border-pink-500 py-3 px-7 focus:outline-none hover:bg-white hover:text-pink-500 hover:border-pink-400 rounded-full text-md xl:px-10 shadow-sm transition-all">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
