import { motion } from 'framer-motion';
import { Typography, Container, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Work as WorkIcon } from '@mui/icons-material';
import aghLogo from '../assets/AGH_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
  // padding: 0,
  position: 'relative',
  overflow: 'hidden',
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

const TimelineConnector = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '10px',
  top: '40px',
  bottom: 0,
  width: '2px',
  background: `linear-gradient(180deg, 
    ${theme.palette.primary.main} 0%, 
    rgba(100, 255, 218, 0.2) 100%)`,
  zIndex: 0,
}));

const ExperienceCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  padding: theme.spacing(3),
  marginLeft: 0,
  background: theme.palette.mode === 'light' ? '#ffffff' : theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-27px',
    top: '40px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.default}`,
    zIndex: 1,
  },
}));

const AchievementChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: 'rgba(100, 255, 218, 0.03)',
  border: '1px solid rgba(100, 255, 218, 0.15)',
  color: theme.palette.primary.main,
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.08)',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 8px 16px rgba(100, 255, 218, 0.15)',
    border: '1px solid rgba(100, 255, 218, 0.3)',
  },
}));

const CompanyIcon = styled(WorkIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  maxWidth: '100px',
  height: '40px',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'transparent',
  padding: 0,
  display: 'inline-block',
  borderRadius: '4px',
  opacity: 0.8,
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
}));

const PeriodBadge = styled(Typography)(({ theme }) => ({
  padding: '6px 12px',
  borderRadius: '4px',
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.text.secondary,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'translateZ(0)',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(100, 255, 218, 0.2)',
  }
}));

const Experience = () => {
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

  const experiences = {
    agh: [
      {
        title: 'Machine Learning Research Intern',
        company: 'AGH University of Science and Technology',
        period: 'June, 2024 - Present',
        achievements: ['15% dataset accuracy improvement', '20% error reduction', '10% model performance boost', '95% on-time delivery'],
        description: [
          'Assisted in data collection and analysis for research projects, focusing on autonomous driving models, resulting in a 15% improvement in dataset accuracy',
          'Developed Python scripts to verify dataset quality using metrics such as MSE, SSIM, polarity accuracy, and temporal precision, reducing data errors by 20%',
          'Contributed to improving dataset reliability for object detection by implementing automated quality assessment pipelines, which increased model performance by 10%',
          'Collaborated with research teams to ensure project success and timely delivery of results, achieving a 95% on-time project completion rate',
        ],
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'Computer Vision', 'Quality Assessment']
      },
    ],
    haine: [
      {
        title: 'Data Analyst',
        company: 'Haine Food Production Co., Ltd',
        period: 'Dec 2023 - Feb 2025',
        achievements: ['15% delivery efficiency', 'Real-time tracking', 'Automated reporting', 'Predictive modeling'],
        description: [
          'Developed and maintained interactive dashboards using SQL and Python, improving data accessibility for key stakeholders',
          'Conducted in-depth data analysis to optimize supply chain operations, reducing delivery inefficiencies by 15%',
          'Designed predictive models to forecast product demand, enhancing inventory management and minimizing overstocking',
          'Automated data extraction and reporting processes, reducing manual workload and improving data accuracy',
        ],
        skills: ['SQL', 'Python', 'Data Analysis', 'Predictive Modeling', 'Dashboard Development', 'Supply Chain Analytics']
      },
      {
        title: 'Data Analyst (Intern)',
        company: 'Haine Food Production Co., Ltd',
        period: 'June 2023 - Dec 2023',
        achievements: ['Improved data reliability', 'Real-time inventory', 'Workflow optimization', 'Data visualization'],
        description: [
          'Assisted in structuring and cleaning large datasets for sales and production analysis, improving data reliability',
          'Created data visualizations using Excel and Matplotlib to identify trends and improve operational efficiency',
          'Supported the implementation of a real-time inventory tracking system, reducing stock discrepancies',
          'Conducted exploratory data analysis to identify key performance bottlenecks and optimize workflow processes',
        ],
        skills: ['Excel', 'Python', 'Matplotlib', 'Data Cleaning', 'Data Visualization', 'Inventory Management']
      },
    ],
    oriental: [
      {
        title: 'OJT Admin Staff',
        company: 'Oriental Apex Company Limited',
        period: 'March, 2021 - July, 2021',
        achievements: ['98% response rate', '20% efficiency gain', '95% positive feedback'],
        description: [
          'Managed administrative tasks, including phone communication, scheduling, and email correspondence, handling over 50 calls and emails daily with a 98% response rate',
          'Organized meetings and appointments, ensuring smooth operations and effective time management, resulting in a 20% increase in meeting efficiency',
          'Assisted visitors and provided support to ensure a welcoming and professional environment, receiving a 95% positive feedback rate from visitors',
        ],
        skills: ['Communication', 'Time Management', 'Organization', 'Customer Service']
      },
    ],
  };

  return (
    <StyledSection id="experience">
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
            <span>Where I've Worked</span>
          </Typography>

          <Box sx={{ position: 'relative', pl: 4, pb: 4 }}>
            <TimelineConnector />
            {Object.entries(experiences).map(([groupKey, positions]) => (
              <motion.div
                key={groupKey}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <ExperienceCard>
                  {/* Company Header */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid rgba(100, 255, 218, 0.2)'
                  }}>
                    {positions[0].company === 'AGH University of Science and Technology' ? (
                      <CompanyLogo src={aghLogo} alt="AGH University Logo" />
                    ) : (
                      <CompanyIcon />
                    )}
                    <Box>
                      <Typography variant="h5" color="primary" sx={{ mb: 0.5 }}>
                        {positions[0].company}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        color="text.secondary"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        {positions[0].company === 'AGH University of Science and Technology'
                          ? '🇵🇱 🇪🇺 Krakow, Poland'
                          : positions[0].company === 'NUG - Volunteer'
                          ? 'Remote 🌐'
                          : '🇲🇲 Yangon, Myanmar'}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Positions List */}
                  {positions.map((exp, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        ml: 2,
                        pl: 2,
                        borderLeft: '2px solid rgba(100, 255, 218, 0.2)',
                        '&:not(:last-child)': { mb: 3 }
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        mb: 1 
                      }}>
                        <Typography 
                          variant="subtitle1" 
                          color="text.primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {exp.title}
                        </Typography>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PeriodBadge variant="subtitle2">
                            {exp.period}
                          </PeriodBadge>
                        </motion.div>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        {exp.description.map((desc, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: 'flex',
                              mb: 1.5,
                              lineHeight: 1.7,
                              alignItems: 'flex-start',
                              '&:before': {
                                content: '"•"',
                                mr: 1,
                                flexShrink: 0,
                                mt: '2px'
                              }
                            }}
                          >
                            <Box component="span" sx={{ textAlign: 'left' }}>
                              {desc}
                            </Box>
                          </Typography>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.skills.map((skill, i) => (
                          <AchievementChip 
                            key={i} 
                            label={skill} 
                            size="small"
                            sx={{
                              bgcolor: 'rgba(100, 255, 218, 0.1)',
                              '&:hover': {
                                bgcolor: 'rgba(100, 255, 218, 0.2)',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  ))}
                </ExperienceCard>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </StyledSection>
  );

};

export default Experience;