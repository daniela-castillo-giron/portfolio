import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
      className={`${
        showButton ? "fixed bottom-4 right-5" : "hidden"
      } bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full shadow-lg transition-all duration-500`}
    >
      <FaCircleArrowUp className="w-6 h-6 lg:w-7 lg:h-7" />
    </button>
  );
};

export default ScrollToTopButton;
