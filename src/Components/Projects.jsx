import React from "react";
import Heading from "./Heading";

const projects = [
  {
    title: "QuickDeal – MERN Ecommerce Website",
    description:
      "A full‑stack MERN Ecommerce platform where users can create accounts, purchase products, track orders, update profile details, give reviews, and contact support. Includes advanced filtering by category, sub‑category, ratings, and price along with multiple sorting options. Built using React, Node, Express, and MongoDB. Comes with a powerful Admin Panel to manage users, products, revenue, reviews, contact messages, and roles.",
    tech: ["React", "JWT", "Node", "MongoDB", "Express"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, aesthetic, and completely responsive personal portfolio built using React, Tailwind CSS, and Framer Motion. Designed with smooth animations, glass‑morphism UI elements, interactive sections, and a beautiful project showcase. Highlights skills, experience, education, and projects with elegant visuals and creative layout.",
    tech: ["React", "Tailwind", "gsap"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-14 px-6 md:px-20">
      <Heading heading={"Projects"} />

      <div className="max-w-300 mx-auto grid md:grid-cols-2 gap-10 mt-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 shadow-[0_0_10px_1px_rgba(34,211,238,0.3)] rounded-3xl bg-white/5  border border-white/10  hover:border-[rgba(34,211,238,0.6)]  transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-white/70 text-justify leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
