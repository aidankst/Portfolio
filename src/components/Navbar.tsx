import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: theme.shadows[4],
  borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
}));

const NavItem = styled(motion.div)({
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '4px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
});

const MobileDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '60%',
    maxWidth: '300px',
    background: 'rgba(10, 25, 47, 0.95)',
    backdropFilter: 'blur(10px)',
    borderLeft: '1px solid rgba(100, 255, 218, 0.1)',
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

  const drawer = (
    <List sx={{ p: 2 }}>
      {navItems.map((item) => (
        <ListItem
          key={item}
          onClick={() => scrollToSection(item)}
          sx={{
            mb: 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <ListItemText
            primary={item}
            sx={{
              color: theme.palette.primary.main,
              '& .MuiTypography-root': {
                fontSize: '1.1rem',
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <StyledAppBar position="fixed" style={{ background: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'rgba(10, 25, 47, 0.85)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={motion.div} whileHover={{ scale: 1.05 }}>
          Kaung Sithu
        </Typography>
        
        {isMobile ? (
          <IconButton
            color="inherit"
            onClick={() => setMobileOpen(!mobileOpen)}
            edge="end"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: 'flex', gap: '20px' }}>
            {navItems.map((item) => (
              <NavItem
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
              >
                <Typography>{item}</Typography>
              </NavItem>
            ))}
          </div>
        )}

        <MobileDrawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </MobileDrawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;