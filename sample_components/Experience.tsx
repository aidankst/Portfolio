import React from 'react';
import { motion } from 'framer-motion';
// Using emojis instead of react-icons to avoid TypeScript compatibility issues
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company: "AGH University of Science and Technology",
      location: "Krakow, PL",
      period: "June 2024 – Present",
      type: "Research",
      achievements: [
        "Assisted in data collection and analysis for research projects, focusing on autonomous driving models, resulting in a 15% improvement in dataset accuracy",
        "Developed Python scripts to verify dataset quality using metrics such as MSE, SSIM, polarity accuracy, and temporal precision, reducing data errors by 20%",
        "Contributed to improving dataset reliability for object detection by implementing automated quality assessment pipelines, which increased model performance by 10%",
        "Collaborated with research teams to ensure project success and timely delivery of results, achieving a 95% on-time project completion rate"
      ]
    },
    {
      title: "Data Analyst",
      company: "Haine Food Production Co., Ltd.",
      location: "(Remote) Yangon, Myanmar",
      period: "December 2023 – February 2025",
      type: "Full-time",
      achievements: [
        "Developed and maintained interactive dashboards using SQL and Python, improving data accessibility for key stakeholders",
        "Conducted in-depth data analysis to optimize supply chain operations, reducing delivery inefficiencies by 15%",
        "Designed predictive models to forecast product demand, enhancing inventory management and minimizing overstocking",
        "Automated data extraction and reporting processes, reducing manual workload and improving data accuracy"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Haine Food Production Co., Ltd.",
      location: "(Remote) Yangon, Myanmar",
      period: "June 2023 – December 2023",
      type: "Internship",
      achievements: [
        "Assisted in structuring and cleaning large datasets for sales and production analysis, improving data reliability",
        "Created data visualizations using Excel and Matplotlib to identify trends and improve operational efficiency",
        "Supported the implementation of a real-time inventory tracking system, reducing stock discrepancies",
        "Conducted exploratory data analysis to identify key performance bottlenecks and optimize workflow processes"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "AGH University of Science and Technology",
      location: "Kraków, Poland",
      period: "Feb 2025",
      gpa: "4.5/5.0",
      type: "education"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      institution: "Google",
      location: "Online",
      period: "April 2025",
      type: "certification"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="experience-content">
          {/* Work Experience */}
          <div className="experience-section">
            <motion.h3
              className="subsection-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>💼</span> Professional Experience
            </motion.h3>
            
            <motion.div
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                  </div>
                  
                  <div className="timeline-content glass-card">
                    <div className="experience-header">
                      <h4 className="experience-title">{exp.title}</h4>
                      <span className={`experience-type ${exp.type}`}>{exp.type}</span>
                    </div>
                    
                    <div className="experience-meta">
                      <div className="meta-item">
                        <span>💼</span>
                        <span>{exp.company}</span>
                      </div>
                      <div className="meta-item">
                        <span>📍</span>
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <span>📅</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          <span className="achievement-icon">🏆</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div className="experience-section">
            <motion.h3
              className="subsection-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>🎓</span> Education & Certifications
            </motion.h3>
            
            <motion.div
              className="education-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="education-title">{edu.title}</h4>
                  <div className="education-institution">{edu.institution}</div>
                  <div className="education-meta">
                    <div className="meta-item">
                      <span>📍</span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="meta-item">
                      <span>📅</span>
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="meta-item gpa">
                        <span>🏆</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;