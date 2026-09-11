import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 bg-[#07041a] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Name / Logo */}
        <button
          onClick={() => handleScroll("about")}
          className="text-2xl font-bold tracking-wider group focus:outline-none mb-4"
        >
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">&lt;</span>
          <span className="text-white group-hover:text-purple-200 transition-colors">Anush</span>
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">/</span>
          <span className="text-white group-hover:text-purple-200 transition-colors">Lodam</span>
          <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">&gt;</span>
        </button>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 my-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Education", id: "education" },
            { name: "Projects", id: "work" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-400 text-sm sm:text-base transition-colors py-1 px-2"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex justify-center items-center space-x-4 my-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/codingmastr", label: "GitHub" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4", label: "LinkedIn" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/", label: "Instagram" },
            { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09", label: "Twitter" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="p-3 bg-[#130f2b] text-gray-300 hover:text-white hover:bg-purple-600 rounded-xl border border-purple-500/20 text-lg transition-all duration-300 transform hover:scale-110 shadow-md"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} Anush Lodam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;