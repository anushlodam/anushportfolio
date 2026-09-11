import React, { useState } from "react";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="work"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          PROJECTS
        </h2>
        <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300/80 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          A showcase of the featured projects and applications I have engineered, highlighting my technical stack and implementation skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-purple-500/20 bg-[#0d081f]/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-xl bg-black/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d081f] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#1b1535] text-purple-300 border border-purple-500/20 text-xs font-medium rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-purple-400 font-semibold flex items-center justify-between pt-2 border-t border-purple-500/10">
                  <span>Click to view details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#0d081f] border border-purple-500/40 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-7 relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center pb-3 border-b border-purple-500/20 mb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full bg-black/40 rounded-xl overflow-hidden mb-5 border border-purple-500/20">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-72 object-contain mx-auto"
              />
            </div>

            {/* Modal Details */}
            <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1b1535] text-purple-300 border border-purple-500/30 text-xs font-medium rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1a1435] hover:bg-purple-900/40 border border-purple-500/30 text-gray-200 hover:text-white py-3 px-4 rounded-xl text-sm sm:text-base font-semibold transition"
              >
                <FaGithub /> View Code
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-xl text-sm sm:text-base font-semibold shadow-lg shadow-purple-600/30 transition"
              >
                <FaExternalLinkAlt /> View Live App
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;