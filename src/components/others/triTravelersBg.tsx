"use client";

import React, { useEffect, useState } from "react";

function Tri({ delay }: { delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomColor = `hsla(${randomHue}, 100%, 50%, 1)`;
    setRandomColor(randomColor);

    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`tri ${isVisible ? "visible" : ""}`}
      style={{
        borderColor: randomColor,
      }}
    />
  );
}

function TriTravellersBg() {
  const totalTriangles = 200;
  const animationDuration = 10; // seconds
  const delayIncrement = animationDuration / totalTriangles;

  return (
    <div className="wrap">
      {[...Array(totalTriangles)].map((_, index) => (
        <Tri key={index} delay={index * delayIncrement * 1000} />
      ))}
    </div>
  );
}

export default TriTravellersBg;
