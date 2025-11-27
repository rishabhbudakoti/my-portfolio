import React from "react";
import Heading from "./Heading";
import EducationCard from "./EducationCard";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science & Engineering",
      institute: "Dev Bhoomi Uttarakhand University - Dehradun",
      year: "2021 - 2025",
      status: "Completed",
      variant: "cyan",
    },
    {
      title: "PCM - Computer Science",
      institute: "DAV Ispat Sr. Sec. Public School - CBSE",
      year: "2017 - 2019",
      status: "Completed",
      variant: "yellow",
    },
  ];

  return (
    <div className="py-14 bg-black/10" id="education">
      <Heading heading={"Education"} />

      <div className="max-w-300 px-4 mx-auto flex flex-col  md:flex-row justify-center gap-8 items-center mt-20">
        <EducationCard
          year={educationData[0].year}
          institute={educationData[0].institute}
          status={educationData[0].status}
          title={educationData[0].title}
          variant={educationData[0].variant}
        />

        <div className="hidden lg:block">
          <div className="relative flex flex-col items-center">
            <span className="w-4 h-4 animate-pulse rounded-full bg-cyan-400 blur-[2px] shadow-[0_0_40px_8px_#22d3ee] absolute -top-2"></span>
            <div className="w-1 h-96 bg-linear-to-b from-cyan-400 to-yellow-400 rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.2)]"></div>
            <span className="w-4 h-4 animate-pulse rounded-full bg-yellow-400 blur-[2px] shadow-[0_0_40px_8px_#facc15] absolute -bottom-2"></span>
          </div>
        </div>

        <EducationCard
          year={educationData[1].year}
          institute={educationData[1].institute}
          status={educationData[1].status}
          title={educationData[1].title}
          variant={educationData[1].variant}
        />
      </div>
    </div>
  );
};

export default Education;
