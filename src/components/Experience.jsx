import { motion } from "framer-motion";
import reviewIcon from "../assets/review.png"

export default function Experience() {
  return (
    <section className="mb-4">
      <div className="text-sm border border-black/20 shadow-lg rounded-md p-4 h-102 transition hover:scale-99 transition-transform duration-250">
      <div className="flex items-center gap-2 mb-4">
      <img
        src={reviewIcon}
        alt="Review"
        className="w-4 h-4 opacity-70"
      />
      <h2 className="text-base font-medium">Experience</h2>
      </div>
      <div className="relative pl-10">
        <div className="absolute left-4.5 top-0 h-full w-[1px] bg-black" />

         <span className="absolute left-4.5 top-1 w-3 h-3 rounded-full bg-black border border-black hover:bg-black transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className=" text-sm text-gray-600">2025 – Present</p>
        <h3 className="font-semibold text-base">Freelance Web Developer</h3>
            <p className="mt-1 text-sm">
              Recently taking commissions for custom web apps & sites. specialize in developing responsive sites and applications using a stack of React, Node, and Web3 technologies
            </p>
          <span className="absolute left-4.5 top-28 w-3 h-3 rounded-full bg-black border border-black hover:bg-black transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-gray-600">2023 – Present</p>
        <h3 className="font-semibold text-base">Information Technology Student</h3>
            <p className="mt-1 text-sm">
              Currently pursuing a degree in Information Technology with a focus on web development and emerging technologies.
            </p>
          <span className="absolute left-4.5 top-55 w-3 h-3 rounded-full bg-white border border-black hover:bg-black transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-gray-600">2021 – 2023</p>
        <h3 className="font-semibold text-base">Freelance Creative Designer</h3>
            <p className="mt-1 text-sm">
              I accepted commission-based graphic design projects from students during the pandemic to support their remote academic and digital needs.
            </p>
      </div>
    </div>
    </section>
  );
}
