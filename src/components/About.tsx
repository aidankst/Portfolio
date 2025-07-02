import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.mode === 'light' 
    ? 'radial-gradient(circle at 20% 80%, rgba(240, 240, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)' 
    : 'radial-gradient(circle at 20% 80%, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%)',
  backgroundSize: '200% 200%',
  animation: 'moveGradient 10s ease infinite',
  '@keyframes moveGradient': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, rgba(10, 25, 47, 0) 50%)',
    pointerEvents: 'none',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const essentialSkills = [
    'Machine Learning',
    'Python (NumPy, Pandas)',
    'Data Visualization',
    'TensorFlow',
    'Data Modeling',
    'Problem Solving',
    'SQL',
    'Scikit-learn'
  ];

  const skills = [
    'Machine Learning',
    'Data Collection',
    'Data Visualization',
    'Classification Models',
    'Problem Solving',
    'Data Cleaning',
    'Python (NumPy, Pandas)',
    'TensorFlow',
    'Excel',
    'Data Modeling',
    'Databases (SQL, NoSQL)',
    'Scikit-learn',
    'Google Sheets',
    'Exploratory Analysis',
    'Pattern Recognition',
    'Spiking Neural Network',
    'Regression Analysis',
    'Decision Making',
    'Attention to Detail',
    'Feature Engineering'
  ];

  return (
    <StyledSection id="about">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 6,
              '&::after': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'rgba(100, 255, 218, 0.3)',
              },
            }}
          >
            <span>About Me</span>
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                textAlign: { xs: 'left', md: 'justify' },
                lineHeight: 1.7,
              }}>
                Hello! I'm Kaung Sithu, a detail-oriented Machine Learning Research Intern at AGH University of Science and Technology. I have a strong foundation in Python, SQL, and data visualization tools, with a focus on enhancing dataset reliability and providing actionable insights through statistical analysis and data modeling.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                textAlign: { xs: 'left', md: 'justify' },
                lineHeight: 1.7,
              }}>
                I hold a Bachelor of Science in Computer Science from AGH University of Science and Technology in Krakow, Poland. I'm passionate about leveraging tools like Python, SQL, and various machine learning frameworks to create meaningful solutions that drive research and development forward.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                textAlign: { xs: 'left', md: 'justify' },
                lineHeight: 1.7,
              }}>
                Here are some technologies I've been working with recently:
              </Typography>
              <Box sx={{ mt: 2 }}>
                <motion.div
                  initial={false}
                  animate={{ height: 'auto' }}
                  style={{ overflow: 'hidden' }}
                >
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Grid container spacing={2}>
                      {(isMobile ? (showAllSkills ? skills : essentialSkills) : skills).map((skill) => (
                        <Grid item xs={12} sm={6} md={3} key={skill}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Typography
                              variant="body2"
                              color="primary"
                              sx={(theme) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 500,
                                color: theme.palette.text.primary,
                                '&::before': {
                                  content: '"✔"',
                                  color: theme.palette.primary.main,
                                  fontSize: '1.1em',
                                  mr: 0.5,
                                },
                              })}
                            >
                              {skill}
                            </Typography>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </motion.div>
                {skills.length > essentialSkills.length && (
                  <Box sx={{ mt: 2, display: { sm: 'none' } }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => setShowAllSkills(!showAllSkills)}
                        sx={(theme) => ({
                          fontSize: '0.8rem',
                          padding: '6px 16px',
                          minWidth: '140px',
                          borderRadius: '12px',
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            backgroundColor: 'rgba(100, 255, 218, 0.1)',
                            boxShadow: `0 4px 15px ${theme.palette.primary.main}33`,
                            transform: 'translateY(-2px)',
                          },
                        })}
                      >
                        {showAllSkills ? 'Show Less' : 'Show More Skills'}
                      </Button>
                    </motion.div>
                  </Box>
                )}
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{
                mt: 4,
                mb: 2,
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.7,
              }}>
                Languages I speak:
              </Typography>
              <Grid container spacing={2}>
                {[
                  { lang: 'Burmese', level: 'Native', flag: '🇲🇲' },
                  { lang: 'English', level: 'Advanced', flag: '🇬🇧' },
                  { lang: 'Chinese', level: 'Beginner', flag: '🇨🇳' },
                  { lang: 'Polish', level: 'Beginner', flag: '🇵🇱' },
                ].map((language, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ width: '100%' }}
                    >
                      <Box
                        sx={(theme) => ({
                          p: 2,
                          borderRadius: 3,
                          border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`, 
                          background: theme.palette.mode === 'light' 
                            ? 'rgba(255, 255, 255, 0.4)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          boxShadow: `0 4px 16px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`, 
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`, 
                          },
                        })}
                      >
                        <Typography 
                          component="div"
                          variant="body1" 
                          color="text.primary" 
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            fontSize: { xs: '0.95rem', sm: '1.05rem' },
                            fontWeight: 600,
                          }}
                        >
                          <span style={{ fontSize: '1.3em' }}>{language.flag}</span>
                          <Box>
                            <div>{language.lang}</div>
                            <div style={{ 
                              fontSize: '0.8em',
                              opacity: 0.7,
                              lineHeight: 1.2,
                              marginTop: 2,
                              color: theme.palette.text.secondary,
                            }}>
                              {language.level}
                            </div>
                          </Box>
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default About;