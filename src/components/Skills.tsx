import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming & Technical",
    icon: '💻',
    skills: [
      { name: "Python", level: 95, description: "NumPy, Pandas, TensorFlow, Scikit-learn" },
      { name: "SQL", level: 90, description: "PostgreSQL, Query Optimization" },
      { name: "NoSQL", level: 80, description: "Firebase, Document Databases" },
      { name: "R", level: 75, description: "Statistical Analysis, Data Mining" },
      { name: "Flask", level: 85, description: "Web Development, API Design" },
      { name: "Git", level: 90, description: "Version Control, Collaboration" }
    ]
  },
  {
    title: "Data Analysis & Visualization",
    icon: '📊',
    skills: [
      { name: "Data Cleaning", level: 95, description: "ETL Processes, Data Quality" },
      { name: "Machine Learning", level: 90, description: "Supervised & Unsupervised Learning" },
      { name: "Tableau", level: 80, description: "Interactive Dashboards" },
      { name: "Matplotlib", level: 85, description: "Data Visualization, Plotting" },
      { name: "Excel", level: 90, description: "Advanced Functions, Pivot Tables" },
      { name: "BigQuery", level: 75, description: "Large-scale Data Analysis" }
    ]
  },
  {
    title: "Software Development & IT",
    icon: '🔧',
    skills: [
      { name: "Web Development", level: 85, description: "Full-stack Applications" },
      { name: "Database Design", level: 90, description: "Schema Design, Optimization" },
      { name: "Data Modeling", level: 85, description: "Conceptual & Logical Models" },
      { name: "Automation", level: 80, description: "Workflow Optimization" },
      { name: "Jupyter Notebook", level: 90, description: "Interactive Development" },
      { name: "Jira & Confluence", level: 75, description: "Project Management" }
    ]
  },
  {
    title: "Problem-Solving & Project",
    icon: '🗄️',
    skills: [
      { name: "System Optimization", level: 85, description: "Performance Improvement" },
      { name: "Object Detection", level: 80, description: "Computer Vision, ML Models" },
      { name: "Low-Latency Solutions", level: 75, description: "Real-time Processing" },
      { name: "Taxonomy Management", level: 90, description: "Hierarchical Data Systems" },
      { name: "Workflow Automation", level: 85, description: "Process Optimization" },
      { name: "Quality Assessment", level: 95, description: "Dataset Validation, Metrics" }
    ]
  },
  {
    title: "Soft Skills",
    icon: '👥',
    skills: [
      { name: "Problem Solving", level: 95, description: "Analytical Thinking" },
      { name: "Decision Making", level: 90, description: "Data-driven Decisions" },
      { name: "Collaboration", level: 90, description: "Team Leadership" },
      { name: "Time Management", level: 85, description: "Project Delivery" },
      { name: "Adaptability", level: 90, description: "Learning Agility" },
      { name: "Communication", level: 85, description: "Technical Documentation" }
    ]
  },
  {
    title: "Languages",
    icon: '🌐',
    skills: [
      { name: "Burmese", level: 100, description: "Native Speaker" },
      { name: "English", level: 95, description: "Fluent - Professional" },
      { name: "Polish", level: 30, description: "Beginner - Learning" },
      { name: "Chinese", level: 25, description: "Beginner - Basic" }
    ]
  }
];

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled components
const SkillsSection = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 2),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const SkillsContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gap: theme.spacing(6),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
  },
}));

const SkillsNavigation = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  },
}));

const NavItem = styled(motion.button)<{ active?: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5, 2),
  background: theme.palette.mode === 'dark'
    ? active ? 'rgba(100, 255, 218, 0.1)' : 'rgba(255, 255, 255, 0.05)'
    : active ? 'rgba(0, 102, 204, 0.1)' : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? active ? 'rgba(100, 255, 218, 0.3)' : 'rgba(255, 255, 255, 0.1)'
    : active ? 'rgba(0, 102, 204, 0.3)' : theme.palette.divider}`,
  borderRadius: '12px',
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textAlign: 'left',
  width: '100%',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.95rem',
  fontWeight: 500,
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.15)'
      : 'rgba(0, 102, 204, 0.15)',
    borderColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    transform: 'translateX(5px)',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
}));

const NavIcon = styled('div')(({ theme }) => ({
  fontSize: '1.2rem',
  width: '24px',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const SkillsDisplay = styled(Box)(() => ({
  minHeight: '600px',
}));

const SkillsHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(2),
  },
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
    fontSize: '1.5rem',
  },
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const SkillCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 25px rgba(0, 0, 0, 0.3)'
      : '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const SkillHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.text.primary,
  margin: 0,
  fontWeight: 600,
})) as typeof Typography;

const SkillPercentage = styled('span')(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  fontWeight: 600,
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.1)'
    : 'rgba(0, 102, 204, 0.1)',
  padding: theme.spacing(0.25, 1),
  borderRadius: '10px',
}));

const SkillProgress = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProgressTrack = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '6px',
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.1)'
    : 'rgba(0, 102, 204, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
  position: 'relative',
}));

const ProgressFill = styled(motion.div)(({ theme }) => ({
  height: '100%',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(90deg, #64ffda, #00d4aa)'
    : 'linear-gradient(90deg, #0066cc, #0ea5e9)',
  borderRadius: '3px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.3), transparent)',
    animation: `${shimmer} 2s infinite`,
  },
}));

const SkillDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  lineHeight: 1.4,
  margin: 0,
}));





const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.2
      }
    })
  };

  return (
    <SkillsSection id="skills">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              background: (theme) => theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #64ffda, #00d4aa)'
                : 'linear-gradient(90deg, #0066cc, #0ea5e9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills & Expertise
          </Typography>
        </motion.div>

        <SkillsContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SkillsNavigation>
              {skillCategories.map((category, index) => (
                <NavItem
                  key={index}
                  active={activeCategory === index}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <NavIcon>{category.icon}</NavIcon>
                  <span>{category.title}</span>
                </NavItem>
              ))}
            </SkillsNavigation>
          </motion.div>

          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SkillsDisplay>
              <SkillsHeader>
                <CategoryIcon>
                  {skillCategories[activeCategory].icon}
                </CategoryIcon>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                  {skillCategories[activeCategory].title}
                </Typography>
              </SkillsHeader>

              <SkillsGrid>
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    
                    <SkillProgress>
                      <ProgressTrack>
                        <ProgressFill
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate="visible"
                        />
                      </ProgressTrack>
                    </SkillProgress>
                    
                    <SkillDescription>{skill.description}</SkillDescription>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </SkillsDisplay>
          </motion.div>
        </SkillsContent>
      </Box>
    </SkillsSection>
  );
};

export default Skills;
