import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar, Typography, IconButton, useTheme, useMediaQuery, List, ListItem, ListItemText, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ThemeToggle from './ThemeToggle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const NavContainer = styled('div')(({ theme }) => ({
  background: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: '50px',
  padding: theme.spacing(1, 3),
  border: '1px solid rgba(100, 255, 218, 0.1)',
  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  maxWidth: '90%',
  margin: '0 auto',
  transition: 'all 0.3s ease',
  '& > *:not(:last-child)': {
    marginRight: theme.spacing(4)
  },
  '&:hover': {
    boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.4)',
    transform: 'translateY(2px)',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '95%',
    padding: theme.spacing(1, 2)
  },
}));

const NavItem = styled(motion.div)({
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '4px',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
  },
});

const MobileMenu = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '75%',
  maxWidth: '380px',
  marginTop: theme.spacing(2),
  background: 'rgba(10, 25, 47, 0.95)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '16px',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
  padding: theme.spacing(2),
  zIndex: 1000,
  transformOrigin: 'top center',
}));

const MobileMenuItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'translateX(-10px)',
  opacity: 0,
  animation: 'slideIn 0.4s forwards',
  animationDelay: 'calc(0.1s * var(--index))',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateX(8px)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  '@keyframes slideIn': {
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
}));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Education', 'Certifications', 'Projects', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <StyledAppBar position="fixed">
      <NavContainer style={{ background: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'rgba(10, 25, 47, 0.85)' }}>
        <Typography
          variant="h6"
          component="div"
          onClick={scrollToHero}
          sx={{
            cursor: 'pointer',
            color: '#ffffff',
            '&:hover': {
              color: '#64ffda'
            }
          }}
        >
          Kaung Sithu
        </Typography>
        
        {!isMobile && <ThemeToggle />}
        
        {isMobile ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                onClick={() => setMobileOpen(!mobileOpen)}
                edge="end"
                aria-label="menu"
                sx={{
                  position: 'relative',
                  transform: mobileOpen ? 'rotate(90deg)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'rgba(100, 255, 218, 0.1)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AnimatePresence>
              {mobileOpen && (
                <MobileMenu
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                >
                  <List sx={{ p: 0 }}>
                    {navItems.map((item, index) => (
                      <MobileMenuItem
                        key={item}
                        onClick={() => scrollToSection(item)}
                        style={{ '--index': index } as React.CSSProperties}
                      >
                        <motion.div
                          variants={itemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          style={{ width: '100%' }}
                        >
                          <ListItemText
                            primary={item}
                            sx={{
                              '& .MuiTypography-root': {
                                fontSize: '1rem',
                                fontFamily: '"Roboto Mono", monospace',
                                color: '#64ffda',
                              },
                            }}
                          />
                        </motion.div>
                      </MobileMenuItem>
                    ))}
                  </List>
                </MobileMenu>
              )}
            </AnimatePresence>
          </>
        ) : (
          <Box component={motion.div} sx={{ 
            display: 'flex', 
            gap: { xs: '15px', lg: '20px' }
          }}>
            {navItems.map((item) => (
              <NavItem
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                sx={{
                  fontSize: { md: '0.9rem', lg: '1rem' }
                }}
              >
                <Typography>{item}</Typography>
              </NavItem>
            ))}            
          </Box>
        )}
      </NavContainer>
    </StyledAppBar>
  );
};

export default Navbar;