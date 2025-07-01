import React from 'react';
import { motion } from 'framer-motion';
// Using emojis instead of react-icons to avoid TypeScript compatibility issues
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Low-Latency Object Detection in Autonomous Vehicles",
      description: "Researched DVS and RGB camera quality for low-latency object detection in autonomous vehicles. Created synthetic AEDAT datasets with v2e, assessed dataset quality using Mean Squared Error (MSE), Structural Similarity Index Measure (SSIM), and accuracy metrics, achieving 95% evaluation accuracy.",
      technologies: ["Python", "Computer Vision", "DVS", "RGB Camera", "AEDAT", "v2e", "MSE", "SSIM"],
      category: "Research",
      icon: '📊',
      achievements: ["95% evaluation accuracy", "Synthetic dataset generation", "Quality assessment pipeline"]
    },
    {
      title: "Taxonomy Management System",
      description: "Built a comprehensive taxonomy management system with PostgreSQL and Python, implementing hierarchical query functions to enhance data query efficiency by 20%. The system provides intuitive data organization and retrieval capabilities.",
      technologies: ["Python", "PostgreSQL", "Database Design", "Hierarchical Queries", "Data Management"],
      category: "Backend",
      icon: '🗄️',
      achievements: ["20% query efficiency improvement", "Hierarchical data structure", "Scalable architecture"]
    },
    {
      title: "Education Agency Management App",
      description: "Created a Flask-based web application to automate workflows for education agencies, reducing administrative workload by 30% and increasing operational efficiency by 25%. Features include student management, course scheduling, and automated reporting.",
      technologies: ["Flask", "Python", "Web Development", "Automation", "Workflow Management"],
      category: "Full-Stack",
      icon: '⚙️',
      achievements: ["30% workload reduction", "25% efficiency increase", "Automated workflows"]
    },
    {
      title: "School Management System",
      description: "Designed a comprehensive web application using Flask and PostgreSQL for an Education Center, cutting administrative errors by 15% and boosting user experience by 20%. Includes student records, grade management, and parent communication features.",
      technologies: ["Flask", "PostgreSQL", "Web Development", "User Experience", "Database Management"],
      category: "Full-Stack",
      icon: '💻',
      achievements: ["15% error reduction", "20% UX improvement", "Comprehensive management"]
    },
    {
      title: "QR Code Attendance System",
      description: "Collaborated on a Python and Flask-based QR code attendance system, integrating Firebase and SQL to reduce tracking time by 30%. The system provides real-time attendance monitoring and automated report generation.",
      technologies: ["Python", "Flask", "Firebase", "SQL", "QR Code", "Real-time Processing"],
      category: "Full-Stack",
      icon: '📊',
      achievements: ["30% time reduction", "Real-time tracking", "Automated reporting"]
    },
    {
      title: "Published Research Paper",
      description: "Authored 'Evaluating Synthetic vs. Real Dynamic Vision Sensor Data for SNN-Based Object Classification' for Konferencja KU KDM 2025. Assessed synthetic and real DVS dataset quality using Python, achieving 95% evaluation accuracy with advanced metrics.",
      technologies: ["Python", "Research", "DVS", "SNN", "Object Classification", "Data Analysis"],
      category: "Research",
      icon: '📊',
      achievements: ["Published paper", "95% accuracy", "Advanced metrics analysis"]
    }
  ];

  const categories = ["All", "Research", "Full-Stack", "Backend"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeCategory} // Re-animate when category changes
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <span className={`project-category ${project.category.toLowerCase()}`}>
                  {project.category}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.category === "Research" ? (
                  <motion.button
                    className="glass-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔗
                    View Research
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      className="glass-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔗
                      Code
                    </motion.button>
                    <motion.button
                      className="glass-button primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🚀
                      Demo
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-summary glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Project Impact Summary</h3>
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Average Accuracy</span>
            </div>
            <div className="stat">
              <span className="stat-number">25%</span>
              <span className="stat-label">Avg. Efficiency Gain</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Published Paper</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;