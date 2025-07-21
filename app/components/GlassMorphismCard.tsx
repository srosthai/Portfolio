"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassMorphismCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassMorphismCard: React.FC<GlassMorphismCardProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 shadow-lg p-6 
      hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 overflow-hidden ${className}`}
      whileHover={{
        boxShadow: "0 0 30px rgba(236, 72, 153, 0.2)",
      }}
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 z-0"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradient-animation 15s ease infinite",
        }}
      />
      
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* CSS for the gradient animation */}
      <style jsx>{`
        @keyframes gradient-animation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </motion.div>
  );
};

export default GlassMorphismCard; 