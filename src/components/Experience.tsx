import { motion } from 'framer-motion';
import { Typography, Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const TimelineItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: theme.palette.background.paper,
  border: '1px solid rgba(100, 255, 218, 0.1)',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-5px',
    top: '50%',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    transform: 'translateY(-50%)',
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
      description: [
        'Assisted in data collection and analysis for research projects, focusing on autonomous driving models, resulting in a 15% improvement in dataset accuracy',
        'Developed Python scripts to verify dataset quality using metrics such as MSE, SSIM, polarity accuracy, and temporal precision, reducing data errors by 20%',
        'Contributed to improving dataset reliability for object detection by implementing automated quality assessment pipelines, which increased model performance by 10%',
        'Collaborated with research teams to ensure project success and timely delivery of results, achieving a 95% on-time project completion rate',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'National Unity Government of Myanmar - Volunteer',
      period: 'March, 2024 - June, 2024',
      description: [
        'Designed and developed the architecture of a media monitoring tool to enable efficient tracking and analysis of media data',
        'Implemented backend functionalities, including user registration, login, authentication, and data security protocols, reducing system vulnerabilities by 30%',
        'Optimized backend performance through robust coding practices, improving application scalability by 25% and reducing server response time by 15%',
        'Collaborated with cross-functional teams to align technical development with organizational goals and user requirements, achieving a 90% user satisfaction rate',
      ],
    },
    {
      title: 'OJT Admin Staff',
      company: 'Oriental Apex Company Limited',
      period: 'March, 2021 - July, 2021',
      description: [
        'Managed administrative tasks, including phone communication, scheduling, and email correspondence, handling over 50 calls and emails daily with a 98% response rate',
        'Organized meetings and appointments, ensuring smooth operations and effective time management, resulting in a 20% increase in meeting efficiency',
        'Assisted visitors and provided support to ensure a welcoming and professional environment, receiving a 95% positive feedback rate from visitors',
      ],
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
              '&::before': {
                content: '""',
                flex: 1,
                height: '1px',
                background: 'rgba(100, 255, 218, 0.3)',
              },
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

          <Box sx={{ position: 'relative', ml: { xs: 2, md: 4 } }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <TimelineItem>
                  <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    {exp.title} @ {exp.company}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                    {exp.period}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
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
                </TimelineItem>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Experience;