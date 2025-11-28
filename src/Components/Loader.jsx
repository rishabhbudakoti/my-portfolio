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
      { scale: 1, opacity: 1 },
      { scale: 0.6, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .to(logoRef.current, {
        scale: 2.8,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        scale: 0,
        rotate: 720,
        duration: 0.2,
        ease: "power2.in",
      })

      .to(flashRef.current, {
        opacity: 1,
        duration: 0.15,
        ease: "power1.inOut",
      })
      .to(flashRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-black">
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-800"></div>
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none"
      ></div>

      <img ref={logoRef} src={logo} alt="logo" className="w-32 relative z-10" />
    </div>
  );
};

export default Loader;
