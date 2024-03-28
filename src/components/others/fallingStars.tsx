import { useEffect, useState } from "react";

interface Star {
  left: string;
  size: number;
  duration: number;
}

const FallingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  const createStar = () => {
    const star = {
      left: Math.random() * window.innerWidth + "px",
      size: Math.random() * 12,
      duration: Math.random() * 3,
    };
    setStars((prevStars) => [...prevStars, star]);

    // Remove the star after 5 seconds
    setTimeout(() => {
      setStars((prevStars) => prevStars.filter((s) => s !== star));
    }, 5000);
  };

  // Create stars at regular intervals
  useEffect(() => {
    const intervalId = setInterval(createStar, 50);
    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, []);

  return (
    <div className="relative h-10">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute top-[-20px] animate-falling-star h-auto"
          style={{
            left: star.left,
            fontSize: star.size + "px",
            animationDuration: 2 + star.duration + "s",
          }}
        >
          *
        </div>
      ))}
    </div>
  );
};

export default FallingStars;
