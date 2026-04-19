import { motion } from "framer-motion";
import reviewIcon from "../assets/review.png"

export default function Experience() {
  return (
    <section className="mb-4">
      <div className="border border-[var(--comborder)] shadow-lg rounded-md p-6">
      <div className="flex items-center gap-1 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
      <h2 className="text-base font-satoshi font-bold">Experience</h2>
      </div>
      <div className="relative pl-10">
        <div className="absolute left-4.5 top-0 h-full w-[1px] bg-[var(--experienceline)]" />

         <span className="absolute left-4.5 top-1 w-3 h-3 rounded-full bg-blue-500 border border-blue-500 hover:bg-blue-500 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className=" text-sm text-[var(--text)] border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-[var(--experiencecard)]">2025 – Present</p>
        <h3 className="font-semibold text-base">Freelance Web Developer</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              Recently taking commissions for custom web apps & sites. specialize in developing responsive sites and applications using a stack of React, Node, and Web3 technologies
            </p>
          <span className="absolute left-4.5 top-31 w-3 h-3 rounded-full bg-blue-500 border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-[var(--text)] border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-[var(--experiencecard)]">2023 – Present</p>
        <h3 className="font-semibold text-base">Information Technology Student</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              Currently pursuing a degree of Information Technology in University of the Cordilleras.
            </p>
          <span className="absolute left-4.5 top-55 w-3 h-3 rounded-full bg-white border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-[var(--text)] border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-[var(--experiencecard)]">2023</p>
        <h3 className="font-semibold text-base">The Starting Block</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              My first "Hello World!".
            </p>
        <span className="absolute left-4.5 top-80 w-3 h-3 rounded-full bg-white border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-[var(--text)] border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-[var(--experiencecard)]">2021</p>
        <h3 className="font-semibold text-base">Freelance Creative Designer</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              I accepted commission-based graphic design projects from students during the pandemic to support their remote academic and digital needs.
            </p>
      </div>
    </div>
    </section>
  );
}
