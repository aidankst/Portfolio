import React from 'react';
import { motion } from 'framer-motion';
import LiquidBackground from './LiquidBackground';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/KaungSithu_Resume.txt';
    link.download = 'KaungSithu_Resume.txt';
    link.click();
  };

  return (
    <section id="hero" className="hero-container-new">
      <LiquidBackground />
      <div className="hero-content-new">
        <motion.div
          className="hero-text-new"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="hero-name-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Kaung Sithu
          </motion.h1>
          <motion.h2
            className="hero-title-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            Computer Science Graduate & Data Engineer
          </motion.h2>
          <motion.p
            className="hero-description-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            Passionate about machine learning, data analysis, and building innovative solutions.
          </motion.p>
          <motion.div
            className="hero-buttons-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.button
              className="hero-button-new primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="hero-button-new secondary"
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
