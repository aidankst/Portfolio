import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import googleLogo from '../assets/google_logo.png';
import ibmLogo from '../assets/ibm_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const AchievementCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #64ffda, #00bfa5)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.05)',
    '&::before': {
      opacity: 1,
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '40px',
  objectFit: 'contain',
  opacity: 0.9,
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50px',
  },
}));

const SkillChip = styled(motion.span)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: 'rgba(100, 255, 218, 0.03)',
  border: '1px solid rgba(100, 255, 218, 0.15)',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontSize: '0.75rem',
  display: 'inline-block',
  margin: theme.spacing(0.5),
  cursor: 'default',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    padding: theme.spacing(0.4, 1.5),
  },
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.08)',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 8px 16px rgba(100, 255, 218, 0.15)',
    border: '1px solid rgba(100, 255, 218, 0.3)',
  },
}));

const CertificationTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#64ffda',
  },
}));

const Certifications = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const certifications = {
    google: [
      {
        title: 'Analyze Data to Answer Questions',
        issueDate: 'Feb 2025',
        credentialId: 'E71T9UJOR0T8',
        skills: ['Data Aggregation', 'Spreadsheet', 'Data Analysis', 'Data Calculations', 'SQL'],
      },
      {
        title: 'Process Data from Dirty to Clean',
        issueDate: 'Jan 2025',
        credentialId: 'TMHFH9OBG1A7',
        skills: ['Data Analysis', 'R Markdown', 'Data Visualization', 'R Programming', 'Rstudio'],
      },
      {
        title: 'Prepare Data for Exploration',
        issueDate: 'Jan 2025',
        credentialId: 'TJBBCL8WEPS9',
        skills: ['Decision-Making', 'Spreadsheet', 'Data Analysis', 'Problem Solving', 'Questioning'],
      },
      {
        title: 'Ask Questions to Make Data-Driven Decisions',
        issueDate: 'Jan 2025',
        credentialId: 'TQOL78EMFEQ0',
        skills: ['Decision-Making', 'Spreadsheets', 'Data Analysis', 'Problem Solving', 'Questioning'],
      },
      {
        title: 'Foundations: Data, Data, Everywhere',
        issueDate: 'Dec 2024',
        credentialId: '8MG2THRLCNHB',
        skills: ['Spreadsheets', 'Data Analysis', 'SQL', 'Data Visualization', 'Data Cleaning'],
      },
    ],
    ibm: [
      {
        title: 'Exploratory Data Analysis for Machine Learning',
        issueDate: 'Dec 2024',
        credentialId: 'KNYHNHNCTUQ4',
        skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Feature Engineering', 'Statistical Hypothesis Testing', 'Exploratory Data Analysis'],
      },
    ],
  };

  return (
    <StyledSection id="certifications">
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
            <span>Achievements & Certifications</span>
          </Typography>

          <Grid container spacing={4}>
            {Object.entries(certifications).map(([company, certs]) => (
              <Grid item xs={12} key={company}>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                  <CompanyLogo
                    src={company === 'google' ? googleLogo : ibmLogo}
                    alt={`${company.toUpperCase()} Logo`}
                  />
                </Box>
                <Grid container spacing={3}>
                  {certs.map((cert, index) => (
                    <Grid item xs={12} md={6} key={cert.credentialId}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <AchievementCard
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <CertificationTitle variant="h6">
                            {cert.title}
                          </CertificationTitle>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              mb: 2,
                              opacity: 0.8,
                              fontSize: { xs: '0.8rem', sm: '0.85rem' },
                            }}
                          >
                            Issued {cert.issueDate} · Credential ID {cert.credentialId}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 1,
                              flexWrap: 'wrap',
                              mt: 3,
                            }}
                          >
                            {cert.skills.map((skill) => (
                              <SkillChip
                                key={skill}
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {skill}
                              </SkillChip>
                            ))}
                          </Box>
                        </AchievementCard>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Certifications;
