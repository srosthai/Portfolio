"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from '@/app/styles/tech-stack.module.css';
import AnimatedText from "@/app/components/AnimatedText";
import { 
  TECH_STACK_ROW_ONE_EXTENDED, 
  TECH_STACK_ROW_TWO_EXTENDED 
} from "@/app/constants/tech-stack";
import type { SectionProps } from "@/app/types";

export default function TechStackSection({ className }: SectionProps) {
  return (
    <section id="tech-stack-section" className="py-20 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 pt-10"
        >
          <h2 className="text-pink-500 font-medium mb-4">TECH STACK</h2>
          <motion.h3
            className={`text-3xl md:text-5xl font-bold ${styles['section-title']}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={(e) => {
              if (e?.target) {
                e.target.classList.add(styles.animate);
              }
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl text-white md:text-5xl font-bold mb-6 tracking-tight"
            >
              <AnimatedText
                text="Technologies I Work With"
                className="inline-block"
              />
            </motion.h1>
          </motion.h3>
        </motion.div>
      </div>

      {/* First row - scrolling left to right */}
      <div className="relative mb-8">
        <div className={styles['tech-scroll-container']}>
          <div className={styles['tech-scroll']}>
            {TECH_STACK_ROW_ONE_EXTENDED.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center space-y-4 bg-neutral-900 p-6 rounded-xl min-w-[150px] ${styles['tech-card']}`}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className={`w-12 h-12 object-contain ${styles['tech-icon']}`}
                />
                <span className={`text-sm font-medium ${styles['tech-name']}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"
        />
      </div>

      {/* Second row - scrolling right to left (reverse) */}
      <div className="relative">
        <div className={styles['tech-scroll-container']}>
          <div className={styles['tech-scroll-reverse']}>
            {TECH_STACK_ROW_TWO_EXTENDED.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center space-y-4 bg-neutral-900 p-6 rounded-xl min-w-[150px] ${styles['tech-card']}`}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className={`w-12 h-12 object-contain ${styles['tech-icon']}`}
                />
                <span className={`text-sm font-medium ${styles['tech-name']}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"
        />
      </div>
    </section>
  );
}