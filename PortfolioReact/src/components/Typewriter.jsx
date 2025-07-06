import React, { useEffect, useState } from "react";

const Typewriter = ({ texts = [], speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // Finished typing
          timeout = setTimeout(() => setIsDeleting(true), delay);
        } else {
          // Finished deleting
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, currentTextIndex, speed, delay]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
