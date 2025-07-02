import { motion } from 'framer-motion';
import { Typography, Container, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from '@mui/icons-material';

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

const ContactButton = styled(motion(Button))(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  borderRadius: '25px',
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  boxShadow: `0 4px 15px ${theme.palette.primary.main}33`,
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-3px)',
    boxShadow: `0 8px 20px ${theme.palette.primary.main}55`,
  },
}));

const SocialLink = styled(motion.a)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: '15px',
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.4)' 
    : 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)'}`, 
  boxShadow: `0 4px 16px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`, 
  transition: 'all 0.3s ease',
  minWidth: '120px',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`, 
    background: theme.palette.mode === 'light' 
      ? 'rgba(255, 255, 255, 0.6)' 
      : 'rgba(255, 255, 255, 0.1)',
  },
  '& svg': {
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
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
    <StyledSection id="contact">
      <Container maxWidth="md">
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
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
              '&::after': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'rgba(100, 255, 218, 0.3)',
              },
            }}
          >
            <span>Get In Touch</span>
          </Typography>

          <Typography variant="h5" color="text.primary" sx={{ textAlign: 'center', mb: 2, fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Have a question or want to connect?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '700px', margin: '0 auto', mb: 4, textAlign: 'center', fontSize: { xs: '1rem', sm: '1.1rem' }, lineHeight: 1.7 }}>
            I'm currently looking for new opportunities in data analytics and data science. Whether you have a question or just want to say hi, feel free to reach out! I'll do my best to get back to you promptly.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <ContactButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:aidan.kst@icloud.com"
              startIcon={<EmailIcon />}
            >
              Say Hello
            </ContactButton>
          </Box>

          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap' }}>
            <SocialLink
              href="https://github.com/aidankst/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubIcon />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>GitHub</Typography>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/aidankst/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkedInIcon />
              <Typography variant="body1" sx={{ fontWeight: 600 }}>LinkedIn</Typography>
            </SocialLink>
          </Box>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Contact;