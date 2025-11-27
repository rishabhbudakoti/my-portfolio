import React from "react";
import Heading from "./Heading";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-cyan-300 text-xl" />,
      skills: [
        "HTML5 & CSS3",
        "JavaScript",
        "React.js",
        "Redux",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-yellow-300 text-xl" />,
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase className="text-purple-300 text-xl" />,
      skills: ["MongoDB", "MySQL", "Mongoose", "Mongo Atlas"],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools className="text-green-300 text-xl" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Cloud Deployment"],
    },
    {
      title: "Programming Skills",
      icon: <FaLaptopCode className="text-orange-300 text-xl" />,
      skills: ["JavaScript", "Python"],
    },
  ];

  return (
    <section className="py-14 px-4" id="skills">
      <Heading heading="Technical Expertise" />
      <h1 className="text-2xl md:text-4xl w-max mx-auto text-center bg-clip-text  font-bold mt-3 bg-linear-to-r from-yellow-400 to-cyan-400 text-transparent  uppercase tracking-[1px] mb-2">
        Skills & Technologies
      </h1>

      <div className="max-w-300 mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-2 md:px-0">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            style={{ boxShadow: `0px 0px 10px 1px rgba(34,211,238,0.2)` }}
            className={cardClass}
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span key={idx} className={skillClass}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

const cardClass = `p-8 rounded-3xl 
            bg-linear-to-br from-white/6 to-white/2
            backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_30px_rgb(0,0,0,0.15)]
            transition-all duration-200 
            hover:-translate-y-3`;

const skillClass = `
                    px-4 py-1.5 text-sm rounded-full 
                    bg-white/5 text-gray-300 
                    border border-white/10
                    hover:bg-cyan-400/20 
                    hover:text-cyan-300
                    hover:border-cyan-400/30
                    transition-all duration-300
                    shadow-md
                  `;
