import React from "react";
import "./SkillsSection.css"; // ← import the CSS
import {
  SiAdobecreativecloud,
  SiOpenai,
  SiSlack,
  SiNotion,
} from "react-icons/si";
import { FaBolt } from "react-icons/fa";

const SkillsSection = () => {
  const SIZE = 600;
  const CENTER = SIZE / 2;
  const OUTER_R = 260;
  const INNER_R = 190;

  const icons = [
    { icon: <SiAdobecreativecloud />, r: OUTER_R, angle: -60 },
    { icon: <SiOpenai />, r: INNER_R, angle: -140 },
    { icon: <SiSlack />, r: INNER_R, angle: -100 },
    { icon: <SiNotion />, r: OUTER_R, angle: 40 },
    { icon: <FaBolt />, r: OUTER_R, angle: 120 },
  ];

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-20 overflow-hidden"
    >
      {/* ➰ Static circles */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <svg width={SIZE} height={SIZE}>
          <circle
            cx={CENTER}
            cy={CENTER}
            r={OUTER_R}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r={INNER_R}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* 🔤 Heading & copy */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Power Up</h2>
        <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Your Businessflow
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Boost your productivity by integrating our software with the tools you
          already use. Our robust set of integrations ensures that you can work
          seamlessly across multiple platforms, eliminating data silos and
          increasing efficiency.
        </p>
      </div>

      {/* 🌐 Rotating icon wrapper */}
      <div
        className="relative z-10 mx-auto mt-12 spin"
        style={{ width: SIZE, height: SIZE }}
      >
        {icons.map(({ icon, r, angle }, idx) => {
          const rad = (angle * Math.PI) / 180;
          const x = CENTER + r * Math.cos(rad);
          const y = CENTER + r * Math.sin(rad);

          return (
            <div
              key={idx}
              className="absolute flex items-center justify-center bg-black border border-gray-700 rounded-full text-white text-2xl"
              style={{
                width: 48,
                height: 48,
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
