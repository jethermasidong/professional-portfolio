import techIcon from "../assets/technology.png";

const techStack = {
  Frontend: ["React", "Tailwind CSS", "Next.js", "HTML", "CSS", "Javascript", "Typescript"],
  Backend: ["Node.js", "Express", "REST API", "PHP", "Laravel", "Python"],
  Database: ["MySQL", "SQLite", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Figma", "Postman", "Canva", "Microsoft Tools", "Visual Studio Code"],
};

export default function Techstack() {
  return (
    <div className="border border-black/5 shadow-lg rounded-md p-6">
      
      <div className="flex items-center gap-2 mb-4">
        <img src={techIcon} alt="Tech" className="w-4 h-4 opacity-70" />
        <h3 className="text-base font-medium">Tech Stack</h3>
      </div>
      <div className="space-y-4">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-bold uppercase text-black mb-2">
              {category}
            </h4>

            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-black rounded-full text-xs hover:text-white hover:bg-black transition hover:scale-105 transition-transform duration-300"
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
