import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section className="text-purple-800 bg-pink-50 body-font">
      <div className="p-4 pt-0 mt-5 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        {/* Header */}
        <div
          id="skills"
          className="flex flex-wrap w-full mb-6 flex-col justify-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-semibold mb-2 text-pink-600">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-purple-600"
          >
            My Technical Expertise
          </p>
        </div>

        {/* Skill Cards */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="false"
          className="px-2 py-6 grid justify-center items-center grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:py-5 lg:grid-cols-5 xl:grid-cols-5 bg-white rounded-xl shadow-md border border-pink-200"
        >
          {SkillsData.map((skill, index) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              key={index}
              className="flex flex-col w-20 h-20 items-center justify-center md:w-24 md:h-24 lg:m-3 xl:m-5 mx-auto transition-all duration-300 hover:scale-105 hover:bg-pink-100 rounded-xl"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
              />
              <p className="font-medium text-sm text-purple-700 text-center mt-1">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
