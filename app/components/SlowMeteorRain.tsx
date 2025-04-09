"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Meteor {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const SlowMeteorRain = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Generate initial meteors
    const generateMeteors = () => {
      const newMeteors: Meteor[] = [];
      for (let i = 0; i < 12; i++) { // Increased number of meteors
        newMeteors.push({
          id: i,
          x: Math.random() * 100, // Random starting position
          y: -20, // Start above the viewport
          size: Math.random() * 4 + 3, // Slightly larger meteors (3-7)
          duration: Math.random() * 12 + 15, // Longer duration (15-27 seconds)
          delay: Math.random() * 15, // Longer delay (0-15 seconds)
        });
      }
      setMeteors(newMeteors);
    };

    generateMeteors();

    // Regenerate meteors every 30 seconds
    const interval = setInterval(generateMeteors, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-transparent rounded-full shadow-lg"
          style={{
            width: meteor.size * 2, // Wider meteors
            height: meteor.size,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: ['0%', '120%'],
            opacity: [0, 0.6, 0],
            x: [`${meteor.x}%`, `${meteor.x + 20}%`], // More horizontal drift
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SlowMeteorRain; 