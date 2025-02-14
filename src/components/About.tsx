import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const About = () => {
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
                Currently pursuing a Bachelor of Science in Computer Science at AGH University of Science and Technology in Krakow, Poland. I'm passionate about leveraging tools like Python, SQL, and various machine learning frameworks to create meaningful solutions that drive research and development forward.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary" sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                textAlign: { xs: 'left', md: 'justify' }
              }}>
                Here are some technologies I've been working with recently:
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={12} sm={6} md={3} key={skill}>
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
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 4, mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Languages I speak:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    Burmese (Native)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    English (Advanced)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    Chinese (Beginner)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                    Polish (Beginner)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default About;