import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaAward, FaCode } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "4.5/5.0 GPA",
      description: "Bachelor's in Computer Science from AGH University"
    },
    {
      icon: <FaAward />,
      title: "Published Research",
      description: "Paper on DVS dataset evaluation with 95% accuracy"
    },
    {
      icon: <FaCode />,
      title: "15% Improvement",
      description: "Enhanced dataset accuracy in ML research projects"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Global Experience",
      description: "Remote work experience across multiple countries"
    }
  ];

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
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card about-card">
              <h3>Passionate Computer Science Graduate</h3>
              <p>
                I'm a recent Computer Science graduate from AGH University of Science and Technology 
                with a strong passion for data engineering and machine learning. With a GPA of 4.5/5.0, 
                I've demonstrated academic excellence while gaining practical experience in real-world projects.
              </p>
              <p>
                My expertise spans across Python, SQL, R, and various data engineering tools. I've successfully 
                contributed to research projects focusing on autonomous driving models, resulting in significant 
                improvements in dataset accuracy and model performance.
              </p>
              <p>
                Currently based in Kraków, Poland, I'm open to relocating anywhere for the right opportunity. 
                I'm fluent in English and Burmese, with beginner-level skills in Polish and Chinese, 
                reflecting my multicultural background and adaptability.
              </p>
              
              <div className="about-details">
                <div className="detail-item">
                  <strong>Location:</strong> Kraków, Poland (open to relocate)
                </div>
                <div className="detail-item">
                  <strong>Education:</strong> B.S. Computer Science, AGH University
                </div>
                <div className="detail-item">
                  <strong>Languages:</strong> Burmese (Native), English (Fluent), Polish & Chinese (Beginner)
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-achievements"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card glass-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card stats-card">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Published Paper</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Project Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;