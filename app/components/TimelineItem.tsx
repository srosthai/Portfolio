"use client";

import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import GlowingStaggeredText from "./GlowingStaggeredText";

interface TimelineItemProps {
  title: string;
  date: string;
  organization: string;
  description: string;
  url?: string;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  date,
  organization,
  description,
  url,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-gray-800 group"
    >
      {/* Animated dot */}
      <motion.div 
        className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay: delay + 0.2,
          type: "spring",
          stiffness: 300
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.5 }}
      />
      
      {/* Connecting line glow effect on hover */}
      <motion.div 
        className="absolute w-0.5 h-full -left-px top-4 origin-top bg-gradient-to-b from-pink-500 to-transparent opacity-0 group-hover:opacity-100"
        style={{ transition: "opacity 0.3s ease" }}
      />
      
      {/* Title with preview if URL provided */}
      <h5 className="text-xl font-semibold mb-1">
        {url ? (
          <LinkPreview
            url={url}
            className="inline-flex items-center font-bold text-white hover:text-pink-400 transition-colors duration-300"
          >
            <GlowingStaggeredText text={title} delay={delay + 0.1} />
          </LinkPreview>
        ) : (
          <GlowingStaggeredText text={title} delay={delay + 0.1} className="text-white hover:text-pink-400 transition-colors duration-300" />
        )}
      </h5>
      
      {/* Date with sliding animation */}
      <motion.p 
        className="text-gray-400 mb-1"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.3 }}
        viewport={{ once: true }}
      >
        {date}
      </motion.p>
      
      {/* Organization with fade-in animation */}
      <motion.p 
        className="text-gray-400 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        {organization}
      </motion.p>
      
      {/* Description with staggered reveal */}
      <motion.p 
        className="mt-2 text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      
      {/* Hover card effect */}
      <motion.div
        className="absolute -inset-1 rounded-md bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 z-0 blur-md"
        style={{ transition: "opacity 0.3s ease" }}
      />
    </motion.div>
  );
};

export default TimelineItem; 