"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/app/components/AnimatedText";
import Projects from "@/app/components/Projects";
import { PROJECTS } from "@/app/constants/projects";
import type { SectionProps } from "@/app/types";

export default function ProjectsSection({ className }: SectionProps) {
  return (
    <section id="projects-section" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-pink-500 font-medium mb-4 mt-5">PROJECTS</h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl text-white md:text-5xl font-bold mb-6 tracking-tight"
          >
            <AnimatedText
              text="Check Out Some of My Works."
              className="inline-block"
            />
          </motion.h1>
          <p className="text-gray-400 mt-4">Here are some of my recent projects</p>
        </motion.div>

        {/* Projects component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Projects projects={PROJECTS} />
        </motion.div>
      </div>
    </section>
  );
}