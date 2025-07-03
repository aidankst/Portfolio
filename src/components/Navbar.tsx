import { useNavigate } from 'react-router-dom';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  AppBar, Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AnimatePresence, motion } from 'framer-motion';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';

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
  background: theme.palette.mode === 'dark' 
    ? 'rgba(40, 40, 40, 0.5)' 
    : 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  borderRadius: '50px',
  padding: theme.spacing(0.75, 1.5),
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(255, 255, 255, 0.125)' 
    : '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: theme.palette.mode === 'dark' 
    ? '0 0 0 1px rgba(0,0,0,0.04), 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06), inset 0 1px 1px 0 rgba(255,255,255,0.05)' 
    : '0 0 0 1px rgba(255,255,255,0.2), 0 4px 20px -4px rgba(0,0,0,0.1), 0 8px 16px -8px rgba(0,0,0,0.05), inset 0 1px 1px 0 rgba(255,255,255,0.8), inset 0 -1px 1px 0 rgba(0,0,0,0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'auto',
  maxWidth: '90%',
  margin: '0 auto',
  transition: 'all 0.3s ease',
  '& > *:not(:last-child)': {
    marginRight: theme.spacing(2)
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '95%',
    padding: theme.spacing(0.5, 1)
  },
}));

const NavItemContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const NavItem = styled(motion.div)<{ active: boolean }>(({ theme, active }) => ({
  cursor: 'pointer',
  padding: '8px 18px',
  borderRadius: '30px',
  color: active ? theme.palette.text.primary : theme.palette.text.secondary,
  position: 'relative',
  zIndex: 1,
  transition: 'color 0.3s ease',
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const LiquidBlob = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '30px',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.4)',
  boxShadow: theme.palette.mode === 'dark'
    ? 'inset 0 1px 1px rgba(255,255,255,0.1)'
    : 'inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -1px 1px rgba(0,0,0,0.1)',
  zIndex: 0,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '30px',
    background: theme.palette.mode === 'dark' 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 60%)' 
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
    mixBlendMode: 'overlay',
  }
}));

const MobileMenu = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '75%',
  maxWidth: '380px',
  marginTop: theme.spacing(2),
  background: theme.palette.mode === 'dark' 
    ? 'rgba(40, 40, 40, 0.7)' 
    : 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  borderRadius: '20px',
  border: theme.palette.mode === 'dark' 
    ? '1px solid rgba(255, 255, 255, 0.1)' 
    : '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 10px 30px -10px rgba(0, 0, 0, 0.2)'
    : '0 10px 30px -10px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
  padding: theme.spacing(1.5),
  zIndex: 1000,
  transformOrigin: 'top center',
}));

const MobileMenuItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  background: 'transparent',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
  border: 'none',
  transition: 'all 0.3s ease',
  transform: 'none',
  opacity: 1,
  animation: 'none',
  '&:hover': {
    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
    transform: 'none',
    boxShadow: 'none',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = useMemo(() => ['About', 'Experience', 'Education', 'Publications', 'Certifications', 'Projects', 'Skills', 'Contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = item;
          }
        }
      });

      if (currentSection) {
        setActiveItem(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (isMobile) {
          setMobileOpen(false);
        }
      }
    }, 100);
  };

  const scrollToHero = () => {
    navigate('/');
    setTimeout(() => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setActiveItem('');
      }
    }, 100);
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

  const blobItem = hoveredItem || activeItem;

  return (
    <StyledAppBar position="fixed">
      <NavContainer style={{ 
        background: isScrolled 
          ? (theme.palette.mode === 'dark' ? 'rgba(40, 40, 40, 0.6)' : 'rgba(255, 255, 255, 0.25)') 
          : (theme.palette.mode === 'dark' ? 'rgba(40, 40, 40, 0.5)' : 'rgba(255, 255, 255, 0.15)') 
      }}>
        <Typography
          variant="h6"
          component="div"
          onClick={scrollToHero}
          sx={{
            cursor: 'pointer',
            color: theme.palette.text.primary,
            fontWeight: 600,
            fontSize: '18px',
            letterSpacing: '0.2px',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            '&:hover': {
              color: theme.palette.text.primary,
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
                  color: theme.palette.text.primary,
                  '&:hover': {
                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
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
                                fontSize: '16px',
                                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                                color: activeItem === item ? theme.palette.text.primary : theme.palette.text.secondary,
                                fontWeight: activeItem === item ? 600 : 400,
                                textAlign: 'center',
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
          <NavItemContainer ref={navRef} onMouseLeave={() => setHoveredItem(null)}>
            {navItems.map((item) => (
              <NavItem
                key={item}
                active={activeItem === item}
                onClick={() => scrollToSection(item)}
                onMouseEnter={() => setHoveredItem(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-item={item}
              >
                {item}
              </NavItem>
            ))}
            <AnimatePresence>
              {blobItem && navRef.current && (
                <LiquidBlob
                  layoutId="liquid-blob"
                  initial={false}
                  animate={{
                    x: (navRef.current.querySelector(`[data-item="${blobItem}"]`) as HTMLElement)?.offsetLeft || 0,
                    width: (navRef.current.querySelector(`[data-item="${blobItem}"]`) as HTMLElement)?.offsetWidth || 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 40,
                  }}
                />
              )}
            </AnimatePresence>
          </NavItemContainer>
        )}
      </NavContainer>
    </StyledAppBar>
  );
};

export default Navbar;