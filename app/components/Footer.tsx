import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/footer.module.css";
import FooterStars from "./FooterStars";
import AnimatedText from "./AnimatedText";
import { Mail, Github, ExternalLink, Linkedin, Facebook, Instagram, ArrowRight, Send } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.fullName.trim()) {
      setStatusMessage("Please enter your name");
      return;
    }
    
    if (!formData.contactInfo.trim()) {
      setStatusMessage("Please enter your email or phone number");
      return;
    }
    
    if (!formData.message.trim()) {
      setStatusMessage("Please enter a message");
      return;
    }
    
    setIsSubmitting(true);
    setStatusMessage("Thanks for your message! I'll get back to you soon.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        contactInfo: "",
        message: ""
      });
      setIsSubmitting(false);
      setStatusMessage("");
    }, 3000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer-section" className={styles["footer-container"]}>
      {/* Stars background */}
      <FooterStars />
      
      <div className="max-w-6xl mx-auto px-4">
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
                <AnimatedText text="HE Sovannthai" className="inline-block" />
              </h3>
              <p className="text-gray-400 text-sm">
                Backend Laravel Developer based in Cambodia.
                Building robust web applications and APIs.
              </p>
              
              {/* Social Icons */}
              <div className={styles["social-icons"]}>
                <motion.a 
                  href="https://www.facebook.com/samo.thai.73/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={styles["icon-wrapper"]}
                >
                  <Facebook size={18} className="text-white" />
                </motion.a>
                <LinkPreview url="https://github.com/Sovannthai" className="relative overflow-hidden group">
                  <motion.a 
                    href="https://github.com/Sovannthai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={styles["icon-wrapper"]}
                  >
                    <Github size={18} className="text-white" />
                  </motion.a>
                </LinkPreview>
                <motion.a 
                  href="https://www.linkedin.com/in/sros-thai-b491b42ab/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={styles["icon-wrapper"]}
                >
                  <Linkedin size={18} className="text-white" />
                </motion.a>
                <motion.a 
                  href="mailto:srosthai00@gmail.com" 
                  whileHover={{ y: -5 }}
                  className={styles["icon-wrapper"]}
                >
                  <Mail size={18} className="text-white" />
                </motion.a>
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
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollTo("hero-section")} className={styles["footer-link"]}>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("about-section")} className={styles["footer-link"]}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("tech-stack-section")} className={styles["footer-link"]}>
                    Tech Stack
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("resume-section")} className={styles["footer-link"]}>
                    Resume
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("projects-section")} className={styles["footer-link"]}>
                    Projects
                  </button>
                </li>
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
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="font-medium text-gray-300">Email:</span>
                  <span>srosthai00@gmail.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-medium text-gray-300">Location:</span>
                  <span>Cambodia</span>
                </li>
                <li className="mt-4">
                  <a 
                    href="https://sovannthai.vercel.app/cv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    <span>View Full CV</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
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
              
              <form onSubmit={handleSubmit} className={styles["footer-form"]}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={styles["footer-input"]}
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="contactInfo"
                  placeholder="Email or Phone"
                  className={styles["footer-input"]}
                  value={formData.contactInfo}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`${styles["footer-input"]} min-h-[80px]`}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <div className="flex justify-end p-2">
                  <motion.button
                    type="submit"
                    className={styles["subscribe-button"]}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-1">
                        <span className="animate-pulse">Sending</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1">
                        <span>Submit</span>
                        <Send size={14} />
                      </span>
                    )}
                  </motion.button>
                </div>
                {statusMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs mt-2 text-pink-500 p-2"
                  >
                    {statusMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Border */}
        <div className={styles["footer-border"]} />
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm py-4"
        >
          <p>© {new Date().getFullYear()} HE Sovannthai. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 