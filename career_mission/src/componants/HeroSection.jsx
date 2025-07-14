import React from "react";
import "./HeroSection.css";
import HeroImg from "../assets/hero-img.svg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img
          src={HeroImg}
          alt="Developer Illustration"
          className="hero-image"
        />
        <h2 className="hero-title">"In 2025, I hope to become a Developer."</h2>
        <p className="hero-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <button className="hero-btn">Let's Connect</button>
      </div>
    </section>
  );
}
