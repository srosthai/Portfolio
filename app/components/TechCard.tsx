"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TechCardProps {
  icon: string;
  name: string;
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({ icon, name, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);

  // Function to handle mousemove
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate rotation (max 10 degrees)
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 10;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center space-y-4 bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 rounded-xl min-w-[150px] border border-neutral-700 overflow-hidden"
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : "none",
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      />
      
      {/* Icon with hover effect */}
      <div className="relative z-10 transition-all duration-300 transform group-hover:scale-110">
        <motion.img
          src={icon}
          alt={name}
          className="w-14 h-14 object-contain"
          animate={{
            y: isHovered ? [-2, 2, -2] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Name with glow effect */}
      <span className={`text-sm font-medium z-10 text-center ${
        isHovered ? "text-white" : "text-gray-300"
      } transition-colors duration-300`}>
        {name}
      </span>
      
      {/* Shine effect */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent transform transition-transform duration-700 ${
          isHovered ? "translate-x-full" : "-translate-x-full"
        }`}
        style={{ transform: isHovered ? "skewX(-20deg) translateX(100%)" : "skewX(-20deg) translateX(-100%)" }}
      />
    </motion.div>
  );
};

export default TechCard; 