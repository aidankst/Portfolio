import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import googleLogo from '../assets/google_logo.png';
import ibmLogo from '../assets/ibm_logo.png';
import ciscoLogo from '../assets/cisco_logo.png';
import ciscoBadge from '../assets/cisco-introduction-to-cybersecurity.png';
import { useState, useEffect } from 'react';

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

const AchievementCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(10, 25, 47, 0.5)',
  boxShadow: `0 8px 32px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.15)' : 'rgba(0, 0, 0, 0.2)'}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 40px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '50px',
  objectFit: 'contain',
  opacity: 0.9,
  transition: 'all 0.3s ease',
  filter: theme.palette.mode === 'dark' ? 'brightness(1.2)' : 'none',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.08)',
  },
  [theme.breakpoints.up('sm')]: {
    height: '60px',
  },
}));

const SkillChip = styled(motion.span)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
  borderRadius: '20px',
  padding: theme.spacing(0.8, 2),
  fontSize: '0.8rem',
  fontWeight: 500,
  display: 'inline-block',
  margin: theme.spacing(0.5),
  cursor: 'default',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: theme.spacing(0.6, 1.8),
  },
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.1)'
      : 'rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 8px 16px rgba(100, 255, 218, 0.15)',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.4)' : 'rgba(0, 0, 0, 0.15)'}`, 
  },
}));

const CertificationTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.25rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem',
  },
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  lineHeight: 1.3,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const CertBadge = styled('img')(({ theme }) => ({
  width: '120px',
  height: 'auto',
  position: 'absolute',
  top: '15px',
  right: '15px',
  transform: 'rotate(8deg)',
  transition: 'all 0.3s ease',
  filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2))',
  zIndex: 1,
  '&:hover': {
    transform: 'rotate(12deg) scale(1.08)',
    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90px',
    top: '10px',
    right: '10px',
  },
}));


