import { motion } from 'framer-motion';
import { Typography, Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import aghLogo from '../assets/AGH_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const EducationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#ffffff',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '100px',
  height: 'auto',
  marginBottom: '0.5rem',
  [theme.breakpoints.up('sm')]: {
    width: '120px',
  },
}));

const Education = () => {
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

  return (
    <StyledSection id="education">
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
              '&::before': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'rgba(100, 255, 218, 0.3)',
              },
              '&::after': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'rgba(100, 255, 218, 0.3)',
              },
            }}
          >
            <span>Education</span>
          </Typography>

          <EducationCard elevation={0}>
            <LogoImage src={aghLogo} alt="AGH University of Science and Technology" />
            <Typography variant="h5" color="primary" gutterBottom sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              textAlign: 'center'
            }}>
              AGH University of Science and Technology
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: 'center'
            }}>
              Bachelor of Science in Computer Science
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{
              fontSize: { xs: '0.9rem', sm: '1rem' },
              textAlign: 'center'
            }}>
              October 2021 - February 2025
            </Typography>
            <Box sx={{ mt: 1, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 1 }}>
                Overall GPA: 4.5/5.0
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 1 }}>
                Dissertation Presentation Grade: 5.0/5.0
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Dissertation Title: Low-Latency Object Detection in Autonomous Vehicles
              </Typography>
            </Box>
          </EducationCard>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Education;