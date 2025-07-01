import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="theme-toggle-track"
        animate={{
          backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="theme-toggle-thumb"
          animate={{
            x: theme === 'dark' ? 24 : 0,
            backgroundColor: theme === 'dark' ? '#ffffff' : '#1a1a1a'
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <motion.div
            className="theme-icon"
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'light' ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path
                  d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  fill="currentColor"
                />
              </svg>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;