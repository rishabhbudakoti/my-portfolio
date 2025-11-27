import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const menus = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
    "Resume",
    "Contact",
  ];

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  };

  return (
    <nav
      className={`sticky w-full z-10 top-0 left-0 transition-all duration-75 ease-in ${
        visible ? "bg-[#1a1a1a] shadow-[0px_0px_12px_1px_#253900]" : ""
      }`}
    >
      <div className="max-w-352 mx-auto flex justify-between items-center py-5 text-white px-3">
        <h1
          onClick={moveTop}
          className="text-2xl cursor-pointer font-bold uppercase tracking-[1px] bg-linear-to-r from-green-500 via-purple-300 to-yellow-400 bg-clip-text text-transparent"
        >
          <span>{"<"}</span>
          Rishabh Sharma
          <span>{" />"}</span>
        </h1>

        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`transition-all duration-300  ${
              open ? "rotate-180" : "rotate-0"
            } `}
          >
            {open ? <IoIosClose size={34} /> : <GiHamburgerMenu size={26} />}
          </div>
        </div>

        <ul className="hidden lg:flex gap-14">
          {menus.map((m, i) => {
            return (
              <li key={i}>
                <a
                  href={m === "Home" ? "#" : `#${m.toLowerCase()}`}
                  className="text-white uppercase font-semibold text-[17px] group relative"
                >
                  {m}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-green-500 via-purple-300 to-yellow-400 transition-all duration-300 group-hover:w-full "></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`lg:hidden flex flex-col bg-[#1a1a1a]/95 text-white 
    transition-transform duration-500 overflow-hidden backdrop-blur-sm
    ${
      open
        ? "max-h-max py-4 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }
  `}
      >
        {menus.map((m, i) => (
          <a
            key={i}
            href={m === "Home" ? "#" : `#${m.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="px-6 py-3 uppercase text-center font-semibold border-b border-white/10
                 tracking-wide transition-all duration-300
                 hover:bg-white/10  hover:scale-[0.92]"
          >
            {m}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
