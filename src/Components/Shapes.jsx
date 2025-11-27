import React from "react";

const Shapes = () => {
  return (
    <div>
      {[1, 2].map((item, index) => {
        return (
          <div
            key={index}
            className={`fixed overflow-hidden ${
              item === 1
                ? "top-32 left-32 w-72 h-72"
                : "top-100 right-32 w-98 h-98"
            } rounded-full bg-[rgba(255,255,255,0.2)] opacity-5 -z-10  blur-md shadow-[0_0_40px_10px_rgba(255,255,255,0.1)]`}
          ></div>
        );
      })}
    </div>
  );
};

export default Shapes;
