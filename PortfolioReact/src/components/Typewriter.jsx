import React, { useState, useEffect } from "react";

function Typewriter({ text, speed = 100, delay = 1000 }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text, speed, delay]);

  return <span>{displayText}</span>;
}

export default Typewriter;
