import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  border: '1px solid rgba(100, 255, 218, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
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
      demo: '#'
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
            <span>Some Things I've Built</span>
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ProjectCard>
                    <CardContent sx={{ height: '100%', p: { xs: 2, sm: 3 } }}>
                      <Typography variant="h6" gutterBottom color="primary" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {project.tags.map((tag) => (
                          <Typography
                            key={tag}
                            variant="caption"
                            sx={{
                              color: 'primary.main',
                              border: '1px solid',
                              borderColor: 'primary.main',
                              borderRadius: 1,
                              px: 1,
                              py: 0.5,
                              fontSize: { xs: '0.7rem', sm: '0.8rem' },
                            }}
                          >
                            {tag}
                          </Typography>
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        {project.title !== 'Low-Latency Object Detection in Autonomous Vehicles' && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 0.5,
                              fontSize: { xs: '0.85rem', sm: '0.9rem' }
                            }}
                          >
                            <GitHubIcon fontSize="small" />
                            Code
                          </Link>
                        )}
                      </Box>
                    </CardContent>
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