import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-2"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic background and educational journey
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-4xl mx-auto py-10 space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8
            rounded-2xl border border-white
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
            hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.45)]
            transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6">

              {/* College Logo */}
              <div className="w-24 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Education Details */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <h4 className="text-purple-400 font-semibold mt-2">
                  {edu.school}
                </h4>

                <p className="text-gray-500 text-sm mt-2">
                  {edu.date}
                </p>
              </div>
            </div>

            {/* Grade */}
            <p className="mt-6 text-gray-300 font-semibold">
              Grade:{" "}
              <span className="text-purple-400">
                {edu.grade}
              </span>
            </p>

            {/* Description */}
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;