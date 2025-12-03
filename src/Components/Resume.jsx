import React from "react";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import Heading from "./Heading";

const Resume = () => {
  return (
    <section id="resume" className="relative py-20 px-6 overflow-hidden">
      <Heading heading="Download Resume" />

      <p className="text-center text-gray-300 opacity-70 mt-3 text-lg max-w-2xl mx-auto">
        Download my updated resume to view my experience, skills, and projects
        in detail.
      </p>

      <div
        className="max-w-md mx-auto mt-14 p-8 rounded-3xl relative
        bg-white/5 border border-white/10  overflow-hidden 
        shadow-[0_0_10px_1px_rgba(34,211,238,0.1)]
        flex flex-col items-center gap-6"
      >
        <div className="absolute w-full h-full bg-[linear-gradient(to_bottom,transparent_95%,white_95%),linear-gradient(to_right,transparent_95%,white_95%)] bg-size-[18px_18px] opacity-2 -z-10 top-0 left-0"></div>

        <div
          className="w-20 h-20 rounded-full flex items-center justify-center
          bg-white/10
          border backdrop-blur-md border-cyan-400/30"
        >
          <FaFileAlt className="text-4xl text-amber-300" />
        </div>

        <h3 className="text-xl font-semibold text-white text-center">
          my_Resume.pdf
        </h3>

        <a
          onClick={() => alert("coming soon...")}
          className="mt-2 w-full py-3 flex items-center justify-center gap-3
          rounded-xl text-lg font-semibold text-white cursor-pointer
          bg-white/5 border border-white/10 backdrop-blur-xl
          hover:bg-white/10 transition-all"
        >
          <FaDownload /> Download
        </a>
      </div>
    </section>
  );
};

export default Resume;
