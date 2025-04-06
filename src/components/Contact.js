import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  return (
    <section className="text-purple-800 bg-pink-50 body-font">
      <div className="px-3 py-6 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-pink-600">
            Contact Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-purple-600"
          >
            Let's keep in touch
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row w-full mx-auto rounded-xl bg-white border border-pink-200 p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10 shadow-md">
          {/* Contact Info */}
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="hidden md:block text-2xl lg:text-3xl text-pink-600 font-semibold mb-4"
            >
              Get In Touch
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-5 justify-center"
            >
              <SocialHandles />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center mb-4 text-purple-700"
            >
              <FaPhoneAlt className="text-pink-500" />
              <p className="md:text-lg">{ContactData.phone}</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center mb-4 text-purple-700"
            >
              <FaEnvelope className="text-pink-500" />
              <a
                href={`mailto:${ContactData.email}`}
                className="md:text-lg underline underline-offset-2"
              >
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center text-purple-700"
            >
              <FaMapMarkerAlt className="text-pink-500" />
              <p className="leading-normal text-start md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>

          {/* Netlify Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col p-3 rounded-xl bg-pink-100 md:w-1/2 md:p-4 lg:px-6 lg:py-7 lg:m-4 lg:w-3/5 shadow-inner"
          >
            {/* Required by Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="p-2 w-full">
              <input
                required
                placeholder="Your Name"
                type="text"
                name="user_name"
                className="w-full rounded-md border border-pink-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-purple-800 placeholder-pink-400 text-base p-3 transition-all duration-200 outline-none"
              />
            </div>
            <div className="p-2 w-full">
              <input
                required
                placeholder="Your Email"
                type="email"
                name="user_email"
                className="w-full rounded-md border border-pink-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-purple-800 placeholder-pink-400 text-base p-3 transition-all duration-200 outline-none"
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                required
                placeholder="Your Message"
                name="message"
                className="w-full rounded-md border border-pink-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 bg-white text-purple-800 placeholder-pink-400 h-32 text-base p-3 resize-none transition-all duration-200 outline-none"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button className="font-medium mx-auto my-3 text-white bg-pink-500 hover:bg-pink-600 border-0 py-2 px-12 rounded-full text-lg transition duration-300 ease-in-out shadow-md hover:scale-105">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
