import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll and change navbar background & highlight active section
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["about", "skills", "experience", "education", "work", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -70;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "work", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#050414]/85 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-950/20 py-3 sm:py-4"
                    : "bg-transparent py-4 sm:py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => handleMenuItemClick("about")}
                        className="text-xl sm:text-2xl font-bold tracking-wider cursor-pointer group focus:outline-none"
                    >
                        <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">&lt;</span>
                        <span className="text-white group-hover:text-purple-200 transition-colors">Anush</span>
                        <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">/</span>
                        <span className="text-white group-hover:text-purple-200 transition-colors">Lodam</span>
                        <span className="text-[#8245ec] group-hover:text-purple-400 transition-colors">&gt;</span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => handleMenuItemClick(item.id)}
                                    className={`px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
                                        activeSection === item.id
                                            ? "text-[#8245ec] bg-purple-500/10 font-semibold"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Social Icons & CTA */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href="https://github.com/codingmastr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2 text-gray-300 hover:text-[#8245ec] hover:scale-110 transition-transform duration-200"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2 text-gray-300 hover:text-[#8245ec] hover:scale-110 transition-transform duration-200"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <button
                            onClick={() => handleMenuItemClick("contact")}
                            className="ml-2 hidden lg:inline-flex text-xs font-semibold px-4 py-2 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-sm"
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation Menu"
                            className="p-2 rounded-lg text-[#8245ec] hover:text-white hover:bg-purple-900/30 focus:outline-none transition-colors"
                        >
                            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 animate-fadeIn">
                    <div className="bg-[#0c0824]/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 shadow-2xl shadow-purple-950/50">
                        <ul className="flex flex-col space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleMenuItemClick(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                            activeSection === item.id
                                                ? "text-white bg-purple-600/30 border border-purple-500/40 font-semibold"
                                                : "text-gray-300 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 pt-4 border-t border-purple-500/20 flex justify-between items-center">
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/codingmastr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="p-2 bg-[#17113a] text-gray-300 hover:text-white rounded-lg border border-purple-500/20"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="p-2 bg-[#17113a] text-gray-300 hover:text-white rounded-lg border border-purple-500/20"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>

                            <button
                                onClick={() => handleMenuItemClick("contact")}
                                className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md hover:opacity-90"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;