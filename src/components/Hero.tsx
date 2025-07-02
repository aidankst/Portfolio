import { motion } from 'framer-motion';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePhoto from '../assets/kst.png';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '54px',
  gap: '2rem',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  paddingLeft: '4rem',
  paddingRight: '4rem',
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    paddingTop: '32px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    width: '95%',
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
  border: `3px solid ${theme.palette.primary.main}`,
  padding: '6px',
  transition: 'all 0.3s ease',
  boxShadow: `0 0 25px ${theme.palette.primary.light}`,
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    height: '180px'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: '220px',
    height: '220px'
  },
  [theme.breakpoints.up('md')]: {
    width: '280px',
    height: '280px'
  }
}));

const ProfileContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
});

const FloatingKeyword = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  padding: '6px 12px',
  borderRadius: '20px',
  fontSize: '0.75rem',
  fontWeight: 600,
  fontFamily: '"SF Pro Text", "Roboto Mono", monospace',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(100, 255, 218, 0.15)' 
    : 'rgba(0, 122, 255, 0.1)',
  border: `1px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.4)'
      : 'rgba(0, 122, 255, 0.3)'
  }`,
  color: theme.palette.mode === 'dark' 
    ? '#64ffda' 
    : '#007aff',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  userSelect: 'none',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: '4px 8px',
    fontSize: '0.6rem',
    borderRadius: '16px',
  },
}));

const SocialButton = styled(motion.a)(({ theme }) => ({
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: `2px solid ${
    theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.7)'
      : 'rgba(0, 122, 255, 0.7)'
  }`,
  padding: '12px 24px',
  borderRadius: '12px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'all 0.3s ease',
  color: theme.palette.mode === 'dark' 
    ? '#64ffda'
    : '#007aff',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.1)'
      : 'rgba(0, 122, 255, 0.1)',
    transform: 'translateY(-3px)',
    boxShadow: `0 4px 20px ${
      theme.palette.mode === 'dark'
        ? 'rgba(100, 255, 218, 0.15)'
        : 'rgba(0, 122, 255, 0.2)'
    }`,
  }
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const keywords = [
    { text: 'Python', delay: 0 },
    { text: 'Machine Learning', delay: 0.5 },
    { text: 'Data Analysis', delay: 1 },
    { text: 'Computer Vision', delay: 1.5 },
    { text: 'TensorFlow', delay: 2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      },
    },
  };

  const getKeywordPosition = (index: number, total: number, isMobile: boolean, isTablet: boolean) => {
    const angle = (index / total) * 2 * Math.PI + Math.PI / 4; // Offset angle
    let radius = 160;
    let shiftX = -40;
    
    if (isMobile) {
      radius = 110; 
      shiftX = -25;
    } else if (isTablet) {
      radius = 140;
      shiftX = -35;
    }
    
    const x = Math.cos(angle) * radius + shiftX;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const getFloatingVariants = (isMobile: boolean) => ({
    initial: { opacity: 0, scale: 0 },
    animate: (custom: number) => ({
      opacity: 1,
      scale: 1,
      x: isMobile ? [0, 4, -4, 0] : [0, 8, -8, 0],
      y: isMobile ? [0, -6, 4, 0] : [0, -12, 8, 0],
      transition: {
        opacity: { delay: custom * 0.2, duration: 0.5 },
        scale: { delay: custom * 0.2, duration: 0.5 },
        x: {
          repeat: Infinity,
          duration: 5 + custom * 0.5,
          ease: "easeInOut",
          delay: custom * 0.2
        },
        y: {
          repeat: Infinity,
          duration: 6 + custom * 0.3,
          ease: "easeInOut",
          delay: custom * 0.2
        }
      }
    })
  });

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
                fontFamily: '"SF Pro Display", "Roboto Mono", monospace',
                color: theme.palette.primary.main,
                fontWeight: 500,
              }}
            >
              Hi, my name is
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 'bold',
                color: theme.palette.text.primary,
                letterSpacing: '-1.5px'
              }}
              component="h1"
              gutterBottom
            >
              Kaung Sithu
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ 
                mb: 3,
                color: theme.palette.text.secondary,
                fontWeight: 500,
              }}
            >
              I turn data into actionable insights.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '600px', mb: 4, fontSize: '1.1rem' }}
            >
              I'm a Machine Learning Research Intern with expertise in Python, Data Analysis, and Computer Vision.
              Currently focused on autonomous driving models and enhancing dataset reliability through
              automated quality assessment pipelines.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SocialButton
                href="https://github.com/aidankst/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon sx={{ 
                  color: 'inherit',
                  transition: 'color 0.3s ease'
                }} /> GitHub
              </SocialButton>
              <SocialButton
                href="https://www.linkedin.com/in/aidankst/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon sx={{ 
                  color: 'inherit',
                  transition: 'color 0.3s ease'
                }} /> LinkedIn
              </SocialButton>
            </Box>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          <ProfileContainer>
            <ProfileImage
              src={profilePhoto}
              alt="Kaung Sithu"
              whileHover={{ scale: 1.05, boxShadow: `0 0 45px ${theme.palette.primary.light}` }}
              whileTap={{ scale: 0.95 }}
            />
            {keywords.map((keyword, index) => {
              const position = getKeywordPosition(index, keywords.length, isMobile, isTablet);
              return (
                <FloatingKeyword
                  key={keyword.text}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  variants={getFloatingVariants(isMobile)}
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {keyword.text}
                </FloatingKeyword>
              );
            })}
          </ProfileContainer>
        </motion.div>
      </StyledContainer>
    </section>
  );
};

export default Hero;