import React from "react";
import heroImage from "../assets/hero-bg.jpg";
import Typewriter from "./Typewriter";
import ParticlesCanvas from "./ParticlesCanvas";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* ✅ Background image as a div */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      ></div>

      {/* ✅ Particles on top of background but under content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ParticlesCanvas />
      </div>

      {/* ✅ Dark overlay on top of particles */}
      <div className="absolute inset-0 bg-black/60  z-20" />

      {/* ✅ Main Content on top */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          I Am{" "}
          <span className="text-orange-500">
            <Typewriter
              texts={[
                "Irteja Mahmud",
                "Web Developer",
                "Data Analyst",
                "Web Designer",
              ]}
              speed={100}
              delay={1500}
            />
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
