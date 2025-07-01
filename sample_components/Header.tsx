import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  
  // Enhanced scroll-based transformations
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const blurIntensity = useTransform(scrollY, [0, 200], [20, 60]);
  const pillScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Active section detection
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Enhanced Blurred Background Bar */}
      <motion.div
        className="liquid-header-backdrop"
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`
        }}
      />
      
      <motion.header
        className={`liquid-header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container">
          {/* Enhanced Apple Liquid Glass Dynamic Island */}
          <motion.div
            className={`liquid-island ${isScrolled ? 'scrolled' : ''}`}
            style={{ scale: pillScale }}
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Ambient Light Layer */}
            <div className="ambient-light-layer" />
            
            {/* Reflection Layer */}
            <div className="reflection-layer" />
          <motion.div
            className="liquid-logo"
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="logo-text">KS</span>
            <div className="logo-glow"></div>
          </motion.div>

          <nav className="liquid-nav">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`liquid-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -1,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <span className="nav-text">{item.label}</span>
                <div className="nav-highlight"></div>
                {activeSection === item.id && (
                  <motion.div
                    className="nav-active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="liquid-controls">
            <motion.div
              className="theme-toggle-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              className="liquid-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className={`liquid-hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Liquid Glass Mobile Menu */}
        <motion.nav
          className={`liquid-mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            scale: isMobileMenuOpen ? 1 : 0.95,
            filter: isMobileMenuOpen ? 'blur(0px)' : 'blur(4px)'
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <div className="liquid-mobile-content">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="liquid-mobile-link"
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -30,
                  filter: isMobileMenuOpen ? "blur(0px)" : "blur(4px)"
                }}
                transition={{ 
                  delay: isMobileMenuOpen ? index * 0.08 : 0,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mobile-nav-text">{item.label}</span>
                <div className="mobile-nav-highlight"></div>
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
    </>
  );
};

export default Header;