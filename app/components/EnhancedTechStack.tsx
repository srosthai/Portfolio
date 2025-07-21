"use client";

import React from "react";
import { motion } from "framer-motion";
import TechCard from "./TechCard";

interface TechStackProps {
  className?: string;
}

const EnhancedTechStack: React.FC<TechStackProps> = ({ className = "" }) => {
  // First row technologies
  const firstRowTech = [
    { name: "HTML5", icon: "/images/html.png" },
    { name: "CSS3", icon: "/images/css-3.png" },
    { name: "JavaScript", icon: "/images/js.png" },
    { name: "PHP", icon: "/images/php.png" },
    { name: "Laravel", icon: "/images/laravel.png" },
  ];

  // Second row technologies
  const secondRowTech = [
    { name: "MySQL", icon: "/images/mysql.png" },
    { name: "Bootstrap", icon: "/images/bootstrap.png" },
    { name: "Git", icon: "/images/git.png" },
    { name: "JQuery", icon: "/images/jquery.png" },
    { name: "Postman", icon: "/images/postman.png" },
  ];

  return (
    <div className={`space-y-16 ${className}`}>
      {/* First row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {firstRowTech.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              index={index}
            />
          ))}
        </div>
        
        {/* Connecting lines between tech cards */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" style={{ position: 'absolute' }}>
            <motion.path
              d="M 50,50 L 250,50 L 450,50 L 650,50 L 850,50"
              stroke="rgba(236, 72, 153, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Second row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {secondRowTech.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              index={index}
            />
          ))}
        </div>
        
        {/* Connecting lines between tech cards */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" style={{ position: 'absolute' }}>
            <motion.path
              d="M 50,50 L 250,50 L 450,50 L 650,50 L 850,50"
              stroke="rgba(236, 72, 153, 0.2)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
      </motion.div>
      
      {/* Glowing orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-500 opacity-20 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animation: `float-${i} ${Math.random() * 10 + 15}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
      
      {/* Animation for floating orbs */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 20px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 40px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default EnhancedTechStack; 