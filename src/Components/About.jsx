import React from "react";
import Heading from "./Heading";

const About = () => {
  const aboutData = [
    "I am Rishabh Sharma, a MERN Stack Developer with strong expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I hold a Bachelor of Technology in Computer Science from Dev Bhoomi Uttarakhand University, graduating in July 2025.",

    "My development experience includes designing and developing responsive, high-performance, and secure web applications. I specialize in creating seamless frontend interfaces with React, efficient backend APIs with Node and Express, and fully structured databases using MongoDB. I have a solid understanding of REST APIs, authentication, authorization, JWT, cookies, and scalable backend architecture.",

    "I am skilled in integrating modern frontend tools such as Redux Toolkit, React Router, Tailwind CSS, and Context API, while maintaining optimized and maintainable code structures. On the backend side, I work with Node.js, Express, Mongoose, and cloud-based deployments using services like Render, Vercel, Netlify, and AWS.",

    "Along with JavaScript and the MERN stack, I have additional experience in HTML, CSS, Git/GitHub, Linux, and working with external services like Cloudinary, JWT Authentication, and payment gateways. I am passionate about building real-world projects, solving problems with clean code, and continuously improving my full-stack development skills to create impactful digital experiences.",
  ];

  return (
    <section id="about" className="py-14 bg-black/10">
      <div className="flex items-center justify-center flex-col">
        <Heading heading={"about me"} />
        <h1 className="text-4xl font-bold mt-3 bg-clip-text text-transparent bg-linear-to-r from-yellow-500 to-cyan-400  uppercase tracking-[1px] mb-2">
          Professional Profile
        </h1>
        <p className="text-sm md:text-md opacity-40 tracking-[1px] text-center px-2">
          Building modern, scalable web applications with clean code and
          powerful user experiences
        </p>

        <div className="max-w-300 mt-10 px-6 md:px-0">
          <div className="relative px-6 border-l text-justify py-3 border-white/10">
            {aboutData.map((d, i) => {
              return (
                <p
                  key={i}
                  className="text-[15px] leading-7 text-white/75 mb-5 hover:text-white transition-all duration-300"
                >
                  {d}
                </p>
              );
            })}

            <div className="absolute inset-0 -z-8 bg-linear-to-r from-cyan-500/5 to-yellow-500/5 opacity-90 blur-sm "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
