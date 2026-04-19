import techIcon from "../assets/technology.png";

const techStack = {
  Frontend: ["React", "Tailwind CSS", "Next.js", "HTML", "CSS", "Javascript", "Typescript"],
  Backend: ["Node.js", "Express", "REST API", "PHP", "Laravel", "Python"],
  Database: ["MySQL", "SQLite", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Figma", "Postman", "Canva", "Microsoft Tools", "Visual Studio Code"],
};

export default function Techstack() {
  return (
    <div className="border border-[var(--comborder)] shadow-lg rounded-md p-6 mb-5">
      
      <div className="flex items-center gap-1 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
        <h3 className="text-base font-satoshi font-bold">Tech Stack</h3>
      </div>
      <div className="space-y-4">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-bold text-[var(--text)] mb-2">
              {category}
            </h4>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-[var(--techstackborder)] rounded-full text-xs hover:text-white hover:bg-black transition hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
