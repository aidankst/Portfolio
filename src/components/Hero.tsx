import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePhoto from '../assets/kst.png';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '64px',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    paddingTop: '32px',
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
  border: '2px solid #64ffda',
  padding: '5px',
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

const Hero = () => {
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
            sx={{ fontFamily: '"Roboto Mono", monospace' }}
          >
            Hi, my name is
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
              fontWeight: 'bold'
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
            color="text.secondary"
            gutterBottom
            sx={{ mb: 4 }}
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
                color: 'inherit',
                backgroundColor: 'transparent',
                border: '2px solid #64ffda',
                padding: '12px 24px',
                borderRadius: '8px',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(100, 255, 218, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Check out my GitHub
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://www.linkedin.com/in/aidankst/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'transparent',
                border: '2px solid #64ffda',
                padding: '12px 24px',
                borderRadius: '8px',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(100, 255, 218, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
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
  );
};

export default Hero;