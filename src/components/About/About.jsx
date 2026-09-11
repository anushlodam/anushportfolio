import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/IMG_9208.JPG';

const ROLES = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "React & Node.js Developer",
    "Software Engineer"
];

const About = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const fullRole = ROLES[currentRoleIndex];

        const handleType = () => {
            if (!isDeleting) {
                // Typing forward
                setCurrentText(fullRole.substring(0, currentText.length + 1));
                setTypingSpeed(90);

                if (currentText === fullRole) {
                    // Pause before deleting
                    setTypingSpeed(1800);
                    setIsDeleting(true);
                }
            } else {
                // Deleting backward
                setCurrentText(fullRole.substring(0, currentText.length - 1));
                setTypingSpeed(45);

                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
                    setTypingSpeed(400);
                }
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const yOffset = -70;
            const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="about"
            className="w-full min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans"
        >
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-10 lg:gap-12">
                {/* Left Content Side */}
                <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
                    {/* Greeting */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-2">
                        Hi, I am
                    </h1>

                    {/* Name */}
                    <h2 className="text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400">
                            Anush Lodam
                        </span>
                    </h2>

                    {/* Skills Heading with Native Typing Effect */}
                    <div className="h-10 sm:h-12 flex items-center mb-4">
                        <span className="text-lg sm:text-2xl md:text-3xl font-bold text-[#a855f7]">
                            <span className="text-gray-400 font-semibold mr-2">I am a</span>
                            <span className="text-[#8245ec]">{currentText}</span>
                            <span className="inline-block w-0.5 h-6 sm:h-7 bg-[#8245ec] ml-1 animate-pulse align-middle"></span>
                        </span>
                    </div>

                    {/* About Me Paragraph */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-2xl leading-relaxed mb-8 sm:mb-10">
                        I am a passionate full-stack developer with experience in building scalable, modern web applications. Skilled in both frontend and backend development, I specialize in the MERN stack and modern technologies to create seamless user experiences, high-speed performance, and robust architectures.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full sm:w-auto">
                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center text-white py-3.5 px-8 rounded-full text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(130,69,236,0.6)]"
                            style={{
                                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            }}
                        >
                            DOWNLOAD CV
                        </a>

                        {/* Contact Me Button */}
                        <button
                            onClick={handleScrollToContact}
                            className="w-full sm:w-auto text-center text-purple-300 hover:text-white py-3.5 px-8 rounded-full text-base sm:text-lg font-semibold border border-purple-500/40 hover:bg-purple-600/20 transition-all duration-300 active:scale-95"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Profile Side */}
                <div className="w-full lg:w-2/5 flex justify-center items-center">
                    <div className="relative group">
                        {/* Ambient glow behind avatar */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                        <Tilt
                            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-full border-4 border-purple-500/80 p-1 bg-[#0d081f] shadow-[0_0_40px_rgba(130,69,236,0.4)]"
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.03}
                            transitionSpeed={800}
                            gyroscope={true}
                        >
                            <img
                                src={profileImage}
                                alt="Anush Lodam"
                                className="w-full h-full rounded-full object-cover object-center"
                                loading="eager"
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;