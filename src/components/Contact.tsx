import { motion } from 'framer-motion';
import { Typography, Container, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Email as EmailIcon } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 0),
}));

const ContactButton = styled(motion(Button))(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(1),
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    background: `rgba(100, 255, 218, 0.1)`,
  },
}));

const SocialLink = styled(motion.a)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  '&:hover': {
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
          style={{ textAlign: 'center' }}
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
            <span>Get In Touch</span>
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '660px', margin: '0 auto', mb: 4 }}>
            I'm currently looking for new opportunities in data analytics and data science. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </Typography>

          <ContactButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:aidan.kst@icloud.com"
            startIcon={<EmailIcon />}
          >
            Say Hello
          </ContactButton>

          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 4 }}>
            <SocialLink
              href="https://github.com/aidankst/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubIcon />
              <Typography>GitHub</Typography>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/aidankst/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
              <Typography>LinkedIn</Typography>
            </SocialLink>
          </Box>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Contact;