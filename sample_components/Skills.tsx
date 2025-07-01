import React from 'react';
import { motion } from 'framer-motion';
// Using emojis instead of react-icons to avoid TypeScript compatibility issues
import './Skills.css';

const Skills: React.FC = () => {
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-content">
          <motion.div
            className="skills-navigation"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`nav-item ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="nav-icon">{category.icon}</div>
                <span className="nav-title">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="skills-display"
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="skills-header">
              <div className="category-icon">
                {skillCategories[activeCategory].icon}
              </div>
              <h3>{skillCategories[activeCategory].title}</h3>
            </div>

            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="skill-header">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-progress">
                    <div className="progress-track">
                      <motion.div
                        className="progress-fill"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-summary glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Technical Proficiency Overview</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-icon">💻</div>
              <div className="summary-content">
                <h4>Programming</h4>
                <p>Expert in Python, SQL, and web development frameworks</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">📊</div>
              <div className="summary-content">
                <h4>Data Science</h4>
                <p>Advanced machine learning and data analysis capabilities</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🔧</div>
              <div className="summary-content">
                <h4>System Design</h4>
                <p>Full-stack development and database architecture</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">👥</div>
              <div className="summary-content">
                <h4>Leadership</h4>
                <p>Strong collaboration and project management skills</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;