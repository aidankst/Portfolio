import {
  Box, Button, Chip, Container, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  useParams,
  useNavigate,
} from 'react-router-dom';

import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(12, 2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(10, 1),
  },
  background: theme.palette.mode === 'light'
    ? 'radial-gradient(circle at 10% 20%, rgba(238, 242, 247, 0.8) 0%, rgba(255, 255, 255, 0.6) 90%)'
    : 'radial-gradient(circle at 10% 20%, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 90%)',
  position: 'relative',
  overflow: 'hidden',
}));

const GlassmorphicPaper = styled(motion.div)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(17, 25, 40, 0.6)'
    : 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(25px) saturate(150%)',
  WebkitBackdropFilter: 'blur(25px) saturate(150%)',
  borderRadius: '24px',
  border: `1px solid ${
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.125)' : 'rgba(255, 255, 255, 0.5)'
  }`,
  padding: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
    : '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
      : '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
  },
}));

const KeywordChip = styled(Chip)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(100, 255, 218, 0.1)'
    : 'rgba(0, 122, 255, 0.1)',
  color: theme.palette.mode === 'dark' ? '#64ffda' : '#007aff',
  border: `1px solid ${
    theme.palette.mode === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(0, 122, 255, 0.3)'
  }`,
  fontWeight: 600,
  fontSize: '0.8rem',
  padding: theme.spacing(0.5, 1),
  '&:hover': {
    background: theme.palette.mode === 'dark'
      ? 'rgba(100, 255, 218, 0.2)'
      : 'rgba(0, 122, 255, 0.2)',
  },
}));

interface Publication {
  title: string;
  authors: string;
  journal: string;
  doi: string;
  abstract: string;
  keywords: string[];
  arxivId?: string;
}

const publicationsData: Record<string, Publication> = {
  'cyberattack-resilience': {
    title: 'Cyberattack Resilience of Autonomous Vehicle Sensor Systems: Evaluating RGB vs. Dynamic Vision Sensors in CARLA',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Szymon Mazurek, Maciej Wielgosz',
    journal: 'Applied Sciences, 2025, 15(13), 7493',
    doi: '10.3390/app15137493',
    abstract: 'Autonomous vehicles (AVs) rely on a heterogeneous sensor suite of RGB cameras, LiDAR, GPS/IMU, and emerging event-based dynamic vision sensors (DVS) to perceive and navigate complex environments. However, these sensors can be deceived by realistic cyberattacks, undermining safety. In this work, we systematically implement seven attack vectors in the CARLA simulator—salt and pepper noise, event flooding, depth map tampering, LiDAR phantom injection, GPS spoofing, denial of service, and steering bias control—and measure their impact on a state-of-the-art end-to-end driving agent. We then equip each sensor with tailored defenses (e.g., adaptive median filtering for RGB and spatial clustering for DVS) and integrate a unsupervised anomaly detector (EfficientAD from anomalib) trained exclusively on benign data. Our detector achieves clear separation between normal and attacked conditions (mean RGB anomaly scores of 0.00 vs. 0.38; DVS: 0.61 vs. 0.76), yielding over 95% detection accuracy with fewer than 5% false positives. Defense evaluations reveal that GPS spoofing is fully mitigated, whereas RGB- and depth-based attacks still induce 30–45% trajectory drift despite filtering. Notably, our research-focused evaluation of DVS sensors suggests potential intrinsic resilience advantages in high-dynamic-range scenarios, though their asynchronous output necessitates carefully tuned thresholds. These findings underscore the critical role of multi-modal anomaly detection and demonstrate that DVS sensors exhibit greater intrinsic resilience in high-dynamic-range scenarios, suggesting their potential to enhance AV cybersecurity when integrated with conventional sensors.',
    keywords: ['autonomous vehicles', 'cybersecurity attacks', 'dynamic vision sensor'],
  },
  'dvs-pedx-dataset': {
    title: 'DVS-PedX: Synthetic-and-Real Event-Based Pedestrian Dataset',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Maciej Wielgosz',
    journal: 'arXiv preprint arXiv:2509.04117, 2025',
    doi: '',
    arxivId: '2509.04117',
    abstract: 'This paper presents DVS-PedX, a comprehensive dataset that combines synthetic and real event-based data for pedestrian detection and tracking using Dynamic Vision Sensors (DVS). The dataset addresses the critical need for high-quality event-based data in computer vision applications, particularly for pedestrian detection in autonomous systems. DVS-PedX includes both synthetic data generated from simulation environments and real-world recordings, providing researchers with a diverse and robust foundation for developing and evaluating event-based pedestrian detection algorithms. The dataset features various scenarios including different lighting conditions, pedestrian movements, and environmental settings, making it suitable for training robust neural networks for real-world deployment.',
    keywords: ['dynamic vision sensors', 'event-based vision', 'pedestrian detection', 'dataset', 'computer vision'],
  },
};

const PublicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const publication = publicationsData[id as keyof typeof publicationsData];

  if (!publication) {
    return <Typography>Publication not found.</Typography>;
  }

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={(theme) => ({
              marginBottom: theme.spacing(4),
              [theme.breakpoints.down('sm')]: {
                marginBottom: theme.spacing(2),
              },
              color: theme.palette.text.secondary,
              fontWeight: 600,
              '&:hover': {
                color: theme.palette.text.primary,
                background: 'rgba(100, 255, 218, 0.1)',
              },
            })}
          >
            Back to Publications
          </Button>
          <GlassmorphicPaper>
            {id === 'cyberattack-resilience' && (
              <Box sx={{ mb: 4, borderRadius: '16px', overflow: 'hidden', maxWidth: '600px', margin: '0 auto' }}>
                <img
                  src="/Portfolio/badges/Article_Banner_MDPI_applsci-15-07493.png"
                  alt="Article Banner"
                  style={{
                    width: '100%', height: 'auto', display: 'block',
                  }}
                />
              </Box>
            )}
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={(theme) => ({
                fontWeight: 700,
                color: 'primary.main',
                lineHeight: 1.2,
                textAlign: 'center',
                mt: 4,
                fontSize: '2.5rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1.75rem',
                },
              })}
            >
              {publication.title}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={(theme) => ({
                color: 'text.secondary',
                mb: 2,
                textAlign: 'center',
                fontSize: '1rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.9rem',
                },
              })}
            >
              {publication.authors}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              gutterBottom
              sx={(theme) => ({
                fontStyle: 'italic',
                mb: 3,
                textAlign: 'center',
                fontSize: '1rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.9rem',
                },
              })}
            >
              {publication.journal}
            </Typography>
            <Box sx={{ my: 3, textAlign: 'center' }}>
              {publication.keywords.map((keyword) => (
                <KeywordChip label={keyword} key={keyword} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
            <Typography
              variant="body1"
              paragraph
              sx={(theme) => ({
                lineHeight: 1.8,
                fontSize: '1.1rem',
                color: 'text.primary',
                textAlign: 'justify',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1rem',
                },
              })}
            >
              {publication.abstract}
            </Typography>
            <Button
              variant="outlined"
              href={publication.doi ? `https://doi.org/${publication.doi}` : `https://arxiv.org/abs/${publication.arxivId}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={(theme) => ({
                marginTop: theme.spacing(3),
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(100, 255, 218, 0.1)',
                  borderColor: theme.palette.primary.main,
                },
              })}
            >
              {publication.doi ? "Read on Publisher's Site" : "Read on arXiv"}
            </Button>
          </GlassmorphicPaper>
        </motion.div>
      </Container>
    </StyledSection>
  );
};

export default PublicationDetail;