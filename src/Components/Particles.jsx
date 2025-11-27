import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    let particles = document.querySelectorAll(".particle");
    particles.forEach((item) => {
      const move = () => {
        const x = Math.random() * window.innerWidth * 2 - window.innerWidth;
        const y = Math.random() * window.innerHeight * 2 - window.innerHeight;

        item.style.transform = `translate(${x}px, ${y}px)`;

        setTimeout(move, 3000 + Math.random() * 3000);
      };
      move();
    });
  });

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-9">
      {[...Array(20)].map((d, i) => (
        <div
          key={i}
          className={`particle transition-all duration-5000 ease-linear absolute w-2 h-2 rounded-full opacity-30 blur-sm ${
            i % 2 == 0 ? "bg-white" : "bg-amber-300"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Particles;
