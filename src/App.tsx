import './App.css'
import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';

// Update the theme settings with refined color palette
const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode - premium refinements
          background: {
            default: '#fafafa',    // Slightly off-white for softness
            paper: '#ffffff',      // Pure white for cards
          },
          text: {
            primary: '#1a1a2e',    // Deep blue-black for main text
            secondary: '#4a5568',   // Sophisticated gray for secondary text
          },
          primary: {
            main: '#0066cc',       // Changed to requested blue
            light: 'rgba(0, 102, 204, 0.15)', // Adjusted hover transparency
          },
        }
      : {
          // Dark mode - keep existing premium dark theme
          background: {
            default: '#0a192f',    // Navy background
            paper: '#112240',      // Lighter navy for cards
          },
          text: {
            primary: '#ccd6f6',    // Light slate
            secondary: '#8892b0',   // Slate
          },
          primary: {
            main: '#64ffda',       // Signature teal
            light: 'rgba(100, 255, 218, 0.15)', // Transparent version for hover
          },
        }),
    // Common colors for both themes
    common: {
      black: '#1a1a2e',
      white: '#ffffff',
    },
    // Custom colors that can be accessed via theme.palette.custom
    custom: {
      // Light mode specific
      lightMode: {
        accent: '#0ea5e9',      // Vibrant blue
        highlight: '#3b82f6',   // Royal blue
        subtle: '#e2e8f0',      // Light gray
      },
      // Dark mode specific
      darkMode: {
        navy: '#0a192f',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        teal: '#64ffda',
      },
    },
  },
  // Enhanced transitions
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

// Add this new styled component at the top level
const ThemeTransitionRoot = styled('div')<{ theme: Theme }>(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `linear-gradient(
      30deg,
      ${theme.palette.primary.main} 0%,
      ${theme.palette.background.paper} 50%,
      ${theme.palette.background.default} 100%
    )`,
    transform: 'translateY(-100%) rotate(15deg)',
    transition: 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)',
    zIndex: 9999,
    mixBlendMode: 'soft-light',
    opacity: 0.4,
    filter: 'blur(30px)',
  },
  '&.theme-switching::before': {
    transform: 'translateY(0) rotate(15deg)',
  }
}));

// Update the ThemedApp component
const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  
  const theme = useMemo(
    () => createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light')),
    [isDarkMode]
  );

  // Handle theme transition
  useEffect(() => {
    setIsThemeSwitching(true);
    const timer = setTimeout(() => {
      setIsThemeSwitching(false);
    }, 1000);  // Match CSS transition duration
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeTransitionRoot className={isThemeSwitching ? 'theme-switching' : ''}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </main>
      </ThemeTransitionRoot>
    </ThemeProvider>
  );
};

// Main App component
function App() {
  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  );
}

export default App;
