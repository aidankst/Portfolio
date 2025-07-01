import React from 'react';
import { motion } from 'framer-motion';
// Using emojis instead of react-icons to avoid TypeScript compatibility issues
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: '💼',
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aidankst/",
      color: "#0077b5"
    },
    {
      icon: '🐙',
      name: "GitHub",
      url: "https://github.com/aidankst/",
      color: "#333"
    },
    {
      icon: '📧',
      name: "Email",
      url: "mailto:aidan.kst@icloud.com",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient" />
      </div>
      
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-main" variants={itemVariants}>
            <div className="footer-brand">
              <motion.h3
                className="footer-name"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Kaung Sithu
              </motion.h3>
              <p className="footer-title">
                Data Scientist & Software Developer
              </p>
              <p className="footer-description">
                Passionate about transforming data into insights and building innovative solutions that make a difference.
              </p>
            </div>

            <motion.div className="footer-links" variants={itemVariants}>
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-contact" variants={itemVariants}>
              <h4>Get In Touch</h4>
              <div className="footer-contact-info">
                <p>
                  <span className="contact-icon">📧</span>
                  aidan.kst@icloud.com
                </p>
                <p>
                  <span className="contact-icon">📍</span>
                  Kraków, Poland
                </p>
              </div>
              
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      backgroundColor: social.color
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="footer-bottom"
            variants={itemVariants}
          >
            <div className="footer-divider" />
            
            <div className="footer-bottom-content">
              <motion.p 
                className="footer-copyright"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                © {currentYear} Kaung Sithu. Made with ❤️ using React & TypeScript
              </motion.p>
              
              <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                aria-label="Scroll to top"
              >
                ⬆️
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;