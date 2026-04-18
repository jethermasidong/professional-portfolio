  import { motion } from "framer-motion";
  import { useState } from "react";
  import profile from "../assets/profile.jpg";
  import profileHover from "../assets/profile-hover.jpg";
  import locationIcon from "../assets/location-icon.png"; 
  import resumeIcon from "../assets/resume.png";
  import facebookIcon from "../assets/facebook.png";
  import githubIcon from "../assets/github.png";


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
            className="w-38 h-38 object-cover rounded-md cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div className="flex-1 text-left">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-satoshi font-bold text-gray-700">
                  Jether Masidong
                </h1>
                <span className="flex items-center gap-2 border border-black/10 rounded-full text-[12px] py-0.5 px-3 font-satoshi text-gray-500 bg-gray-50/50 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                available
              </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-1 mb-1 text-gray-600">
              <img src={locationIcon} alt="Location" className="w-4 h-4" />
              <span className="text-md opacity-60 font-satoshi">
                Baguio City, Philippines
              </span> 
            </div>

            <div className="flex w-full max-w-4xl items-center justify-between mb-3">
              <button className="group relative mt-1 pt-1 pb-1 inline-block overflow-hidden text-lg font-semibold text-black/50">
                  <span className="block">Full-Stack Developer / Blockchain Developer</span>
              </button>
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 py-2 border font-satoshi border-blue-400 text-sm rounded-md hover:bg-white hover:text-black transition hover:scale-101 transition-transform duration-200"
              >
                <img src={resumeIcon} alt="Resume" className="w-4 h-4" />
              Download CV
              </a>

              <a
                href="../pages/Message"
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
