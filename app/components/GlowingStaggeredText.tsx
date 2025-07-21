"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowingStaggeredTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const GlowingStaggeredText: React.FC<GlowingStaggeredTextProps> = ({
  text,
  delay = 0,
  className = "",
}) => {
  // Split text into an array of letters
  const letters = Array.from(text);

  // Container variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  // Child variants (for each letter)
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{
            textShadow: "0 0 8px rgba(236, 72, 153, 0.5)",
            marginRight: letter === " " ? "0.25em" : "0",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default GlowingStaggeredText; 