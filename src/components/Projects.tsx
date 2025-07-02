import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Box, Link, Container, Select, MenuItem, FormControl, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, Launch as LaunchIcon, Code as CodeIcon, Web as WebIcon, Storage as DatabaseIcon, School as EducationIcon } from '@mui/icons-material';
import aghLogo from '../assets/AGH_logo.png';

// Styled components
const ProjectsSection = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 2),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
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
}));

const ProjectsContent = styled(Box)(({ }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  position: 'relative',
  zIndex: 1,
}));

const CategoryFilters = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));

const CategoryPill = styled(motion.button)<{ active: boolean }>(({ theme, active }) => ({
  background: active
    ? theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.15)'
      : 'rgba(0, 0, 0, 0.08)'
    : theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(15px) saturate(180%)',
  WebkitBackdropFilter: 'blur(15px) saturate(180%)',
  border: `1px solid ${active
    ? theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.4)'
      : 'rgba(0, 0, 0, 0.2)'
    : theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(255, 255, 255, 0.6)'
  }`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3),
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: active ? theme.palette.text.primary : theme.palette.text.secondary,
  fontSize: '0.95rem',
  fontWeight: active ? 600 : 500,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: active
    ? theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(100, 255, 218, 0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
    : theme.palette.mode === 'dark'
      ? '0 4px 16px rgba(0, 0, 0, 0.2)'
      : '0 4px 16px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.1)'
      : 'rgba(255, 255, 255, 0.9)',
    transform: 'translateY(-3px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(100, 255, 218, 0.15)'
      : '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 2),
    fontSize: '0.85rem',
  },
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  },
}));

