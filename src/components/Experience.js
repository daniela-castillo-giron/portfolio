import React, { useState } from "react";
import ExperienceData from "../data/experience";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (exp) => {
    setSelectedExperience(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section className="py-3 px-3 bg-pink-50 mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold title-font mb-2 text-pink-600">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-purple-600 text-center"
          >
            Professional Experience
          </p>
        </div>

        <div className="flex flex-col md:grid grid-cols-9 mx-auto text-purple-800">
          {ExperienceData?.slice().reverse().map((exp, index) => {
            const isLeft = index % 2 === 0;

            const cardContent = (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="false"
                className="bg-white border border-pink-200 text-purple-800 p-2.5 md:p-4 rounded-xl my-4 shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-pink-600">
                  {exp.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between font-medium w-full gap-2 mb-2 text-purple-500">
                  <h4 className="text-base">{exp.company}</h4>
                  <p className="text-sm md:text-base">{exp.duration}</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => openModal(exp)}
                    className="mt-2 text-sm text-pink-500 hover:text-pink-600 font-medium transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );

            const connector = (
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-10">
                <div className="h-full w-4 flex items-center justify-center">
                  <div className="h-full w-[3px] bg-pink-300"></div>
                </div>
                <div className="w-4 h-4 absolute top-4 rounded-full bg-pink-500 shadow">
                  <div className="h-full w-full bg-pink-300/40 animate-pulse scale-150 rounded-full"></div>
                </div>
              </div>
            );

            return isLeft ? (
              <div
                key={index}
                className="flex flex-row-reverse md:contents text-start"
              >
                <div className="col-start-1 col-end-5 ml-auto">{cardContent}</div>
                {connector}
              </div>
            ) : (
              <div key={index} className="flex md:contents text-start">
                {connector}
                <div className="col-start-6 col-end-10 mr-auto">{cardContent}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedExperience && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-xl relative animate-fadeIn border border-pink-200 text-purple-800">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-pink-500 text-lg hover:text-pink-600"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-pink-600 mb-1">
              {selectedExperience.title}
            </h3>
            <div className="text-purple-600 font-medium mb-3">
              {selectedExperience.company} · {selectedExperience.duration}
            </div>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2 max-h-[60vh] overflow-y-auto pr-2 text-left">
              {selectedExperience.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
