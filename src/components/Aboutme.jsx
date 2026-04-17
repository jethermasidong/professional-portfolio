import infoIcon from "../assets/info.png";

export default function Aboutme() {
  return (
    <section className="mb-4">
      <div className="border border-black/5 shadow-lg rounded-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <img
            src={infoIcon}
            alt="Info"
            className="w-4 h-4 opacity-70"
          />
          <h2 className="text-base font-medium">About Me</h2>
        </div>

        <p className="text-sm leading-relaxed mb-4">
          I am a Full-Stack Developer with experience building web applications,
          APIs, and scalable systems. I am currently a third-year Information
          Technology student majoring in Web Development at the University of
          the Cordilleras.
        </p>

        <p className="text-sm leading-relaxed mb-4">
          I am currently working with my groupmates on our capstone project,
          which focuses on strengthening brand integrity and identity through
          product verification using blockchain technology.
        </p>

        <p className="text-sm leading-relaxed">
          At present, I am learning more about emerging technologies such as
          blockchain (Web3) and artificial intelligence (AI). I am particularly
          interested in these fields because I want to expand my technical
          skills and explore innovative solutions for real-world problems.
        </p>

      </div>
    </section>
  );
}
