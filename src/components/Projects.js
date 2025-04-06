import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "../data/projects";

const Projects = () => {
  return (
    <section className="text-purple-800 bg-pink-50 body-font">
      <div className="px-3 py-6 mx-auto text-center sm:mx-6 md:mx-12 xl:mx-40">
        {/* Header */}
        <div
          id="projects"
          className="flex flex-wrap w-full flex-col items-center text-center mb-6"
        >
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-pink-600">
            Projects
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-purple-600"
          >
            My Works
          </p>
        </div>

        {/* Project Cards */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 mt-4 md:mt-8">
          {ProjectsData.reverse().map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative flex flex-col h-80 w-[95%] mx-auto rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 w-full object-fill rounded-2xl group-hover:brightness-75 transition-all duration-500"
              />
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-pink-200/90 backdrop-blur-sm rounded-2xl">
                <h3 className="text-2xl font-semibold text-purple-800 my-2">
                  {project.name}
                </h3>
                <p className="px-2 text-md text-purple-700">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {project?.icons?.map((Icon, index) => (
                    <div
                      className="rounded-full p-2 bg-pink-300/60 shadow-md"
                      key={index}
                    >
                      <Icon className="text-purple-800 text-3xl" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 justify-center items-center mt-5 text-2xl">
                  {project.github?.ui && (
                    <a
                      className="text-white bg-purple-500 hover:bg-purple-600 rounded-full px-3 py-2 text-sm transition flex items-center gap-2"
                      href={project.github.ui}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> UI
                    </a>
                  )}

                  {project.github?.backend && (
                    <a
                      className="text-white bg-purple-400 hover:bg-purple-500 rounded-full px-3 py-2 text-sm transition flex items-center gap-2"
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> API
                    </a>
                  )}
                  <a
                    className="text-white bg-pink-500 hover:bg-pink-600 rounded-full p-2 transition"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="p-[1px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
