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
  background: theme.palette.background.default,
  transition: 'all 0.3s ease',
  paddingLeft: '4rem',
  paddingRight: '4rem',
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

const ProfileContainer = styled(Box)({
  position: 'relative',
  display: 'inline-block',
});

const FloatingKeyword = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  padding: '4px 8px',
  borderRadius: '16px',
  fontSize: '0.7rem',
  fontWeight: 500,
  fontFamily: '"Roboto Mono", monospace',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(14, 165, 233, 0.1)',
  border: theme.palette.mode === 'dark'
    ? '1px solid rgba(100, 255, 218, 0.3)'
    : '1px solid rgba(14, 165, 233, 0.3)',
  color: theme.palette.mode === 'dark' 
    ? '#64ffda' 
    : theme.palette.primary.main,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  userSelect: 'none',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    padding: '3px 6px',
    fontSize: '0.6rem',
    borderRadius: '12px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '4px 8px',
    fontSize: '0.65rem',
    borderRadius: '14px',
  },
}));

// const SocialButton = styled(motion.a)(({ theme }) => ({
//   textDecoration: 'none',
//   backgroundColor: 'rgba(100, 255, 218, 0)',
//   border: `2px solid ${theme.palette.primary.main}`,
//   padding: '12px 24px',
//   borderRadius: '8px',
//   display: 'inline-flex',
//   alignItems: 'center',
//   gap: '10px',
//   transition: 'all 0.3s ease',
//   color: theme.palette.mode === 'light' 
//     ? theme.palette.primary.main    // Blue in light mode
//     : theme.palette.text.primary,   // Light slate in dark mode
//   '&:hover': {
//     backgroundColor: theme.palette.primary.light,
//     transform: 'translateY(-2px)',
//     boxShadow: theme.palette.mode === 'light'
//       ? '0 4px 20px rgba(14, 165, 233, 0.15)'
//       : '0 4px 20px rgba(100, 255, 218, 0.15)',
//   }
// }));

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

  const getKeywordPosition = (index: number, total: number, isMobile: boolean, isTablet: boolean) => {
    const angle = (index / total) * 2 * Math.PI;
    let radius = 180;
    let shiftX = -40;
    
    if (isMobile) {
      radius = 80; // Much smaller radius for mobile
      shiftX = -20;
    } else if (isTablet) {
      radius = 120; // Medium radius for tablet
      shiftX = -30;
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
      x: isMobile ? [0, 5, -5, 0] : [0, 10, -10, 0],
      y: isMobile ? [0, -8, 5, 0] : [0, -15, 10, 0],
      transition: {
        opacity: { delay: custom * 0.2, duration: 0.6 },
        scale: { delay: custom * 0.2, duration: 0.6 },
        x: {
          repeat: Infinity,
          duration: 4 + custom * 0.5,
          ease: "easeInOut",
          delay: custom * 0.2
        },
        y: {
          repeat: Infinity,
          duration: 5 + custom * 0.3,
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
          <ProfileContainer>
            <ProfileImage
              src={profilePhoto}
              alt="Kaung Sithu"
              whileHover={{ scale: 1.05 }}
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