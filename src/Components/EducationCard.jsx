import React from "react";

const EducationCard = ({ title, year, status, institute, variant }) => {
  return (
    <>
      <div
        className={` w-[350px] md:w-[520px] h-[280px] md:h-[220px] py-6 px-8 rounded-2xl 
            bg-white/5 flex flex-col justify-center border ${
              variant === "cyan"
                ? "shadow-[0_0_10px_8px_rgba(34,211,238,0.1)]"
                : "shadow-[0_0_10px_8px_rgba(250,204,21,0.1)]"
            }`}
      >
        <h1 className="text-2xl font-semibold leading-snug">{title}</h1>

        <p className="mt-5 tracking-[0.5px] text-[15px] opacity-70">
          {institute}
        </p>

        <p className="mt-2 tracking-[0.8px] text-lg font-semibold text-yellow-400">
          {year} - {status}
        </p>
      </div>
    </>
  );
};

export default EducationCard;
