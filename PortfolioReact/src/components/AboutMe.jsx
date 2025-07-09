import React from "react";
import profileImg from "../assets/profile.png"; // Replace with actual image
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-black  py-20 px-4 md:px-20 pd-30 text-white relative"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Column (Image + Cards) */}
        <div className="relative flex items-center  justify-center">
          {/* Background Glow */}
          <div className="absolute w-72 h-72 bg-gradient-to-t from-orange-600 to-transparent blur-3xl rounded-full -z-10 left-0 top-0 opacity-20" />

          {/* Main Image */}
          <img
            src={profileImg}
            alt="Jewel Rana"
            className="w-72 h-96 object-cover rounded-2xl shadow-2xl"
          />

          {/* Floating Card - Blue */}
          <div className="absolute -mt-2 mr-5 right-0 w-60 bg-[#132238] p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <FaUser />
              <span>
                Team Excelle<span className="animate-pulse">|</span>
              </span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-40 bg-blue-500 rounded" />
              <div className="h-2 w-48 bg-blue-400/60 rounded" />
              <div className="h-2 w-32 bg-blue-300/50 rounded" />
            </div>
          </div>

          {/* Info Card - Left */}
          <div className="absolute bottom-[-70px] pr-10 left-0 w-80 bg-[#121212] p-5 rounded-xl shadow-md">
            <h3 className="text-lg font-bold">
              <span className="text-white">JEWEL</span>{" "}
              <span className="text-orange-500">RANA</span>
            </h3>
            <p className="text-gray-400 text-sm">Strategy Consultant</p>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              My vision is to create a 1-million-employee company that not only
              drives innovation but also touches lives deeply. I believe in
              building a future where respect, wisdom, and community take
              precedence over mere financial transactions.
            </p>
          </div>

          {/* Info Card - Right */}
          <div className="absolute bottom-[-70px] right-0 w-80 bg-[#1A1A1A] p-5 rounded-xl shadow-md">
            {/* Colored Dots */}
            <div className="flex space-x-2 mb-3">
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="w-3 h-3 bg-purple-400 rounded-full" />
              <span className="w-3 h-3 bg-pink-400 rounded-full" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              My journey began in sales training, where I discovered the power
              of human connection and the art of unlocking potential. Over the
              years, I’ve evolved into a visionary leader, leveraging AI-powered
              business solutions to revolutionize industries and empower
              individuals.
            </p>
          </div>
        </div>

        {/* ✅ Right Column (Text & Bullets) */}
        <div className="mt-16 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ABOUT <span className="text-orange-500">ME</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            My superpower is people. I see potential, nurture it, and transform
            it into excellence
          </p>

          <div className="border-l-4 border-orange-500 pl-6 space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1" />
              <p>
                Journey from sales training to AI-powered business solutions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1" />
              <p>
                Vision of creating a 1-million-employee company and touching
                lives deeply.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-orange-400 mt-1" />
              <p>
                Philosophy: Respect, wisdom, and community over financial
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
