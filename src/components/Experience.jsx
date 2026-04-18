import { motion } from "framer-motion";
import reviewIcon from "../assets/review.png"

export default function Experience() {
  return (
    <section className="mb-4">
      <div className="border border-black/5 shadow-lg rounded-md p-6">
      <div className="flex items-center gap-2 mb-4">
      <img
        src={reviewIcon}
        alt="Review"
        className="w-4 h-4 opacity-70"
      />
      <h2 className="text-base font-satoshi font-bold">Experience</h2>
      </div>
      <div className="relative pl-10">
        <div className="absolute left-4.5 top-0 h-full w-[1px] bg-black" />

         <span className="absolute left-4.5 top-1 w-3 h-3 rounded-full bg-blue-500 border border-blue-500 hover:bg-blue-500 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className=" text-sm text-gray-600 border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-blue-200">2025 – Present</p>
        <h3 className="font-semibold text-base">Freelance Web Developer</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              Recently taking commissions for custom web apps & sites. specialize in developing responsive sites and applications using a stack of React, Node, and Web3 technologies
            </p>
          <span className="absolute left-4.5 top-31 w-3 h-3 rounded-full bg-blue-500 border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-gray-600 border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-blue-200">2023 – Present</p>
        <h3 className="font-semibold text-base">Information Technology Student</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              Currently pursuing a degree of Information Technology in University of the Cordilleras.
            </p>
          <span className="absolute left-4.5 top-55 w-3 h-3 rounded-full bg-white border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-gray-600 border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-blue-200">2023</p>
        <h3 className="font-semibold text-base">The Starting Block</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              My first "Hello World!".
            </p>
        <span className="absolute left-4.5 top-80 w-3 h-3 rounded-full bg-white border border-blue-500 hover:bg-blue-600 transition hover:scale-110 transition-transform duration-300 -translate-x-1/2" />
        <p className="mt-5 text-sm text-gray-600 border border-blue-500 px-3 w-fit rounded-xl mb-2 bg-blue-200">2021</p>
        <h3 className="font-semibold text-base">Freelance Creative Designer</h3>
            <p className="mt-1 text-sm font-satoshi opacity-80">
              I accepted commission-based graphic design projects from students during the pandemic to support their remote academic and digital needs.
            </p>
      </div>
    </div>
    </section>
  );
}
