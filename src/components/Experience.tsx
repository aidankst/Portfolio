import { motion } from 'framer-motion';
import { Typography, Container, Box, Chip, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Work as WorkIcon } from '@mui/icons-material';
import aghLogo from '../assets/AGH_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4, 1),
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
  marginBottom: theme.spacing(5),
  padding: theme.spacing(4),
  marginLeft: 0,
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(10, 25, 47, 0.5)',
  borderRadius: theme.spacing(3),
  boxShadow: `0 8px 32px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.15)' : 'rgba(0, 0, 0, 0.2)'}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 40px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-29px',
    top: '45px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    border: `3px solid ${theme.palette.background.default}`,
    zIndex: 1,
    boxShadow: `0 0 10px 0 ${theme.palette.primary.main}99`,
  },
}));

const AchievementChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  background: 'rgba(100, 255, 218, 0.05)',
  border: '1px solid rgba(100, 255, 218, 0.2)',
  color: theme.palette.primary.main,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 8px 16px rgba(100, 255, 218, 0.2)',
    border: '1px solid rgba(100, 255, 218, 0.4)',
  },
}));

const CompanyIcon = styled(WorkIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  maxWidth: '110px',
  height: '45px',
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : 'transparent',
  padding: theme.spacing(0.5),
  display: 'inline-block',
  borderRadius: '8px',
  opacity: 0.9,
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.08)',
  },
}));

const PeriodBadge = styled(Typography)(({ theme }) => ({
  padding: '8px 14px',
  borderRadius: '8px',
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

const TypeBadge = styled(Typography)(({ theme }) => ({
  padding: '6px 14px',
  borderRadius: '16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  fontWeight: 700,
  fontSize: '0.8rem',
  display: 'inline-block',
  marginLeft: theme.spacing(2),
  boxShadow: `0 0 15px ${theme.palette.primary.main}55`,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));


const Experience = () => {
  const theme = useTheme();
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
        title: 'Machine Learning Research',
        type: 'Intern',
        company: 'AGH University of Science and Technology',
        period: 'June, 2024 - Present',
        description: [
          { emoji: '✨', text: 'Assisted in data collection and analysis for research projects, focusing on autonomous driving models, resulting in a 15% improvement in dataset accuracy' },
          { emoji: '💻', text: 'Developed Python scripts to verify dataset quality using metrics such as MSE, SSIM, polarity accuracy, and temporal precision, reducing data errors by 20%' },
          { emoji: '📊', text: 'Contributed to improving dataset reliability for object detection by implementing automated quality assessment pipelines, which increased model performance by 10%' },
          { emoji: '🚀', text: 'Collaborated with research teams to ensure project success and timely delivery of results, achieving a 95% on-time project completion rate' },
        ],
        skills: ['Python', 'Machine Learning', 'Data Analysis', 'Computer Vision', 'Quality Assessment']
      },
    ],
    haine: [
      {
        title: 'Data Analyst',
        type: 'Full-time',
        company: 'Haine Food Production Co., Ltd',
        period: 'Dec 2023 - Feb 2025',
        description: [
          { emoji: '📈', text: 'Developed and maintained interactive dashboards using SQL and Python, improving data accessibility for key stakeholders' },
          { emoji: '🚚', text: 'Conducted in-depth data analysis to optimize supply chain operations, reducing delivery inefficiencies by 15%' },
          { emoji: '📦', text: 'Designed predictive models to forecast product demand, enhancing inventory management and minimizing overstocking' },
          { emoji: '🤖', text: 'Automated data extraction and reporting processes, reducing manual workload and improving data accuracy' },
        ],
        skills: ['SQL', 'Python', 'Data Analysis', 'Predictive Modeling', 'Dashboard Development', 'Supply Chain Analytics']
      },
      {
        title: 'Data Analyst',
        type: 'Intern',
        company: 'Haine Food Production Co., Ltd',
        period: 'June 2023 - Dec 2023',
        description: [
          { emoji: '🧹', text: 'Assisted in structuring and cleaning large datasets for sales and production analysis, improving data reliability' },
          { emoji: '📊', text: 'Created data visualizations using Excel and Matplotlib to identify trends and improve operational efficiency' },
          { emoji: '📉', text: 'Supported the implementation of a real-time inventory tracking system, reducing stock discrepancies' },
          { emoji: '⚙️', text: 'Conducted exploratory data analysis to identify key performance bottlenecks and optimize workflow processes' },
        ],
        skills: ['Excel', 'Python', 'Matplotlib', 'Data Cleaning', 'Data Visualization', 'Inventory Management']
      },
    ],
    oriental: [
      {
        title: 'Admin Staff',
        type: 'OJT',
        company: 'Oriental Apex Company Limited',
        period: 'March, 2021 - July, 2021',
        description: [
          { emoji: '📞', text: 'Managed administrative tasks, including phone communication, scheduling, and email correspondence, handling over 50 calls and emails daily with a 98% response rate' },
          { emoji: '📅', text: 'Organized meetings and appointments, ensuring smooth operations and effective time management, resulting in a 20% increase in meeting efficiency' },
          { emoji: '😊', text: 'Assisted visitors and provided support to ensure a welcoming and professional environment, receiving a 95% positive feedback rate from visitors' },
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
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
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
                    gap: 2.5,
                    mb: 3.5,
                    pb: 3,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
                  }}>
                    {positions[0].company === 'AGH University of Science and Technology' ? (
                      <CompanyLogo src={aghLogo} alt="AGH University Logo" />
                    ) : (
                      <CompanyIcon />
                    )}
                    <Box>
                      <Typography variant="h5" color="primary" sx={{ mb: 0.5, fontWeight: 700 }}>
                        {positions[0].company}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          textAlign: { xs: 'center', sm: 'left' },
                          justifyContent: { xs: 'center', sm: 'flex-start' },
                          fontWeight: 500,
                        }}
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
                        ml: { xs: 0, sm: 2 },
                        pl: { xs: 0, sm: 2 },
                        borderLeft: { xs: 'none', sm: `2px solid rgba(100, 255, 218, 0.2)` },
                        '&:not(:last-child)': { mb: 4 }
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: { xs: 2, sm: 1.5 },
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 1.5, sm: 0 }
                      }}>
                        <Typography
                          variant="h6"
                          color="text.primary"
                          sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}
                        >
                          {exp.title}
                          <TypeBadge>{exp.type}</TypeBadge>
                        </Typography>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <PeriodBadge variant="subtitle2">
                            {exp.period}
                          </PeriodBadge>
                        </motion.div>
                      </Box>
                      <Box sx={{ mb: 2.5 }}>
                        {exp.description.map((desc, i) => (
                          <Typography
                            key={i}
                            variant="body1"
                            color="text.secondary"
                            sx={{
                              display: 'flex',
                              mb: 1.5,
                              lineHeight: 1.8,
                              fontSize: { xs: '0.95rem', sm: '1rem' },
                              alignItems: 'flex-start',
                              '&:before': {
                                content: `'${desc.emoji}'`,
                                mr: 2,
                                flexShrink: 0,
                                mt: '4px',
                                fontSize: '1.2rem',
                              }
                            }}
                          >
                            <Box component="span" sx={{ textAlign: 'left' }}>
                              {desc.text}
                            </Box>
                          </Typography>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, '& .MuiChip-root': { fontSize: { xs: '0.75rem', sm: '0.85rem' } } }}>
                        {exp.skills.map((skill, i) => (
                          <AchievementChip
                            key={i}
                            label={skill}
                            size="medium"
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