"use client";

import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SlowMeteorRain from "@/app/components/SlowMeteorRain";
import AnimatedText from "@/app/components/AnimatedText";
import { LinkPreview } from "@/components/ui/link-preview";
import type { SectionProps } from "@/app/types";

export default function AboutSection({ className }: SectionProps) {
  const scrollToFooter = () => {
    document.getElementById("footer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about-section" className="min-h-screen py-20 px-4 relative">
      {/* Add SlowMeteorRain component */}
      <SlowMeteorRain />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-pink-500 font-medium mb-4">ABOUT ME</h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl text-white md:text-5xl font-bold mb-6 tracking-tight"
          >
            <AnimatedText
              text="Let me introduce myself."
              className="inline-block"
            />
          </motion.h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <Image
                src="/images/thai.jpg"
                alt="Profile"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Hello,</h4>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m Sovannthai. I&apos;m a Laravel Developer with experience in building scalable web apps and APIs using Laravel, MySQL, and modern frontend tools.
                I focus on clean code, RESTful services, Spatie roles/permissions, and efficient backend logic. Passionate about solving problems and delivering user-friendly solutions.
              </p>
              <p className="text-gray-400 mt-4">Thank you!</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold mb-6">Profile</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-1">FULLNAME:</p>
                  <p>HE Sovannthai</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">BIRTH DATE:</p>
                  <p>September 18, 2003</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">JOB:</p>
                  <p>Staff Full-Time, Laravel Developer</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">EMAIL:</p>
                  <p>srosthai00@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black transition-colors gap-2"
            onClick={scrollToFooter}
          >
            <Mail className="h-4 w-4" />
            CONTACT ME
          </Button>
          <LinkPreview url="https://sovannthai.vercel.app/cv" className="relative overflow-hidden group">
            <Button
              variant="default"
              className="bg-pink-500 hover:bg-pink-600 text-white gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              VIEW CV
            </Button>
          </LinkPreview>
        </motion.div>
      </div>
    </section>
  );
}