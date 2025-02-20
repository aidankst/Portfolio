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
import { Theme as MuiTheme } from '@mui/material/styles';
// import { useTheme as useMuiTheme } from '@mui/material/styles';

// Update ThemeTransitionRoot to use proper theme typing
const ThemeTransitionRoot = styled('div')<{ theme?: MuiTheme }>(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: theme?.palette?.background?.default,
  color: theme?.palette?.text?.primary,
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
      ${theme?.palette?.primary?.main} 0%,
      ${theme?.palette?.background?.paper} 50%,
      ${theme?.palette?.background?.default} 100%
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

// Update ThemedApp to use MUI theme
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

// Add the getDesignTokens function
const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#fafafa',
            paper: '#ffffff',
          },
          text: {
            primary: '#1a1a2e',
            secondary: '#4a5568',
          },
          primary: {
            main: '#0066cc',
            light: 'rgba(0, 102, 204, 0.15)',
          },
        }
      : {
          background: {
            default: '#0a192f',
            paper: '#112240',
          },
          text: {
            primary: '#ccd6f6',
            secondary: '#8892b0',
          },
          primary: {
            main: '#64ffda',
            light: 'rgba(100, 255, 218, 0.15)',
          },
        }),
    common: {
      black: '#1a1a2e',
      white: '#ffffff',
    },
    custom: {
      lightMode: {
        accent: '#0ea5e9',
        highlight: '#3b82f6',
        subtle: '#e2e8f0',
      },
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
