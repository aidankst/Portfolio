import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper, Link, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(10, 1),
  position: 'relative',
  overflow: 'hidden',
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
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
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #64ffda, #00bfa5)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    background: 'rgba(255, 255, 255, 0.05)',
    '&::before': {
      opacity: 1,
    },
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


const Publications = () => {
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
      title: 'Evaluating Synthetic vs. Real Dynamic Vision Sensor Data for SNN-Based Object Detection Classification',
      authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Szymon Mazurek, Maciej Wielgosz',
      journal: 'Konferencja Użytkowników Komputerów Dużej Mocy - KUKDM 2025',
      year: '2025',
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
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
                >
                  <PublicationTitle variant="h6">
                    {publication.title}
                  </PublicationTitle>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
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
                    {publication.journal}, {publication.year}{publication.doi ? ` • DOI: ${publication.doi}` : ''}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.primary',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
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
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      onClick={() => window.open(publication.link, '_blank')}
                      sx={{
                        borderColor: 'rgba(100, 255, 218, 0.3)',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: '#64ffda',
                          backgroundColor: 'rgba(100, 255, 218, 0.05)',
                        },
                      }}
                    >
                      View Publication
                    </Button>
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