import { motion } from "framer-motion";
import blueprintIcon from "../assets/blueprint.png";
import scieneIcon from "../assets/projects/sciene.png";
import nodeIcon from "../assets/projects/nodejs.png";
import ethereumIcon from "../assets/projects/ethereum.png";
import sqlIcon from "../assets/projects/mysql.png";
import solidIcon from "../assets/projects/solid.png";
import phpIcon from "../assets/projects/php.png";
import xamppIcon from "../assets/projects/xampp.png";

const projects = [
  {
    title: "VeriLocal",
    description: "Blockchain Product Verification Strengthening Artisans Brand Integrity and Integrity - This web application is all about helping artisans protect their products from import products.",
    year: "2025-2026",
    image: scieneIcon,
    image1: nodeIcon,
    image2: ethereumIcon,
    image3: sqlIcon,
    image4: solidIcon,
  },
  {
    title: "Primal Services",
    description: "A web-based tutoring system built with PHP and MySQL, featuring user management, scheduling, bookings, and reviews. It is built for online and onsite tutoring service.",
    year: "2025",
    image: phpIcon,
    image1: sqlIcon,
    image2: xamppIcon,
  },
  {
    title: "Coming Soon",
    description: "New project currently in progress.",
    year: "2025-2026"
  },
];

export default function Projects() {
  return (
    <section className="mt-1">
      <div className="border border-black/20 shadow-lg rounded-md p-6 hover:scale-[0.99] transition-transform duration-200">
        <div className="flex items-center gap-2 mb-6">
          <img src={blueprintIcon} alt="Projects" className="w-4 h-4 opacity-70" />
          <h2 className="text-base font-medium">Projects</h2>
          <button type="button" onClick={() => window.open("https://github.com/jethermasidong", "_blank")} class="ml-auto text-right text-sm">
            View More
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="border border-black/20 rounded-md p-4 bg-white hover:shadow-md transition"
            >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <h4 className="font-light text-xs border border-black/20 shadow-sm rounded-md px-2 py-0.5">
                {project.year}
              </h4>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              {project.description}
            </p>     
            <div className="flex items-center gap-2 mt-auto pt-4">
              {[project.image, project.image1, project.image2, project.image3, project.image4].map((img, index) => (
                img && (
                  <div key={index} className="w-5 h-5 flex-shrink-1">
                    <img 
                      src={img} 
                      alt={`${project.title} icon ${index}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )
              ))}
            </div>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
