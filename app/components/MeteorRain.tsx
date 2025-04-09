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

const MeteorRain = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Generate initial meteors
    const generateMeteors = () => {
      const newMeteors: Meteor[] = [];
      for (let i = 0; i < 15; i++) {
        newMeteors.push({
          id: i,
          x: Math.random() * 100, // Random starting position
          y: -20, // Start above the viewport
          size: Math.random() * 2 + 1, // Random size between 1-3
          duration: Math.random() * 3 + 2, // Random duration between 2-5 seconds
          delay: Math.random() * 5, // Random delay between 0-5 seconds
        });
      }
      setMeteors(newMeteors);
    };

    generateMeteors();

    // Regenerate meteors every 10 seconds
    const interval = setInterval(generateMeteors, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute bg-white rounded-full"
          style={{
            width: meteor.size,
            height: meteor.size,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: ['0%', '120%'],
            opacity: [0, 1, 0],
            x: [`${meteor.x}%`, `${meteor.x + 10}%`], // Slight horizontal drift
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

export default MeteorRain; 