const Certifications = () => {
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        title: 'Google Data Analytics Professional Certificate',
        issueDate: 'April 2025',
        credentialId: 'JS5MOS9SOV3D',
        link: 'https://www.coursera.org/account/accomplishments/verify/JS5MOS9SOV3D',
        skills: ['Data Analysis', 'SQL', 'Spreadsheets', 'Data Management'],
        image: 'https://www.credly.com/images/b6a6c1a6-224e-4126-920b-122222f821b6/Google_Data_Analytics_Professional_Certificate_Badge.png',
      },
      {
        title: 'Data Analysis with R Programming',
        issueDate: 'April 2025',
        credentialId: '8OJSFHYC6HHW',
        link: 'https://www.coursera.org/account/accomplishments/verify/8OJSFHYC6HHW',
        skills: ['Data Analysis', 'R Markdown', 'Data Visualization', 'R Programming', 'Rstudio'],
        image: 'https://www.coursera.org/individual-course-badge-image/8OJSFHYC6HHW',
      },
      {
        title: 'Share Data Through the Art of Visualization',
        issueDate: 'Feb 2025',
        credentialId: '67JLUGMS70F8',
        link: 'https://www.coursera.org/account/accomplishments/verify/67JLUGMS70F8',
        skills: ['Data Analysis', 'Tableau Software', 'Data Visualization', 'Presentation'],
        image: 'https://www.coursera.org/individual-course-badge-image/67JLUGMS70F8',
      },
      {
        title: 'Analyze Data to Answer Questions',
        issueDate: 'Feb 2025',
        credentialId: 'E71T9UJOR0T8',
        link: 'https://www.coursera.org/account/accomplishments/verify/E71T9UJOR0T8',
        skills: ['Data Aggregation', 'Spreadsheet', 'Data Analysis', 'Data Calculations', 'SQL'],
        image: 'https://www.coursera.org/individual-course-badge-image/E71T9UJOR0T8',
      },
      {
        title: 'Process Data from Dirty to Clean',
        issueDate: 'Jan 2025',
        credentialId: 'TMHFH9OBG1A7',
        link: 'https://www.coursera.org/account/accomplishments/verify/TMHFH9OBG1A7',
        skills: ['Data Analysis', 'R Markdown', 'Data Visualization', 'R Programming', 'Rstudio'],
        image: 'https://www.coursera.org/individual-course-badge-image/TMHFH9OBG1A7',
      },
      {
        title: 'Prepare Data for Exploration',
        issueDate: 'Jan 2025',
        credentialId: 'TJBBCL8WEPS9',
        link: 'https://www.coursera.org/account/accomplishments/verify/TJBBCL8WEPS9',
        skills: ['Decision-Making', 'Spreadsheet', 'Data Analysis', 'Problem Solving', 'Questioning'],
        image: 'https://www.coursera.org/individual-course-badge-image/TJBBCL8WEPS9',
      },
      {
        title: 'Ask Questions to Make Data-Driven Decisions',
        issueDate: 'Jan 2025',
        credentialId: 'TQOL78EMFEQ0',
        link: 'https://www.coursera.org/account/accomplishments/verify/TQOL78EMFEQ0',
        skills: ['Decision-Making', 'Spreadsheets', 'Data Analysis', 'Problem Solving', 'Questioning'],
        image: 'https://www.coursera.org/individual-course-badge-image/TQOL78EMFEQ0',
      },
      {
        title: 'Foundations: Data, Data, Everywhere',
        issueDate: 'Dec 2024',
        credentialId: '8MG2THRLCNHB',
        link: 'https://www.coursera.org/account/accomplishments/verify/8MG2THRLCNHB',
        skills: ['Spreadsheets', 'Data Analysis', 'SQL', 'Data Visualization', 'Data Cleaning'],
        image: 'https://www.coursera.org/individual-course-badge-image/8MG2THRLCNHB',
      },
    ],
    ibm: [
      {
        title: 'Introduction to Software Engineering',
        issueDate: 'April 2025',
        credentialId: 'ZFYVMCALGRSR',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZFYVMCALGRSR',
        skills: ['Software Architecture', 'Programming Principles', 'Agile and Scrum', 'Software Engineering', 'Software Development Lifecycle (SDLC)'],
        image: 'https://www.coursera.org/individual-course-badge-image/ZFYVMCALGRSR',
      },
      {
        title: 'Exploratory Data Analysis for Machine Learning',
        issueDate: 'Dec 2024',
        credentialId: 'KNYHNHNCTUQ4',
        link: 'https://www.coursera.org/account/accomplishments/verify/KNYHNHNCTUQ4',
        skills: ['Artificial Intelligence (AI)', 'Machine Learning', 'Feature Engineering', 'Statistical Hypothesis Testing', 'Exploratory Data Analysis'],
        image: 'https://www.coursera.org/individual-course-badge-image/KNYHNHNCTUQ4',
      },
    ],
    cisco: [
      {
        title: 'Introduction to Cyber Security',
        issueDate: '16 Feb 2025',
        credentialId: '#',
        link: 'https://www.credly.com/badges/4aa8a6c5-4846-489b-8ffa-890b1fb4dfd1',
        skills: ['Cyber Best Practices', 'Cybersecurity', 'Network Vulnerabilities', 'Privacy and Data Confidentiality', 'Threat Detection'],
        image: ciscoBadge,
        displayBadge: true,
      },
    ],
  };

  const renderCertificationCard = (cert: any, company: string, showLogo = false) => (
    <AchievementCard
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {showLogo && (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          filter: (theme) => theme.palette.mode === 'dark' ? 'brightness(1.2)' : 'none',
        }}>
          <CompanyLogo
            src={company === 'google' ? googleLogo : company === 'ibm' ? ibmLogo : ciscoLogo}
            alt={`${company.toUpperCase()} Logo`}
            className="company-logo"
          />
        </Box>
      )}
      {cert.displayBadge && (
        <CertBadge src={cert.image} alt={`${cert.title} Badge`} />
      )}
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        Issued {cert.issueDate}
        {cert.credentialId !== '#' && (
          <>
            · Credential ID {cert.credentialId}
          </>
        )}
        {cert.link !== '#' && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => window.open(cert.link, '_blank')}
            sx={{
              py: 0.2,
              px: 1.5,
              fontSize: '0.75rem',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'rgba(100, 255, 218, 0.05)',
              },
            }}
          >
            Verify ↗
          </Button>
        )}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          mt: 3,
        }}
      >
        {cert.skills.map((skill: string) => (
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
  );

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
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
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
            {Object.entries(certifications).map(([company, certs]) => {
              // For companies with single certificate
              if (certs.length === 1) {
                return (
                  <Grid item xs={12} md={6} key={company}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {renderCertificationCard(certs[0], company, true)}
                    </motion.div>
                  </Grid>
                );
              }

              // For companies with multiple certificates
              const isExpanded = expandedCompanies[company] || false;
              const visibleCerts = isExpanded ? certs : certs.slice(0, 4);
              
              return (
                <Grid item xs={12} key={company}>
                  <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                    <CompanyLogo
                      src={company === 'google' ? googleLogo : company === 'ibm' ? ibmLogo : ciscoLogo}
                      alt={`${company.toUpperCase()} Logo`}
                    />
                  </Box>
                  <Box>
                    <Grid container spacing={3}>
                      {visibleCerts.map((cert, index) => (
                        <Grid item xs={12} md={6} key={cert.credentialId}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                              opacity: !isExpanded && index >= 4 ? 0.4 : 1,
                              filter: !isExpanded && index >= 4 ? 'grayscale(80%)' : 'none',
                              pointerEvents: !isExpanded && index >= 4 ? 'none' : 'auto',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {renderCertificationCard(cert, company)}
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  {certs.length > 4 && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                      <Button
                        onClick={() => setExpandedCompanies(prev => ({ ...prev, [company]: !prev[company] }))}
                        variant="outlined"
                        color="primary"
                        sx={{
                          borderColor: 'rgba(100, 255, 218, 0.3)',
                          '&:hover': {
                            borderColor: '#64ffda',
                            backgroundColor: 'rgba(100, 255, 218, 0.05)',
                          },
                        }}
                      >
                        {isExpanded ? 'Show Less' : `Show All ${certs.length} Certifications`}
                      </Button>
                    </Box>
                  )}
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Certifications;
