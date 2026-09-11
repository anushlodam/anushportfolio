import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        SKILLS
      </h2>
      <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-300/80 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
        A collection of my technical skills and expertise honed through various real-world projects and experiences.
      </p>
    </div>

    {/* Skill Categories Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#0d081f]/90 backdrop-blur-md p-5 sm:p-7 md:p-8 rounded-2xl border border-purple-500/20 shadow-[0_0_25px_rgba(130,69,236,0.15)] hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(130,69,236,0.25)] transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center border-b border-purple-500/20 pb-3">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-[#131025] hover:bg-[#1a1533] border border-gray-700/80 hover:border-purple-500/60 rounded-xl py-2.5 px-2.5 text-center transition-all duration-200 group shadow-sm"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;