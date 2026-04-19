import { motion } from "framer-motion";

const nodeIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
    <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
  </svg>
);

const scieneIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
    <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
    <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
    <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
    <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
    <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
    <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732" />
  </svg>
);

const ethereumIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 12l6 -9l6 9l-6 9l-6 -9" />
    <path d="M6 12l6 -3l6 3l-6 2l-6 -2" />
  </svg>
);

const sqlIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
    <path d="M9 7h.01" />
  </svg>
);

const phpIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
    <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
    <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
    <path d="M12 7.5l-1 5.5" />
    <path d="M11.6 10h2.4l-.5 3" />
  </svg>
);

const solidIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
    <path d="M12 12l8 -4.5" />
    <path d="M12 12l0 9" />
    <path d="M12 12l-8 -4.5" />
  </svg>
);

const xamppIcon = (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 9l3 3l-3 3" />
    <path d="M13 15l3 0" />
    <path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" />
  </svg>
);

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
    image1:   nodeIcon,
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
        <div className="flex items-center gap-1 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>
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
                    {typeof img === "string" ? (
                      <img
                        src={img}
                        alt={`${project.title} icon ${index}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      img
                    )}
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
