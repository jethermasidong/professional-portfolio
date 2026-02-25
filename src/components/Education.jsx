import { motion } from "framer-motion";
import blueprintIcon from "../assets/blueprint.png";
import educationIcon from "../assets/education/graduation-cap.png"
import phpIcon from "../assets/projects/php.png";


const school = [
  {
    education: "Baguio City National High School",
    description: "Junior High School",
    year: "2025-2026",

  },
  {
    education: "AMA Computer College Baguio City",
    description: "Senior High School",
    year: "2025",
  },
  {
    education: "University of the Cordilleras",
    description: "Bachelor of Science in Information Technology",
    year: "2025-2026"
  },
];

export default function Schools() {
  return (
    <section className="mt-5">
      <div className="border border-black/20 shadow-lg rounded-md p-6 hover:scale-[0.99] transition-transform duration-200">
        <div className="flex items-center gap-2 mb-6">
          <img src={educationIcon} alt="Education" className="w-4 h-4 opacity-70" />
          <h2 className="text-base font-medium">Education</h2>
          <button type="button" onClick={() => window.open("https://github.com/jethermasidong", "_blank")} class="ml-auto text-right text-sm">
            View More
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {school.map((school, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="border border-black/20 rounded-md p-4 bg-white hover:shadow-md transition"
            >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-sm">{school.education}</h3>
              <h4 className="font-light text-xs border border-black/20 shadow-sm rounded-md px-2 py-0.5">
                {school.year}
              </h4>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              {school.description}
            </p>     
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
