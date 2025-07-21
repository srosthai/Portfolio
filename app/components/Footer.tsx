import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/footer.module.css";
import FooterStars from "./FooterStars";
import AnimatedText from "./AnimatedText";
import GlowingStaggeredText from "./GlowingStaggeredText";
import { Mail, Github, ExternalLink, Linkedin, Facebook, Instagram, ArrowRight, Send, AlertCircle } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch('/api/contact-resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          contactInfo: formData.contactInfo,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the error is specifically due to missing API key config,
        // use the formsubmit.co fallback
        if (response.status === 503 && data.error === 'Email service not configured. Please contact the administrator.') {
          // Submit form to formsubmit.co
          const formElement = document.createElement('form');
          formElement.method = 'POST';
          formElement.action = 'https://formsubmit.co/srosthai00@gmail.com';
          formElement.style.display = 'none';

          // Add input fields
          const nameInput = document.createElement('input');
          nameInput.name = 'name';
          nameInput.value = formData.fullName;
          formElement.appendChild(nameInput);

          const emailInput = document.createElement('input');
          emailInput.name = 'email';
          emailInput.value = formData.contactInfo;
          formElement.appendChild(emailInput);

          const messageInput = document.createElement('textarea');
          messageInput.name = 'message';
          messageInput.value = formData.message;
          formElement.appendChild(messageInput);

          // Add to document, submit, and remove
          document.body.appendChild(formElement);
          formElement.submit();
          
          // Set form as submitted
          setFormSubmitted(true);
          setFormData({ fullName: '', contactInfo: '', message: '' });
          return;
        }
        
        throw new Error(data.error || 'Failed to send message');
      }

      setFormSubmitted(true);
      setFormData({ fullName: '', contactInfo: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormError(error instanceof Error ? error.message : 'An error occurred while sending your message');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Social media links with improved styling
  const socialLinks = [
    { 
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/samo.thai.73/",
      color: "from-blue-500 to-blue-600", 
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700" 
    },
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/Sovannthai",
      preview: true,
      color: "from-gray-800 to-gray-900", 
      hoverColor: "group-hover:from-gray-900 group-hover:to-black" 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/in/sros-thai-b491b42ab/",
      color: "from-blue-600 to-blue-700", 
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-800" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:srosthai00@gmail.com",
      color: "from-pink-500 to-purple-600", 
      hoverColor: "group-hover:from-pink-600 group-hover:to-purple-700" 
    }
  ];

  return (
    <footer id="footer-section" className={styles["footer-container"]}>
      {/* Stars background */}
      <FooterStars />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black to-transparent opacity-70 z-0"></div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className={`${styles["footer-content"]} grid md:grid-cols-4 gap-10`}>
          {/* Brand Column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className={styles["footer-logo"]}>
                <GlowingStaggeredText text="HE Sovannthai" />
              </h3>
              <p className="text-gray-400 text-sm">
                Backend Laravel Developer based in Cambodia.
                Building robust web applications and APIs.
              </p>
              
              {/* Social Icons - IMPROVED */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social, index) => {
                  const SocialLink = ({ children }: { children: React.ReactNode }) => (
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {children}
                    </motion.a>
                  );

                  const SocialButton = (
                    <>
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} ${social.hoverColor} transition-all duration-300`}></div>
                      
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white rounded-full blur-md transition-opacity duration-300"></div>
                      
                      {/* Overlay with shine effect */}
                      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </div>
                      
                      {/* Shine animation */}
                      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-500 ease-in-out"></div>
                    </>
                  );

                  return social.preview ? (
                    <LinkPreview key={index} url={social.href} className="relative overflow-hidden">
                      <SocialLink>{SocialButton}</SocialLink>
                    </LinkPreview>
                  ) : (
                    <SocialLink key={index}>{SocialButton}</SocialLink>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", id: "hero-section" },
                  { name: "About", id: "about-section" },
                  { name: "Tech Stack", id: "tech-stack-section" },
                  { name: "Resume", id: "resume-section" },
                  { name: "Projects", id: "projects-section" }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button 
                      onClick={() => scrollTo(link.id)} 
                      className="group flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-2 h-px group-hover:h-px bg-pink-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <motion.li 
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-pink-400">Email:</span>
                  <span className="hover:text-white transition-colors duration-300">srosthai00@gmail.com</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-pink-400">Location:</span>
                  <span className="hover:text-white transition-colors duration-300">Cambodia</span>
                </motion.li>
                <motion.li 
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="https://sovannthai.vercel.app/cv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-pink-500 hover:text-pink-400 transition-colors group"
                  >
                    <span>View Full CV</span>
                    <ExternalLink size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Me</h4>
              <p className="text-gray-400 text-sm mb-4">
                Feel free to reach out if you have any questions or opportunities.
              </p>
              
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-lg border border-green-500/30 text-center"
                >
                  <p className="text-green-400 font-medium mb-2">Message sent successfully!</p>
                  <p className="text-gray-300 text-sm">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {formError && (
                    <div className="p-3 bg-red-500/20 backdrop-blur-sm rounded-lg border border-red-500/30 flex items-start space-x-2">
                      <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{formError}</p>
                    </div>
                  )}
                  
                  <div className="group relative">
                    <input 
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-500 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"></div>
                  </div>
                  
                  <div className="group relative">
                    <input 
                      type="email"
                      name="contactInfo"
                      placeholder="Your Email"
                      value={formData.contactInfo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-500 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"></div>
                  </div>
                  
                  <div className="group relative">
                    <textarea 
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    ></textarea>
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"></div>
                  </div>
                  
                  <motion.button
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full relative py-2.5 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center space-x-2 overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-pink-600 hover:to-purple-700'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    )}
                    
                    {/* Animated shine effect */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine"></div>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 mt-12 border-t border-neutral-800 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} HE Sovannthai. All rights reserved.</p>
        </motion.div>
      </div>
      
      {/* Animation for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 