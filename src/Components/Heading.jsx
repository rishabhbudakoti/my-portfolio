import React from "react";

const Heading = (props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 ">
        <span className="w-6 md:w-10 h-0.5 bg-primary "></span>
        <div>
          <h1 className="text-[20px] md:text-2xl :tracking-[1px] uppercase border font-bold border-ternary text-white w-max px-8 text-center py-2   bg-[rgba(255,255,255,0.05)]">
            {props.heading}
          </h1>
        </div>
        <span className="w-6  md:w-10 h-0.5 bg-primary "></span>
      </div>
    </>
  );
};

export default Heading;
