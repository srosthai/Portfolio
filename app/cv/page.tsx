'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import AnimatedText from '../components/AnimatedText'

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/CV.pdf'
    link.download = 'SrosThai_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-white/20"
      >
        {/* Header Section */}
        <div className="p-8 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-lg"
          >
            <Image
              src="/images/me.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-4"
            >
              <AnimatedText
                text="SROS THAI"
                className="inline-block"
              />
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-1xl font-bold text-pink-400 mb-6"
            >
              <AnimatedText
                text="Backend Laravel Developer"
                className="inline-block"
              />
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <Button
                onClick={handleDownload}
                className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Profile Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Profile"
                className="inline-block"
              />
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a Backend Laravel developer skilled in building complete applications,
                handling backend tasks like Blade, Third-party service, APIs and databases.
              </p>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Contact"
                className="inline-block"
              />
              </h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-300">
                  <span className="text-pink-400">📞</span> +85581931190
                </p>
                <p className="flex items-center gap-3 text-gray-300">
                  <span className="text-pink-400">✉️</span> srosthai00@gmail.com
                </p>
                <p className="flex items-center gap-3 text-gray-300">
                  <span className="text-pink-400">📍</span> Sangkat Svay Dongkom, Krong Siem Reap, Siem Reap
                </p>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Skills"
                className="inline-block"
              />
              </h3>
              <ul className="space-y-3">
                {[
                  'Proficient in PHP and Laravel framework',
                  'Database Management: MySQL, Knowledge of database migrations, seeding, and Eloquent ORM',
                  'Building RESTful APIs and GraphQL APIs for frontend consumption',
                  'API authentication (e.g., OAuth, Passport, Sanctum)',
                  'Authentication & Authorization: Implementing user authentication systems and role-based access controls'
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-pink-400">•</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Soft Skills Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Soft Skills"
                className="inline-block"
              />
              </h3>
              <ul className="space-y-3">
                {[
                  'Problem-solving and analytical thinking',
                  'Collaboration with frontend developers and cross-functional teams'
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-pink-400">•</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Education"
                className="inline-block"
              />
              </h3>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-pink-400 mb-2">(2022-2025)</p>
                <h4 className="font-bold text-white text-xl mb-1">BUILD BRIGHT UNIVERSITY</h4>
                <p className="text-gray-300">Bachelor of Science in Computer Science</p>
                <p className="text-gray-300">3.59</p>
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Experience"
                className="inline-block"
              />
              </h3>
              
              {/* First Experience */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-6">
                <p className="text-pink-400 mb-2">(October-2022 - May-2023)</p>
                <h4 className="font-bold text-white text-xl mb-1">eOcambo Technology</h4>
                <p className="text-gray-400 italic mb-3">IT SUPPORT</p>
                <ul className="space-y-2">
                  {[
                    'Hardware and Software Troubleshooting: Diagnosing and resolving issues with computers, printers, Installing, configuring, and updating software and operating systems',
                    'Technical Documentation: Creating user manuals, FAQs, and guides for software and hardware use',
                    'Remote Support Tools: Using tools like TeamViewer or AnyDesk for remote troubleshooting',
                    'Help Desk Support: Providing first-line support via ticketing systems, phone, or email'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-pink-400 mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Second Experience */}
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-pink-400 mb-2">(July-2023 - Now)</p>
                <h4 className="font-bold text-white text-xl mb-1">eOcambo Technology</h4>
                <p className="text-gray-400 italic mb-3">Backend Laravel Developer</p>
                <ul className="space-y-2">
                  {[
                    'Laravel Developer I\'m developing web applications such as Driving Management Systems, POS, and Room Rental Management Systems using the Laravel Framework',
                    'Experience with RESTful API integration'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-pink-400 mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Salary Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-pink-400 border-b border-pink-400/30 pb-2">
              <AnimatedText
                text="Salary"
                className="inline-block"
              />
              </h3>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-gray-300">Expected Salary: <span className="text-pink-400">$1 - $10000</span> per month/year</p>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CV 