"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/app/components/AnimatedText";
import MeteorRain from "@/app/components/MeteorRain";
import Navigation from "@/app/components/Navigation";
import { NAVIGATION_ITEMS } from "@/app/constants/navigation";
import type { SectionProps } from "@/app/types";

export default function HeroSection({ className }: SectionProps) {
  return (
    <section id="hero-section" className="min-h-screen flex flex-col justify-center items-center text-center relative">
      {/* Navigation Bar */}
      <Navigation items={NAVIGATION_ITEMS} />

      {/* Background with snow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="snow">
          <img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzY0enhnbjM1dXptbzJ3bHd0eWp3YzB6YWl4NXlqMDZ4aWljM3JkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jaOXKCxtBPLieRLI0c/giphy.gif"
            alt="Snow Effect"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-pink-500 text-4xl mb-4"
      >
        <span>
          <AnimatedText
            text="HELLO, WORLD."
            className="inline-block"
          />
        </span>
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl text-white md:text-7xl font-bold mb-6 tracking-tight"
      >
        <AnimatedText
          text="I'm HE Sovannthai"
          className="inline-block"
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-4 text-gray-400 mb-12"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <AnimatedText
              text="BACKEND LARAVEL DEV"
              className="inline-block"
            />
          </span>
          <Image src="/images/dev.png" alt="Laravel Developer" width={48} height={48} className="w-12 h-12" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
      </motion.div>

      {/* Snow effect CSS */}
      <style jsx>{`
        .snow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/snow.gif') repeat top center;
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
}