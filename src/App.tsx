import './App.css'
import { useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider as CustomThemeProvider, useTheme } from './context/ThemeContext';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Theme as MuiTheme } from '@mui/material/styles';

const gradientAnimation = keyframes`
  0% {
    transform: translate(0%, 0%) rotate(15deg);
  }
  50% {
    transform: translate(-10%, 10%) rotate(5deg);
  }
  100% {
    transform: translate(0%, 0%) rotate(15deg);
  }
`;

const AppContainer = styled('div')<{ theme?: MuiTheme }>(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  backgroundColor: theme?.palette.background.default,
  color: theme?.palette.text.primary,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'fixed',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: `linear-gradient(
      45deg,
      ${theme?.palette.primary.main} 0%,
      ${theme?.palette.background.paper} 50%,
      ${theme?.palette.background.default} 100%
    )`,
    animation: `${gradientAnimation} 30s ease infinite`,
    transition: 'background 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
    zIndex: -1,
    mixBlendMode: 'soft-light',
    opacity: theme?.palette.mode === 'dark' ? 0.3 : 0.5,
    filter: 'blur(60px)',
  },
}));

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicationDetail from './pages/PublicationDetail';

const ThemedApp = () => {
  const { isDarkMode } = useTheme();
  
  const theme = useMemo(
    () => createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light')),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Publications />
                <Certifications />
                <Projects />
                <Skills />
                <Contact />
              </>
            } />
            <Route path="/publication/:id" element={<PublicationDetail />} />
          </Routes>
        </main>
      </AppContainer>
    </ThemeProvider>
  );
};

function App() {
  return (
    <CustomThemeProvider>
      <Router basename="/Portfolio">
        <ThemedApp />
      </Router>
    </CustomThemeProvider>
  );
}

export default App;

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#f0f4f8',
            paper: '#ffffff',
          },
          text: {
            primary: '#1a202c',
            secondary: '#4a5568',
          },
          primary: {
            main: '#007aff',
            light: 'rgba(0, 122, 255, 0.15)',
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
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
