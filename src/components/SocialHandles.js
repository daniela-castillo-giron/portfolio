import React from "react";
import ContactData from "../data/contact";

const SocialHandles = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex gap-5 my-4"
    >
      {ContactData?.links?.map((link, index) => (
        <a
          key={index}
          className="text-white text-4xl md:text-3xl transition duration-700 hover:scale-125"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <link.icon className="text-pink-400 drop-shadow-lg" />
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