const ProjectCard = styled(motion.div)(({ theme }) => ({
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(10, 25, 47, 0.5)',
  backdropFilter: 'blur(15px) saturate(180%)',
  WebkitBackdropFilter: 'blur(15px) saturate(180%)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.6)'}`,
  borderRadius: '20px',
  padding: theme.spacing(3.5),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    : '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, #64ffda, #00d4aa)'
      : 'linear-gradient(90deg, #0066cc, #0ea5e9)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    borderRadius: '20px',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    background: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(255, 255, 255, 0.85)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      : '0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1)',
    '&::before': {
      transform: 'scaleX(1)',
    },
    '&::after': {
      opacity: 1,
    },
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: '16px',
  },
}));

const ProjectHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ProjectLogo = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  flexShrink: 0,
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'rgba(255, 255, 255, 0.1)',
  },

  '& img': {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
    borderRadius: '6px',
  },

  '& svg': {
    fontSize: '24px',
    color: theme.palette.primary.main,
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: 1.3,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #ffffff 0%, #a8b2d1 100%)'
    : 'linear-gradient(135deg, #1a1a2e 0%, #4a5568 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
}));

const TechTagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const TechTag = styled(motion.span)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.08)'
    : 'rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
  borderRadius: '20px',
  padding: theme.spacing(0.8, 1.8),
  fontSize: '0.85rem',
  fontWeight: 500,
  color: theme.palette.mode === 'dark' ? '#64ffda' : '#0066cc',
  display: 'inline-block',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)',
    transition: 'left 0.5s ease',
  },
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.12)'
      : 'rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-3px)',
    '&::before': {
      left: '100%',
    },
  },
}));

const ProjectActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: 'auto',
}));

const ProjectLink = styled(Link)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
  borderRadius: '12px',
  padding: theme.spacing(1.5),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'dark' ? '#64ffda' : '#0066cc',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  minWidth: '52px',
  height: '52px',
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.1)'
      : 'rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 25px rgba(0, 0, 0, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
}));

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const categories = [
    { name: 'All', icon: <CodeIcon />, count: 5 },
    { name: 'Research', icon: <CodeIcon />, count: 1 },
    { name: 'Web Apps', icon: <WebIcon />, count: 2 },
    { name: 'Database', icon: <DatabaseIcon />, count: 1 },
    { name: 'Education', icon: <EducationIcon />, count: 1 },
  ];

  const projects = [
    {
      title: 'Low-Latency Object Detection in Autonomous Vehicles',
      description: 'Conducted research on quality of Dynamic Vision Sensors (DVS) and RGB cameras for low-latency object detection in autonomous vehicles. Developed synthetic AEDAT datasets using v2e software and evaluated their quality through metrics such as Mean Squared Error (MSE), Structural Similarity Index (SSIM), polarity accuracy, and temporal precision.',
      tags: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
      category: 'Research',
      github: '#',
      demo: '#',
      logo: aghLogo,
      featured: true
    },
    {
      title: 'Database Project',
      description: 'Developed a taxonomy management system using PostgreSQL and Python, focusing on database setup, CSV data import, and creating a Python utility for managing taxonomy nodes. Implemented functions to query hierarchical relationships, rename nodes, and identify root nodes, enhancing data query efficiency by 20%.',
      tags: ['Python', 'PostgreSQL', 'Database Design', 'Data Management'],
      category: 'Database',
      github: 'https://github.com/aidankst/DBProject',
      demo: '#'
    },
    {
      title: 'Education Agency Management App',
      description: 'Developed a Python-based web application using Flask to centralize workflow management for education agencies, reducing administrative workload by 30%. Implemented key features including client management, invoice generation, automated email notifications, and information tracking.',
      tags: ['Python', 'Flask', 'PostgreSQL', 'Web Development'],
      category: 'Web Apps',
      github: 'https://github.com/aidankst/Education_Agency_Management_App',
      demo: '#'
    },
    {
      title: 'School Management System',
      description: 'Designed and implemented a web-based application for Education Center using Flask, PostgreSQL, HTML5, CSS, and Bootstrap. Streamlined the management of students, courses, and payments, reducing administrative errors by 15% and improving user experience by 20%.',
      tags: ['Flask', 'PostgreSQL', 'HTML5', 'CSS', 'Bootstrap'],
      category: 'Education',
      github: 'https://github.com/aidankst/School_Management_Web_App',
      demo: '#'
    },
    {
      title: 'QR Code Attendance System',
      description: 'Collaborated on a QR code-based attendance tracking system using Python, Flask, Firebase Realtime Database, and SQL. Features included employee record management, secure QR code scanning, and flexible deployment on web servers or cloud platforms.',
      tags: ['Python', 'Flask', 'Firebase', 'SQL'],
      category: 'Web Apps',
      github: 'https://github.com/aidankst/qr_code_attendance_system',
      demo: '#'
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container maxWidth="lg">
        <ProjectsContent>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={(theme) => ({
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #ffffff 0%, #a8b2d1 100%)'
                : 'linear-gradient(135deg, #1a1a2e 0%, #4a5568 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            })}
          >
            Projects
          </Typography>
          
          <Typography
            variant="body1"
            sx={(theme) => ({
              textAlign: 'center',
              mb: 4,
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.6
            })}
          >
            A collection of projects showcasing my expertise in various technologies and domains.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {isMobile ? (
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                sx={{
                  borderRadius: '16px',
                  background: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.125)' : 'rgba(255, 255, 255, 0.2)'}`,
                  boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(31, 38, 135, 0.17)',
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    padding: '14px 18px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      borderRadius: '16px',
                      background: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.125)' : 'rgba(255, 255, 255, 0.2)'}`,
                    },
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category.name} value={category.name} sx={{ gap: 1.5, padding: '12px 18px' }}>
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <CategoryFilters>
              {categories.map((category) => (
                <CategoryPill
                  key={category.name}
                  active={activeCategory === category.name}
                  onClick={() => setActiveCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  {category.name}
                  <Box
                      component="span"
                      sx={{
                        ml: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        background: activeCategory === category.name 
                          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))' 
                          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        border: activeCategory === category.name 
                          ? '1px solid rgba(255, 255, 255, 0.3)' 
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: activeCategory === category.name 
                          ? '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                          : '0 1px 4px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        color: activeCategory === category.name ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        minWidth: '24px',
                        textAlign: 'center',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {category.count}
                    </Box>
                </CategoryPill>
              ))}
            </CategoryFilters>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ProjectsGrid>
              {filteredProjects.map((project, index) => (
                <motion.div key={`${activeCategory}-${index}`} variants={itemVariants}>
                  <ProjectCard>
                    <ProjectHeader>
                       <ProjectLogo>
                          {project.logo ? (
                            <img src={project.logo} alt={project.title} />
                          ) : (
                            <CodeIcon />
                          )}
                        </ProjectLogo>
                       <Box>
                         <ProjectTitle>{project.title}</ProjectTitle>
                         {project.featured && (
                           <Box
                             sx={{
                               display: 'inline-block',
                               px: 1,
                               py: 0.25,
                               borderRadius: '12px',
                               fontSize: '0.7rem',
                               fontWeight: 600,
                               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                               color: 'white',
                               mt: 0.5
                             }}
                           >
                             Featured
                           </Box>
                         )}
                       </Box>
                     </ProjectHeader>

                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <TechTagsContainer>
                      {project.tags.map((tag, tagIndex) => (
                        <TechTag
                          key={tagIndex}
                          whileHover={{ y: -2, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </TechTag>
                      ))}
                    </TechTagsContainer>

                    <ProjectActions>
                       {project.github && (
                         <ProjectLink
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <GitHubIcon sx={{ fontSize: 18, mr: 1 }} />
                           Code
                         </ProjectLink>
                       )}
                       {project.demo && (
                         <ProjectLink
                           href={project.demo}
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <LaunchIcon sx={{ fontSize: 18, mr: 1 }} />
                           Demo
                         </ProjectLink>
                       )}
                     </ProjectActions>
                  </ProjectCard>
                </motion.div>
              ))}
            </ProjectsGrid>
          </motion.div>
        </AnimatePresence>
       </ProjectsContent>
      </Container>
     </ProjectsSection>
   );
};

export default Projects;