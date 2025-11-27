import React from "react";
import mern from "../assets/mern.png";

const Hero = () => {
  const heroData = {
    name: "RISHABH SHARMA",
    heading: "Full-Stack Developer | MERN | REST APIs | AWS",
    description: `Building modern and scalable web applications using MongoDB, Express,
          React, and Node.js. Experienced in frontend UI, backend APIs,
          authentication, and deploying full-stack apps.`,
    links: [
      {
        btnName: "get in touch",
        link: "Contact",
      },
      {
        btnName: "view projects",
        link: "Projects",
      },
      {
        btnName: "download resume",
        link: "Resume",
      },
    ],
  };

  return (
    <section id="home" className="relative">
      <div className="absolute top-0 left-0 leading-0 bg-[linear-gradient(to_bottom,transparent_95%,white_95%),linear-gradient(to_right,transparent_95%,white_95%)] opacity-2 bg-size-[20px_20px] -z-4 w-full h-full"></div>

      <div className="flex flex-col justify-center py-20 md:py-28 lg:py-36 items-center px-4">
        <div className="flex items-center justify-center border text-ternary rounded-full w-20 h-20 md:w-24 md:h-24 mb-6 bg-[rgba(255,255,255,0.05)]">
          <img src={mern} alt="" className="w-14 md:w-18" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-500 via-purple-300 to-yellow-400 mb-4 sm:mb-5 text-center px-2">
          {heroData.name}
        </h1>

        <h2 className="text-lg sm:text-xl md:text-3xl text-secondary mb-4 sm:mb-6 text-center px-3">
          {heroData.heading}
        </h2>

        <p className=" text-lg md:text-xl md:w-240 text-center opacity-40 mb-8 sm:mb-10 px-3">
          {heroData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-3">
          {heroData.links.map((d, i) => {
            return (
              <a href={`#${d.link.toLowerCase()}`}>
                <button
                  key={i}
                  className="border cursor-pointer bg-[rgba(255,255,255,0.05)] border-ternary text-base sm:text-lg text-primary font-semibold w-full sm:w-40 md:w-52 py-3 rounded-4xl capitalize hover:-translate-y-2 transition-all duration-200 hover:shadow-[0px_10px_20px_0px_#5E936C] hover:border-[#5E936C]"
                >
                  {d.btnName}
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
