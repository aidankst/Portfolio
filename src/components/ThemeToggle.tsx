import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import { Fade } from '@mui/material';
import { Brightness3Rounded as MoonIcon, WbSunnyRounded as SunIcon } from '@mui/icons-material';

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: theme.palette.mode === 'dark' 
    ? 'linear-gradient(145deg, #0a192f 0%, #112240 100%)' 
    : 'linear-gradient(145deg, #FFD700 0%, #FFA500 100%)',
  boxShadow: theme.palette.mode === 'dark'
    ? '3px 3px 6px #09162c, -3px -3px 6px #0b1c34'
    : '3px 3px 6px #FFD700, -3px -3px 6px #FFA500',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.palette.mode === 'dark'
      ? '4px 4px 8px #09162c, -4px -4px 8px #0b1c34'
      : '4px 4px 8px #FFD700, -4px -4px 8px #FFA500',
  },
}));

const StyledSunIcon = styled(SunIcon)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#64ffda' : '#FFA500',
  fontSize: '1.5rem',
}));

const StyledMoonIcon = styled(MoonIcon)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#64ffda' : '#0066cc',
  fontSize: '1.5rem',
}));

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label="toggle theme"
      disableRipple
    >
      <Fade in={!isDarkMode} timeout={300}>
        <StyledSunIcon sx={{ position: 'absolute' }} />
      </Fade>
      <Fade in={isDarkMode} timeout={300}>
        <StyledMoonIcon sx={{ position: 'absolute' }} />
      </Fade>
    </ToggleButton>
  );
};

export default ThemeToggle; 