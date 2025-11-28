import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  const logoRef = useRef(null);
  const flashRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { scale: 1, filter: "drop-shadow(0 0 0px transparent)" },
      {
        scale: 0.7,
        duration: 0.7,
        ease: "power3.out",
      }
    )
      .to(logoRef.current, {
        scale: 2.4,
        filter: "drop-shadow(0 0 12px white)",
        duration: 0.35,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        scale: 0,
        rotate: 650,
        filter: "drop-shadow(0 0 120px white)",
        duration: 0.25,
        ease: "power2.in",
      })
      .to(
        flashRef.current,
        {
          opacity: 0.4,
          duration: 0.1,
          ease: "power1.inOut",
        },
        "-=0.05"
      )
      .to(flashRef.current, {
        opacity: 0,
        duration: 0.15,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]"></div>
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none"
      ></div>
      <img ref={logoRef} src={logo} alt="logo" className="w-32 z-10" />
    </div>
  );
};

export default Loader;
