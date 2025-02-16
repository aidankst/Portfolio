import { motion } from 'framer-motion';
import { Typography, Container, Box, Paper, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Work as WorkIcon } from '@mui/icons-material';
import aghLogo from '../assets/AGH_logo.png';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
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

const ExperienceCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(100, 255, 218, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: 'linear-gradient(180deg, #64ffda 0%, rgba(100, 255, 218, 0.3) 100%)',
    borderRadius: '4px 0 0 4px',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
    background: 'rgba(255, 255, 255, 0.03)',
    '& .achievement-chip': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
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
  width: 'auto',
  height: '40px',
  marginBottom: theme.spacing(2),
  opacity: 0.8,
  transition: 'all 0.3s ease',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.05)',
  },
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

  const experiences = [
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
    {
      title: 'Backend Developer',
      company: 'NUG - Volunteer',
      period: 'March, 2024 - June, 2024',
      achievements: ['30% security improvement', '25% better scalability', '15% faster response', '90% satisfaction'],
      description: [
        'Designed and developed the architecture of a media monitoring tool to enable efficient tracking and analysis of media data',
        'Implemented backend functionalities, including user registration, login, authentication, and data security protocols, reducing system vulnerabilities by 30%',
        'Optimized backend performance through robust coding practices, improving application scalability by 25% and reducing server response time by 15%',
        'Collaborated with cross-functional teams to align technical development with organizational goals and user requirements, achieving a 90% user satisfaction rate',
      ],
      skills: ['Python', 'Flask', 'Database Design', 'API Development', 'Security Protocols']
    },
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
  ];

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

          <Box sx={{ position: 'relative' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ExperienceCard>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    {exp.company === 'AGH University of Science and Technology' ? (
                      <CompanyLogo src={aghLogo} alt="AGH University Logo" />
                    ) : (
                      <CompanyIcon />
                    )}
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' }, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        {exp.company === 'AGH University of Science and Technology' ? (
                          <>
                            🇵🇱 🇪🇺 Krakow, Poland
                          </>
                        ) : exp.company === 'NUG - Volunteer' ? (
                          <>Remote 🌐</>
                        ) : (
                          <>🇲🇲 Yangon, Myanmar</>
                        )}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      Key Achievements
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {exp.achievements.map((achievement, i) => (
                        <AchievementChip
                          key={i}
                          label={achievement}
                          className="achievement-chip"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      Responsibilities
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {exp.description.map((item, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1, textAlign: 'justify', fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                      Technologies & Skills
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {exp.skills.map((skill, i) => (
                        <AchievementChip
                          key={i}
                          label={skill}
                          className="achievement-chip"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
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