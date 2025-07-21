"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/app/components/AnimatedText";
import { LinkPreview } from "@/components/ui/link-preview";
import { WORK_EXPERIENCE, EDUCATION } from "@/app/constants/resume";
import type { SectionProps } from "@/app/types";

export default function ResumeSection({ className }: SectionProps) {
  return (
    <section id="resume-section" className="min-h-screen py-20 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-pink-500 font-medium mb-4">RESUME</h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl text-white md:text-5xl font-bold mb-6 tracking-tight"
          >
            <AnimatedText
              text="More of my credentials."
              className="inline-block"
            />
          </motion.h1>
          <p className="text-gray-400 mt-4">Let me show as below:</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-pink-500 font-medium mb-8">Work Experience</h4>
            <div className="space-y-12">
              {WORK_EXPERIENCE.map((experience, index) => (
                <div key={index} className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    {experience.url ? (
                      <LinkPreview
                        url={experience.url}
                        className="font-bold text-white"
                      >
                        <AnimatedText
                          text={experience.title}
                          className="inline-block"
                        />
                      </LinkPreview>
                    ) : (
                      <AnimatedText
                        text={experience.title}
                        className="inline-block"
                      />
                    )}
                  </h5>
                  <p className="text-gray-400 mb-2">{experience.period}</p>
                  <p className="text-gray-400">{experience.company}</p>
                  <p className="mt-2">{experience.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-pink-500 font-medium mb-8">Education</h4>
            <div className="space-y-12">
              {EDUCATION.map((education, index) => (
                <div key={index} className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    {education.url ? (
                      <LinkPreview
                        url={education.url}
                        className="font-bold text-white"
                      >
                        <AnimatedText
                          text={education.degree}
                          className="inline-block"
                        />
                      </LinkPreview>
                    ) : (
                      <AnimatedText
                        text={education.degree}
                        className="inline-block"
                      />
                    )}
                  </h5>
                  <p className="text-gray-400 mb-2">{education.period}</p>
                  <p className="text-gray-400">{education.institution}</p>
                  <p className="mt-2">{education.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}