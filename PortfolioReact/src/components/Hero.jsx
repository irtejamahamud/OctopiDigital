import React from "react";
import heroImage from "../assets/hero-bg.jpg"; // optional: your background image
import Typewriter from "./Typewriter";

const Hero = () => {
  const name = "Irteja Mahmud";
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          I Am{" "}
          <span className="text-orange-500">
            <Typewriter text="Irteja Mahmud" speed={100} delay={1500} />
          </span>
        </h1>

        <div className="flex gap-6">
          <a
            href="#portfolio"
            className="px-6 py-2 border border-orange-500 text-white rounded-full hover:bg-orange-500 transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-orange-500 text-white rounded-full hover:bg-orange-500 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
