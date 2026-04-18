import { motion } from "framer-motion";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import profileHover from "../assets/profile-hover.jpg";
import locationIcon from "../assets/location-icon.png"; 
import resumeIcon from "../assets/resume.png";
import emailIcon from "../assets/email.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";
import graduatedIcon from "../assets/graduated.png";
import darknessIcon from "../assets/user-interface.png";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-start gap-6 columns-2">
        <motion.img
          src={hovered ? profileHover : profile}
          alt="Jether Masidong"
          className="w-36 h-36 object-cover rounded-md cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <div className="text-left">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-satoshi font-bold text-gray-700">Jether Masidong</h1>
            <img src={graduatedIcon} alt="Graduated" className="w-4 h-4 translate-y-1" />
          </div>

          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <img src={locationIcon} alt="Location" className="w-3 h-3" />
            <span className="text-sm opacity-60 font-satoshi">
              Baguio City, Philippines
            </span> 
          </div>

          <div className="flex w-full max-w-4xl items-center justify-between gap-135 mb-2">
            <button className="group relative mt-2 pt-1 pb-1 inline-block overflow-hidden rounded-full bg-blue-300/30 px-5 text-sm font-semibold text-blue-700/70">
                <span className="block">Full-Stack Developer</span>
            </button>
            <button className="rounded-full border border-black px-4 py-1.5 text-sm transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
              <img src={darknessIcon} alt="Dark" className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-4 py-2 border font-satoshi border-blue-400 text-sm rounded-md hover:bg-white hover:text-black transition hover:scale-101 transition-transform duration-200"
            >
              <img src={resumeIcon} alt="Resume" className="w-4 h-4" />
              Resume
            </a>

            <a
              href="mailto:jethermasidong05@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-blue-400 bg-white text-sm rounded-md hover:bg-blue-200 hover:text-black transition hover:scale-101 transition-transform duration-200"
            >
              
              Send Email
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>

            <a
              href="https://facebook.com/jetherjetmasidong"
              className="p-3 border border-blue-300 rounded-full transition hover:scale-105 transition-transform duration-200"
            >
              <img src={facebookIcon} className="w-3 h-3" />
            </a>

            <a
              href="https://github.com/jetherjetmasidong"
              className="p-3 border border-blue-300 rounded-full transition hover:scale-105 transition-transform duration-200"
            >
              <img src={githubIcon} className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
