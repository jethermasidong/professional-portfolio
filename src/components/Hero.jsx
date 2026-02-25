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
import brightnessIcon from "../assets/brightness.png";
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
            <h1 className="text-2xl font-bold">Jether Masidong</h1>
            <img src={graduatedIcon} alt="Graduated" className="w-4 h-4 translate-y-1" />
          </div>

          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <img src={locationIcon} alt="Location" className="w-4 h-4" />
            <span className="text-sm italic opacity-60">
              Baguio City, Philippines
            </span> 
          </div>

          <div className="flex w-full max-w-4xl items-center justify-between gap-135">
            <button className="group relative mt-2 inline-block overflow-hidden rounded-full bg-blue-300/30 px-5 text-sm font-semibold text-blue-700/70 transition-all hover:bg-blue-500/70 hover:text-white">
              <div className="relative inline-block py-1.5 transition-transform duration-300 group-hover:-translate-y-full">
                <span className="block">Full-Stack Developer</span>
                <span className="absolute top-full left-0 block w-full">
                  Software Engineer
                </span>
              </div>
            </button>
            <button className="rounded-full border border-black px-4 py-1.5 text-sm transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
              <img src={darknessIcon} alt="Dark" className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-4 py-2 border border-black text-sm rounded-md hover:bg-white hover:text-black transition hover:scale-110 transition-transform duration-300"
            >
              <img src={resumeIcon} alt="Resume" className="w-4 h-4" />
              Resume
            </a>

            <a
              href="mailto:jethermasidong05@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-black text-sm rounded-md hover:bg-white hover:text-black transition hover:scale-110 transition-transform duration-300"
            >
              <img src={emailIcon} alt="Email" className="w-4 h-4" />
              Send Email
            </a>

            <a
              href="https://facebook.com/jetherjetmasidong"
              className="p-2 border border-black rounded-full hover:bg-white transition hover:scale-110 transition-transform duration-300"
            >
              <img src={facebookIcon} className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/jetherjetmasidong"
              className="p-2 border border-black rounded-full hover:bg-white transition hover:scale-110 transition-transform duration-300"
            >
              <img src={githubIcon} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
