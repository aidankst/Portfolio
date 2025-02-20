import { motion } from 'framer-motion';
import { Typography, Container, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePhoto from '../assets/kst.png';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '54px',
  gap: '2rem',
  color: theme.palette.text.primary,
  background: theme.palette.background.default,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    paddingTop: '32px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '& > div:last-child': {
      marginTop: '2rem'
    }
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    textAlign: 'left'
  }
}));

const ProfileImage = styled(motion.img)(({ theme }) => ({
  borderRadius: '50%',
  objectFit: 'cover',
  border: `2px solid ${theme.palette.primary.main}`,
  padding: '5px',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '250px',
    height: '250px'
  },
  [theme.breakpoints.up('md')]: {
    width: '300px',
    height: '300px'
  }
}));

const SocialButton = styled(motion.a)(({ theme }) => ({
  textDecoration: 'none',
  backgroundColor: 'rgba(100, 255, 218, 0)',
  border: `2px solid ${theme.palette.primary.main}`,
  padding: '12px 24px',
  borderRadius: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'all 0.3s ease',
  color: theme.palette.mode === 'light' 
    ? theme.palette.primary.main    // Blue in light mode
    : theme.palette.text.primary,   // Light slate in dark mode
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 4px 20px rgba(14, 165, 233, 0.15)'
      : '0 4px 20px rgba(100, 255, 218, 0.15)',
  }
}));

const Hero = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero">
      <StyledContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ flex: 1 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="subtitle1"
              color="primary"
              gutterBottom
              sx={{ 
                fontFamily: '"Roboto Mono", monospace',
                color: theme.palette.primary.main 
              }}
            >
              Hi, my name is
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                fontWeight: 'bold',
                color: theme.palette.text.primary
              }}
              component="h1"
              gutterBottom
            >
              Kaung Sithu
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ 
                mb: 4,
                color: theme.palette.text.secondary
              }}
            >
              I turn data into actionable insights.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '600px', mb: 2 }}
            >
              I'm a Machine Learning Research Intern with expertise in Python, Data Analysis, and Computer Vision.
              Currently focused on autonomous driving models and enhancing dataset reliability through
              automated quality assessment pipelines.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 1 }}
              >
                📧 aidan.kst@icloud.com
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ display: 'flex', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}
              >
                📱 +48 572 519 255
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://github.com/aidankst/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: theme.palette.mode === 'light' ? '#333333' : '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0)',
                  border: '2px solid #64ffda',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon sx={{ 
                  color: theme.palette.mode === 'light'
                    ? '#24292f'  // GitHub's original color
                    : '#64ffda',
                  transition: 'color 0.3s ease'
                }} /> GitHub
              </motion.a>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://www.linkedin.com/in/aidankst/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: theme.palette.mode === 'light' ? theme.palette.primary.main : '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0)',
                  border: '2px solid #64ffda',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(100, 255, 218, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon sx={{ 
                  color: theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : '#64ffda',
                  transition: 'color 0.3s ease'
                }} /> LinkedIn
              </motion.a>
            </motion.div>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <ProfileImage
            src={profilePhoto}
            alt="Kaung Sithu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </StyledContainer>
    </section>
  );
};

export default Hero;