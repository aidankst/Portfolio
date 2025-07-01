import { motion } from 'framer-motion';
import { Typography, Container, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import aghLogo from '../assets/AGH_logo.png';

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

const EducationCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(10, 25, 47, 0.5)',
  boxShadow: `0 8px 32px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.15)' : 'rgba(0, 0, 0, 0.2)'}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
  maxWidth: 800,
  margin: '0 auto',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 40px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
  },
}));

const InstitutionLogo = styled('img')(({ theme }) => ({
  maxWidth: '150px',
  height: 'auto',
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'transparent',
  padding: theme.spacing(1),
  display: 'inline-block',
  borderRadius: '8px',
  opacity: 0.9,
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    height: 90,
    marginBottom: theme.spacing(5)
  },
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.08)',
  },
}));

// Add card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const Education = () => {
  return (
    <StyledSection id="education">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              position: 'relative',
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '2px',
                backgroundColor: 'rgba(100, 255, 218, 0.5)',
                margin: '20px auto 0',
              },
            }}
          >
            Education
          </Typography>

          <EducationCard 
            elevation={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <InstitutionLogo src={aghLogo} alt="AGH University" />
              <Typography
                variant="h5"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mb: 1,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main
                  }
                })}
              >
                AGH University of Science and Technology
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                fontSize: { xs: '0.95rem', sm: '1rem' },
                fontWeight: 500,
              })}>
                <span>🇵🇱 🇪🇺</span>
                Kraków, Poland · 2021 - 2025
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              <Grid item xs={12} md={6}>
                <motion.div variants={cardVariants}>
                  <Box sx={(theme) => ({
                    p: { xs: 2.5, sm: 3 },
                    background: theme.palette.mode === 'light' 
                      ? 'rgba(255, 255, 255, 0.4)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: 3,
                    height: { xs: 'auto', sm: '100%' },
                    boxShadow: `0 4px 16px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`, 
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`, 
                    }
                  })}>
                    <Typography variant="h6" component="h4" sx={(theme) => ({
                      mb: { xs: 0.5, sm: 1 },
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    })}>
                      B.Sc Computer Science
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={(theme) => ({
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      lineHeight: 1.6,
                    })}>
                      Focus on software engineering, data structures, and machine learning
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={cardVariants}>
                  <Box sx={(theme) => ({
                    p: { xs: 2.5, sm: 3 },
                    background: theme.palette.mode === 'light' 
                      ? 'rgba(255, 255, 255, 0.4)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: 3,
                    height: { xs: 'auto', sm: '100%' },
                    boxShadow: `0 4px 16px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`, 
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`, 
                    }
                  })}>
                    <Box sx={(theme) => ({ mb: { xs: 1.5, sm: 2 } })}>
                      <Typography variant="body2" sx={(theme) => ({
                        opacity: 0.8,
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        color: theme.palette.text.secondary,
                      })}>
                        GPA
                      </Typography>
                      <Typography variant="h5" sx={(theme) => ({
                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      })}>
                        4.5/5.0
                      </Typography>
                    </Box>
                    <Box sx={(theme) => ({})}>
                      <Typography variant="body2" sx={(theme) => ({
                        opacity: 0.8,
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        color: theme.palette.text.secondary,
                      })}>
                        Dissertation
                      </Typography>
                      <Typography variant="h5" sx={(theme) => ({
                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                      })}>
                        5.0/5.0
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <motion.div variants={cardVariants}>
              <Box sx={(theme) => ({
                mt: 4,
                pt: 3,
                borderTop: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`, 
                textAlign: 'center',
                background: theme.palette.mode === 'light' 
                  ? 'rgba(255, 255, 255, 0.4)' 
                  : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)'}`, 
                borderRadius: 3,
                p: 2.5,
                boxShadow: `0 4px 16px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)'}`, 
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 8px 24px ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`, 
                }
              })}>
                <Typography variant="body1" sx={(theme) => ({
                  fontStyle: 'italic', 
                  opacity: 0.9,
                  fontSize: '1rem',
                  color: theme.palette.text.primary,
                  lineHeight: 1.6,
                })}>
                  "Low-Latency Object Detection in Autonomous Vehicles"
                </Typography>
              </Box>
            </motion.div>
          </EducationCard>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Education;