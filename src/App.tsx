import './App.css'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    primary: {
      main: '#0066cc',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#5a6a7a',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
