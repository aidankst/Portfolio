import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import googleLogo from '../assets/google_logo.png';
import ibmLogo from '../assets/ibm_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 2),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const CertificationCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
  background: theme.palette.background.paper,
  border: '1px solid rgba(100, 255, 218, 0.1)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(100, 255, 218, 0.15)',
    borderColor: 'rgba(100, 255, 218, 0.3)',
  },
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '40px',
  objectFit: 'contain',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    height: '50px',
  },
}));

const SkillChip = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '16px',
  padding: theme.spacing(0.25, 1.5),
  fontSize: '0.75rem',
  display: 'inline-block',
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    transform: 'translateY(-2px)',
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
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
              '&::before': null
            }}
          >
            <span>Certifications</span>
          </Typography>

          <Grid container spacing={4}>
            {Object.entries(certifications).map(([company, certs]) => (
              <Grid item xs={12} key={company}>
                <CertificationCard>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 4,
                      alignItems: { xs: 'center', sm: 'flex-start' },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: { sm: '150px' } }}>
                      <CompanyLogo src={company === 'google' ? googleLogo : ibmLogo} alt={`${company.toUpperCase()} Logo`} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      {certs.map((cert, index) => (
                        <Box
                          key={cert.credentialId}
                          sx={{
                            mb: index !== certs.length - 1 ? 4 : 0,
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: '#fafafa',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              backgroundColor: 'rgba(100, 255, 218, 0.05)',
                              transform: 'translateX(8px)',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            },
                          }}
                        >
                          <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 600 }}>
                            {cert.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
                            Issued {cert.issueDate} · Credential ID {cert.credentialId}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {cert.skills.map((skill) => (
                              <SkillChip key={skill} variant="caption">
                                {skill}
                              </SkillChip>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </CertificationCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Certifications;
