import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
  position: 'relative',
  overflow: 'hidden',
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
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const PublicationCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(10, 25, 47, 0.5)',
  boxShadow: `0 8px 32px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.15)' : 'rgba(0, 0, 0, 0.2)'}`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 40px 0 ${theme.palette.mode === 'light' ? 'rgba(31, 38, 135, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const PublicationTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#64ffda',
  },
}));

const PublicationTag = styled(motion.span)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: 'rgba(100, 255, 218, 0.03)',
  border: '1px solid rgba(100, 255, 218, 0.15)',
  borderRadius: '20px',
  padding: theme.spacing(0.5, 2),
  fontSize: '0.75rem',
  display: 'inline-block',
  margin: theme.spacing(0.5),
  cursor: 'default',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    padding: theme.spacing(0.4, 1.5),
  },
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.08)',
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 8px 16px rgba(100, 255, 218, 0.15)',
    border: '1px solid rgba(100, 255, 218, 0.3)',
  },
}));


import { useNavigate } from 'react-router-dom';
import { ReadMore as ReadMoreIcon } from '@mui/icons-material';

// ... (imports and styled components remain the same)

const Publications = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const publications = [
    {
      id: 'cyberattack-resilience',
      title: 'Cyberattack Resilience of Autonomous Vehicle Sensor Systems: Evaluating RGB vs. Dynamic Vision Sensors in CARLA',
      authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Szymon Mazurek, Maciej Wielgosz',
      journal: 'Applied Sciences, 2025, 15(13), 7493',
      year: '',
      abstract: 'This paper evaluates the resilience of AV sensor systems to cyberattacks, comparing RGB and DVS sensors in the CARLA simulator.',
      doi: '10.3390/app15137493',
      link: 'https://doi.org/10.3390/app15137493',
      tags: ['Autonomous Vehicles', 'Cybersecurity', 'Dynamic Vision Sensors', 'CARLA'],
      featured: true,
    },
    {
      id: 'dvs-pedx-dataset',
      title: 'DVS-PedX: Synthetic-and-Real Event-Based Pedestrian Dataset',
      authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Maciej Wielgosz',
      journal: 'arXiv preprint arXiv:2509.04117',
      year: '2025',
      abstract: 'A comprehensive dataset combining synthetic and real event-based data for pedestrian detection and tracking using Dynamic Vision Sensors.',
      doi: '',
      link: 'https://arxiv.org/abs/2509.04117',
      tags: ['Dynamic Vision Sensors', 'Dataset', 'Pedestrian Detection', 'Event-Based Vision'],
    },
    {
      title: 'Evaluating Synthetic vs. Real Dynamic Vision Sensor Data for SNN-Based Object Detection Classification',
      authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Szymon Mazurek, Maciej Wielgosz',
      journal: 'In Proceedings of the KU KDM 2025 Conference, Zakopane, Poland, 2–5 April 2025',
      year: '',
      abstract: 'This paper compares synthetic and real DVS data with RGB imagery, focusing on detection performance and latency.',
      doi: '',
      link: 'https://events.plgrid.pl/event/70/attachments/143/364/PROCEEDINGS%202025_na%20www%20bez%20notatek.pdf',
      tags: ['Dynamic Vision Sensors', 'Classification', 'Low-Latency Perception', 'Spiking Neural Networks'],
    },
  ];

  return (
    <StyledSection id="publications">
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
            <span>Publications</span>
          </Typography>
          
          <Grid container spacing={4}>
            {publications.map((publication, index) => (
              <Grid item xs={12} key={index}>
                <PublicationCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.1 }}
                >
                  <Box sx={{ position: 'relative', textAlign: 'center', mb: 1 }}>
                    <PublicationTitle variant="h6">
                      {publication.title}
                    </PublicationTitle>
                    {publication.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          display: 'inline-block',
                          px: 1,
                          py: 0.25,
                          borderRadius: '12px',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          flexShrink: 0,
                        }}
                      >
                        Featured
                      </Box>
                    )}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: 'text.secondary',
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      fontWeight: 500,
                    }}
                  >
                    {publication.authors}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                    }}
                  >
                    {publication.journal}{publication.year ? `, ${publication.year}` : ''}{publication.doi ? ` • DOI: ${publication.doi}` : ''}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.primary',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {publication.abstract}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1,
                        flexWrap: 'wrap',
                      }}
                    >
                      {publication.tags.map((tag) => (
                        <PublicationTag
                          key={tag}
                          whileHover={{ y: -2, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </PublicationTag>
                      ))}
                    </Box>
                    <Box>
                      {publication.id && (
                        <Button
                          variant="contained"
                          size="medium"
                          endIcon={<ReadMoreIcon />}
                          onClick={() => navigate(`/publication/${publication.id}`)}
                          sx={{ mr: 1 }}
                        >
                          Read More
                        </Button>
                      )}
                      {publication.link && (
                        <Button
                          variant="outlined"
                          size="medium"
                          endIcon={<OpenInNewIcon />}
                          onClick={() => window.open(publication.link, '_blank')}
                        >
                          View Publication
                        </Button>
                      )}
                    </Box>
                  </Box>
                </PublicationCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </StyledSection>
  );
};


export default Publications;