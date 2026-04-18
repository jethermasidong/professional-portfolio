import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Techstack from "./components/Techstack";
import Gallery from "./components/Gallery";
import ActivityHeatmap from "./components/ActivityHeatmap";
import Footer from "./components/Footer"
import './index.css';

import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Hero theme={theme} setTheme={setTheme} />
        <section className="mt-12 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6">
            <Aboutme />
            <Experience />
          </div>

          <div className="w-full lg:w-72 space-y-4">
            <Techstack />
            <Gallery />
          </div>
        </section>

        <Projects />
        <ActivityHeatmap />
        <Footer />
      </main>
    </>
  );
}