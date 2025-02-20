import { motion } from 'framer-motion';
import { Typography, Container, Grid, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
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

const ProjectCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '2px solid rgba(100, 255, 218, 0.2)',
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3px',
    height: '0%',
    background: 'linear-gradient(180deg, #64ffda 0%, rgba(100, 255, 218, 0.3) 100%)',
    transition: 'height 0.3s ease-out',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '2px solid rgba(100, 255, 218, 0.4)',
    '&::before': {
      height: '100%',
    },
  },
}));

const ProjectLogo = styled('img')(({ theme }) => ({
  width: 'auto',
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

const TechTag = styled(motion.span)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: 'rgba(100, 255, 218, 0.05)',
  border: '1px solid rgba(100, 255, 218, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontSize: '0.75rem',
  display: 'inline-block',
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const ProjectLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: '1px solid rgba(100, 255, 218, 0.3)',
  padding: theme.spacing(1),
  borderRadius: '4px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const Projects = () => {
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

  const projects = [
    {
      title: 'Low-Latency Object Detection in Autonomous Vehicles',
      description: 'Conducted research on quality of Dynamic Vision Sensors (DVS) and RGB cameras for low-latency object detection in autonomous vehicles. Developed synthetic AEDAT datasets using v2e software and evaluated their quality through metrics such as Mean Squared Error (MSE), Structural Similarity Index (SSIM), polarity accuracy, and temporal precision.',
      tags: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
      github: '#',
      demo: '#',
      highlight: true
    },
    {
      title: 'Database Project',
      description: 'Developed a taxonomy management system using PostgreSQL and Python, focusing on database setup, CSV data import, and creating a Python utility for managing taxonomy nodes. Implemented functions to query hierarchical relationships, rename nodes, and identify root nodes, enhancing data query efficiency by 20%.',
      tags: ['Python', 'PostgreSQL', 'Database Design', 'Data Management'],
      github: 'https://github.com/aidankst/DBProject',
      demo: '#'
    },
    {
      title: 'Education Agency Management App',
      description: 'Developed a Python-based web application using Flask to centralize workflow management for education agencies, reducing administrative workload by 30%. Implemented key features including client management, invoice generation, automated email notifications, and information tracking.',
      tags: ['Python', 'Flask', 'PostgreSQL', 'Web Development'],
      github: 'https://github.com/aidankst/Education_Agency_Management_App',
      demo: '#'
    },
    {
      title: 'School Management System',
      description: 'Designed and implemented a web-based application for Education Center using Flask, PostgreSQL, HTML5, CSS, and Bootstrap. Streamlined the management of students, courses, and payments, reducing administrative errors by 15% and improving user experience by 20%.',
      tags: ['Flask', 'PostgreSQL', 'HTML5', 'CSS', 'Bootstrap'],
      github: 'https://github.com/aidankst/School_Management_Web_App',
      demo: '#'
    },
    {
      title: 'QR Code Attendance System',
      description: 'Collaborated on a QR code-based attendance tracking system using Python, Flask, Firebase Realtime Database, and SQL. Features included employee record management, secure QR code scanning, and flexible deployment on web servers or cloud platforms.',
      tags: ['Python', 'Flask', 'Firebase', 'SQL'],
      github: 'https://github.com/aidankst/qr_code_attendance_system',
      demo: '#'
    },
  ];

  return (
    <StyledSection id="projects">
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
            <span>Featured Projects</span>
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                md={project.highlight ? 12 : 6} 
                key={index}
              >
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ProjectCard
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {project.title === 'Low-Latency Object Detection in Autonomous Vehicles' && (
                        <ProjectLogo src={aghLogo} alt="AGH University Logo" />
                      )}
                      <Typography 
                        variant="h5" 
                        gutterBottom 
                        color="primary"
                        sx={{ 
                          fontSize: { xs: '1.25rem', sm: '1.5rem' },
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          lineHeight: 1.7,
                          mb: 3
                        }}
                      >
                        {project.description}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.tags.map((tag) => (
                          <TechTag
                            key={tag}
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {tag}
                          </TechTag>
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        {project.title !== 'Low-Latency Object Detection in Autonomous Vehicles' && (
                          <ProjectLink
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Source Code"
                          >
                            <GitHubIcon fontSize="small" />
                          </ProjectLink>
                        )}
                        {project.demo !== '#' && (
                          <ProjectLink
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Live Demo"
                          >
                            <OpenInNewIcon fontSize="small" />
                          </ProjectLink>
                        )}
                      </Box>
                    </Box>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default Projects;