"use client";

import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import styles from './styles/tech-stack.module.css';
import MeteorRain from "./components/MeteorRain";
import SlowMeteorRain from "./components/SlowMeteorRain";
import AnimatedText from "./components/AnimatedText";
import { LinkPreview } from "@/components/ui/link-preview";
import TiltCard from "./components/TiltCard";
import Navigation from "./components/Navigation";
import Lanyard from "./components/Lanyard";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import Footer from "./components/Footer";

export default function Home() {
  const scrollToFooter = () => {
    document.getElementById("footer-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Room Rental System",
      description: "Room Rental System built with Laravel and Bootstrap 5",
      image: "/images/sarana.png",
      github: "https://github.com/Sovannthai/saranas",
      tags: ["Laravel", "Bootstrap 5", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <main className="bg-black text-white relative">
      {/* Meteor Rain Background */}
      <MeteorRain />

      {/* Background overlay with noise texture */}
      <div
        className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
        opacity-20 pointer-events-none"
      />

      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen flex flex-col justify-center items-center text-center relative">
        {/* Navigation Bar */}
        <Navigation
          items={[
            { name: "Home", id: "hero-section" },
            { name: "About", id: "about-section" },
            { name: "Tech Stack", id: "tech-stack-section" },
            { name: "Resume", id: "resume-section" },
            { name: "Projects", id: "projects-section" }
          ]}
        />

        {/* Background with snow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="snow">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzY0enhnbjM1dXptbzJ3bHd0eWp3YzB6YWl4NXlqMDZ4aWljM3JkcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jaOXKCxtBPLieRLI0c/giphy.gif"
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
          <span ><AnimatedText
            text="HELLO, WORLD."
            className="inline-block"
          /></span>
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
          <span className="text-2xl font-bold"><AnimatedText
            text="BACKEND LARAVEL DEVELOPER"
            className="inline-block"
          /></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
        </motion.div>
      </section>

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

      {/* About Section */}
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
                <img
                  src="/images/me.jpg"
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Hello,</h4>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m Sovannthai. I am the eldest child in my family. Currently, I am a fourth-year student at university,
                  in my first semester. I am excited to meet new people and look forward to the opportunities and experiences
                  that lie ahead.
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
              className="text-black border-white hover:bg-white hover:text-black transition-colors gap-2"
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

      {/* Tech Stack Section */}
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

        <div className="relative">
          <div className={styles['tech-scroll-container']}>
            <div className={styles['tech-scroll']}>
              {[
                { name: "HTML5", icon: "/images/html.png" },
                { name: "CSS3", icon: "/images/css-3.png" },
                { name: "JavaScript", icon: "/images/js.png" },
                { name: "PHP", icon: "/images/php.png" },
                { name: "Laravel", icon: "/images/laravel.png" },
                { name: "MySQL", icon: "/images/mysql.png" },
                { name: "Bootstrap", icon: "/images/bootstrap.png" },
                { name: "Git", icon: "/images/git.png" },
                { name: "JQuery", icon: "/images/jquery.png" },
                { name: "Postman", icon: "/images/postman.png" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center space-y-4 bg-neutral-900 p-6 rounded-xl min-w-[150px] ${styles['tech-card']}`}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-12 h-12 object-contain ${styles['tech-icon']}`}
                  />
                  <span className={`text-sm font-medium ${styles['tech-name']}`}>{tech.name}</span>
                </motion.div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {[
                { name: "HTML5", icon: "/images/html.png" },
                { name: "CSS3", icon: "/images/css-3.png" },
                { name: "JavaScript", icon: "/images/js.png" },
                { name: "PHP", icon: "/images/php.png" },
                { name: "Laravel", icon: "/images/laravel.png" },
                { name: "MySQL", icon: "/images/mysql.png" },
                { name: "Bootstrap", icon: "/images/bootstrap.png" },
                { name: "Git", icon: "/images/git.png" },
                { name: "JQuery", icon: "/images/jquery.png" },
                { name: "Postman", icon: "/images/postman.png" },
              ].map((tech, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center space-y-4 bg-neutral-900 p-6 rounded-xl min-w-[150px] ${styles['tech-card']}`}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-12 h-12 object-contain ${styles['tech-icon']}`}
                  />
                  <span className={`text-sm font-medium ${styles['tech-name']}`}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient overlays with animation */}
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

      {/* Resume Section */}
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
                <div className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    <LinkPreview
                      url="https://eot.eocambo.dev/"
                      className="font-bold text-white"
                    >
                      <AnimatedText
                        text="Backend Laravel Developer"
                        className="inline-block"
                      />
                    </LinkPreview>
                  </h5>
                  <p className="text-gray-400 mb-2">February 2024 - Present</p>
                  <p className="text-gray-400">Super Cool Agency</p>
                  <p className="mt-2">Building and maintaining web applications using Laravel framework, implementing features, and ensuring code quality.</p>
                </div>

                <div className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    <LinkPreview
                      url="https://eot.eocambo.dev/"
                      className="font-bold text-white"
                    >
                      <AnimatedText
                        text="IT Supporter"
                        className="inline-block"
                      />
                    </LinkPreview>
                  </h5>
                  <p className="text-gray-400 mb-2">October 2022 - February 2024</p>
                  <p className="text-gray-400">Best Supporter</p>
                  <p className="mt-2">I have the skill to support any customer about system management, like inventory management systems, POS systems, Pharmacy systems, book management systems, and e-commerce websites.</p>
                </div>
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
                <div className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    <LinkPreview
                      url="https://www.bbu.edu.kh/"
                      className="font-bold text-white"
                    >
                      <AnimatedText
                        text="Bachelor of Information Technology"
                        className="inline-block"
                      />
                    </LinkPreview>
                  </h5>
                  <p className="text-gray-400 mb-2">2022 - Present</p>
                  <p className="text-gray-400">University of Life</p>
                  <p className="mt-2">Studying advanced concepts in Information Technology and software development.</p>
                </div>

                <div className="relative pl-8 border-l border-gray-800">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 top-0" />
                  <h5 className="text-xl font-semibold">
                    <AnimatedText
                      text="High School Diploma"
                      className="inline-block"
                    />
                  </h5>
                  <p className="text-gray-400 mb-2">2019 - June 2022</p>
                  <p className="text-gray-400">High School Life</p>
                  <p className="mt-2">Studied at High School for Specialized Studies, Siem Reap, Cambodia.</p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
            <h3 className="text-3xl md:text-5xl font-bold">Check Out Some of My Works.</h3>
            <p className="text-gray-400 mt-4">Here are some of my recent projects</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  github={project.github}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
      {/* Footer Section */}
      <Footer />
    </main>
  );
}