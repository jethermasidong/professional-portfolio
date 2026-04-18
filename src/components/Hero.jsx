import { motion } from "framer-motion";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import profileHover from "../assets/profile-hover.jpg";
import locationIcon from "../assets/location-icon.png"; 
import resumeIcon from "../assets/resume.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";

export default function Hero({theme, setTheme}) {
  const [hovered, setHovered] = useState(false);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <motion.img
          src={hovered ? profileHover : profile}
          alt="Jether Masidong"
          className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-md cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />

        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-between w-full flex-col sm:flex-row gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h1 className="text-2xl font-satoshi font-bold text-[var(--text)]">
                Jether Masidong
              </h1>
              <span className="flex items-center gap-2 border mt-2 sm:mt-0 border-[var(--border)] rounded-full text-[12px] py-1 px-3 font-satoshi text-[var(--muted)] bg-[var(--card)] w-fit mx-auto sm:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                available
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 mb-1 text-[var(--muted)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-md opacity-60 font-satoshi">
              Baguio City, Philippines
            </span> 
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-4xl gap-3 mb-3">
            <button className="group relative mt-1 pt-1 pb-1 inline-block overflow-hidden text-lg font-semibold text-black/50">
              <span className="block text-[var(--text)]">
                Full-Stack Developer / Blockchain Developer
              </span>
            </button>

            <button
              onClick={handleThemeSwitch}
              className="relative w-14 h-8 flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-1 transition mx-auto sm:mx-0"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[var(--togglebuttonbg)] shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              >
                <span className="text-xs">
                  {theme === "dark" ? "⏾" : "☀︎"}
                </span>
              </div>
            </button>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
            <a
              href="/CV.pdf"
              download="Jether_Masidong_CV.pdf"
              className="flex items-center gap-1 px-4 py-2 border border-[var(--accent)] text-sm rounded-md bg-[var(--card)] text-[var(--text)] hover:scale-105 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Download CV
            </a>

            <a
              href="mailto:jethermasidong05@gmail.com?subject=Inquiry from Portfolio"
              className="flex items-center gap-2 px-4 py-2 border border-[var(--accent)] bg-[var(--card)] text-sm rounded-md text-[var(--text)] hover:bg-[var(--accent1)] hover:text-white transition"
            >
              Send Email
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>

            <a
              href="https://facebook.com/jetherjetmasidong"
              target="_blank"
              className="p-3 border border-blue-300 rounded-full transition hover:scale-105"
            >
              <svg className="w-3 h-3 text-[var(--text)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
              </svg>
            </a> 

            <a
              href="https://github.com/jethermasidong"
              target="_blank"
              className="p-3 border border-blue-300 rounded-full transition hover:scale-105"
            >
              <svg className="w-3 h-3 text-[var(--text)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}