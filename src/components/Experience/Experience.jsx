import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300/80 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          A showcase of my professional work experience, roles, and real-world impact across organizations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Continuous Vertical Timeline Spine */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-800"></div>

        {/* Experience Entries */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={experience.id}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline Circle Node */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d081f] border-2 sm:border-4 border-purple-500 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Content Card Container */}
                <div
                  className={`w-[calc(100%-2.5rem)] sm:w-[calc(100%-3.5rem)] md:w-[45%] ml-10 sm:ml-14 md:ml-0 ${
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="bg-[#0d081f]/90 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-purple-500/20 shadow-[0_0_20px_rgba(130,69,236,0.15)] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start sm:items-center space-x-4 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl p-1.5 flex-shrink-0 border border-purple-500/20 flex items-center justify-center">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug truncate">
                          {experience.role}
                        </h3>
                        <h4 className="text-sm font-medium text-purple-400">
                          {experience.company}
                        </h4>
                        <span className="inline-block text-xs text-gray-400 mt-1">
                          {experience.date}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed mb-4">
                      {experience.desc}
                    </p>

                    {/* Skills Badges */}
                    <div>
                      <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Skills Applied:
                      </h5>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-[#1a1435] text-purple-300 px-2.5 py-1 text-xs rounded-lg border border-purple-500/20 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;