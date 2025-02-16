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
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: { xs: 'left', md: 'justify' }
              }}>
                Hello! I'm Kaung Sithu, a detail-oriented Machine Learning Research Intern at AGH University of Science and Technology. I have a strong foundation in Python, SQL, and data visualization tools, with a focus on enhancing dataset reliability and providing actionable insights through statistical analysis and data modeling.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: { xs: 'left', md: 'justify' }
              }}>
                I hold a Bachelor of Science in Computer Science from AGH University of Science and Technology in Krakow, Poland. I'm passionate about leveraging tools like Python, SQL, and various machine learning frameworks to create meaningful solutions that drive research and development forward.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: { xs: 'left', md: 'justify' }
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
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&::before': {
                                  content: '"✔"',
                                  color: 'primary.main',
                                },
                              }}
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
                        sx={{
                          fontSize: '0.75rem',
                          padding: '4px 12px',
                          minWidth: '120px',
                          borderColor: 'rgba(100, 255, 218, 0.3)',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'rgba(100, 255, 218, 0.1)'
                          }
                        }}
                      >
                        {showAllSkills ? 'Show Less' : 'Show More Skills'}
                      </Button>
                    </motion.div>
                  </Box>
                )}
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 4, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
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
                        sx={{
                          p: 1.5,
                          borderRadius: 4,
                          border: '1px solid rgba(100, 255, 218, 0.2)',
                          background: 'rgba(100, 255, 218, 0.03)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(100, 255, 218, 0.08)',
                            borderColor: 'rgba(100, 255, 218, 0.4)',
                          },
                        }}
                      >
                        <Typography 
                          component="div"
                          variant="body2" 
                          color="primary" 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1.5,
                            fontSize: { xs: '0.8rem', sm: '0.9rem' }
                          }}
                        >
                          <span style={{ fontSize: '1.2em' }}>{language.flag}</span>
                          <Box>
                            <div>{language.lang}</div>
                            <div style={{ 
                              fontSize: '0.75em',
                              opacity: 0.8,
                              lineHeight: 1.2,
                              marginTop: 2
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