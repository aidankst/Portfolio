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
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
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
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  maxWidth: 800,
  margin: '0 auto',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #64ffda, #00bfa5)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    '&::before': {
      opacity: 1,
    },
  },
}));

const InstitutionLogo = styled('img')(({ theme }) => ({
  maxWidth: '120px',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'transparent',
  padding: 0,
  display: 'inline-block',
  borderRadius: '4px',
  opacity: 0.8,
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    height: 80,
    marginBottom: theme.spacing(4)
  },
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
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
              '&:after': {
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
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <InstitutionLogo src={aghLogo} alt="AGH University" />
              <Typography
                variant="h5"
                sx={{
                  color: '##0066cc',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#64ffda'
                  }
                }}
              >
                AGH University of Science and Technology
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}>
                <span>🇵🇱 🇪🇺</span>
                Kraków, Poland · 2021 - 2025
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: { xs: 2, sm: 3 },
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  borderRadius: 2,
                  height: { xs: 'auto', sm: '100%' }
                }}>
                  <Typography variant="h6" component="h4" sx={{ 
                    mb: { xs: 0.5, sm: 1 },
                    fontSize: { xs: '1rem', sm: 'inherit' }
                  }}>
                    B.Sc Computer Science
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ 
                    fontSize: { xs: '0.8rem', sm: 'inherit' }
                  }}>
                    Focus on software engineering, data structures, and machine learning
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: { xs: 2, sm: 3 },
                  border: '1px solid rgba(100, 255, 218, 0.1)',
                  borderRadius: 2,
                  height: { xs: 'auto', sm: '100%' }
                }}>
                  <Box sx={{ mb: { xs: 1, sm: 2 } }}>
                    <Typography variant="body2" sx={{ 
                      opacity: 0.8,
                      fontSize: { xs: '0.75rem', sm: 'inherit' }
                    }}>
                      GPA
                    </Typography>
                    <Typography variant="h5" sx={{ 
                      fontSize: { xs: '1.1rem', sm: 'inherit' }
                    }}>
                      4.5/5.0
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ 
                      opacity: 0.8,
                      fontSize: { xs: '0.75rem', sm: 'inherit' }
                    }}>
                      Dissertation
                    </Typography>
                    <Typography variant="h5" sx={{ 
                      fontSize: { xs: '1.1rem', sm: 'inherit' }
                    }}>
                      5.0/5.0
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ 
              mt: 1,
              pt: 2,
              borderTop: '1px solid rgba(100, 255, 218, 0.1)',
              textAlign: 'center'
            }}>
              <Typography variant="body2" sx={{ 
                fontStyle: 'italic', 
                opacity: 0.8,
                fontSize: '0.95rem'
              }}>
                "Low-Latency Object Detection in Autonomous Vehicles"
              </Typography>
            </Box>
          </EducationCard>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Education;