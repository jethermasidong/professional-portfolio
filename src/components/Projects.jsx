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
    status: {
      label: "Active",
      link: "https://theverilocal.online"
    },
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
    status: {
      label: "Inactive",
      link: "https://github.com/jethermasidong/Tutoring-Service-System"
    },
    image: phpIcon,
    image1: sqlIcon,
    image2: xamppIcon,
  },
  {
    title: "ProtekBoto",
    description: "A web platform built for secure barangay elections. We ensure secured voting through decentralized encryption, making local democracy more transparent and accessible.",
    year: "2026-Current",
    status: {
      label: "Ongoing",
      link: "https://github.com/jethermasidong/onchain-voting-system"
    },
    image: scieneIcon,
    image1: nodeIcon,
    image2: ethereumIcon,
    image3: solidIcon,
  },
];

const statusStyles = {
  Active: {
    base: "border-green-400 text-green-700",
    hover: "hover:bg-green-500 hover:text-white",
  },
  Inactive: {
    base: "border-red-400 text-red-700",
    hover: "hover:bg-red-500 hover:text-white",
  },
  Ongoing: {
    base: "border-yellow-400 text-yellow-700",
    hover: "hover:bg-yellow-500 hover:text-white",
  },
};

export default function Projects() {
  return (
    <section className="mt-1 mb-6">
      <div className="border border-[var(--comborder)] shadow-lg rounded-md p-6">
        <div className="flex items-center gap-2 mb-6">
          <img src={blueprintIcon} alt="Projects" className="w-4 h-4 opacity-70" />
          <h2 className="text-base font-satoshi font-bold">Projects</h2>
          <a type="button" onClick={() => window.open("https://github.com/jethermasidong", "_blank")} class="flex items-center gap-1 ml-auto text-right text-xs pl-1 pr-1 pt-1 pb-1 border border-black/20 hover:text-white hover:bg-black transition hover:scale-105 pl-1.5 pr-1.5 rounded-lg cursor-pointer">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="border border-[var(--projectborder)] rounded-md p-4 h-full bg-[var(--projectcard)] hover:shadow-md hover:bg-[var(--projecthover)] transition duration-75"
            >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-sm text-[var(--projecttitle)]">{project.title}</h3>
              <h4 className="font-light text-xs border border-[var(--projectborder)] shadow-sm rounded-md px-2 py-0.5">
                {project.year}
              </h4>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              {project.description}
            </p>
            <div className="mt-auto pt-6 flex justify-between gap-4">
              <div className="flex items-center gap-2 pt-4">
              {[project.image, project.image1, project.image2, project.image3, project.image4].map((img, index) => (
                img && (
                  <div key={index} className="w-5 h-5 shrink">
                    <img 
                      src={img} 
                      alt={`${project.title} icon ${index}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )
              ))}
            </div>
              <a  href={project.status.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-light text-xs border border-black/20 pt-2 shadow-sm rounded-md px-3 py-0.5 hover:text-white transition hover:scale-105 cursor-pointer
                    ${statusStyles[project.status.label]?.base}
                    ${statusStyles[project.status.label]?.hover}
                  `}
              >
                {project.status.label}  
              </a>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
