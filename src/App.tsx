import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import TitleSection from './components/TitleSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Footer from './components/Footer';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ContactSection from './components/ContactSection/ContactSection';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const baseTheme = createTheme({
    typography: {
      fontFamily: 'Inter, Arial, sans-serif',
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: 'transparent',
      },
    },
    //... other theme properties
  });

  const theme = createTheme({
    ...baseTheme,
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: 'body1' },
            style: {
              fontSize: '0.95rem',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              margin: '5px 0',
              [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.1rem',
                margin: '12px 0',
              },
              [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.2rem',
              },
            },
          },
          {
            props: { variant: 'h3' },
            style: {
              fontFamily: 'Roboto Slab',
              fontSize: '1.2rem',
              margin: '15px 0',
              [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.4rem',
                margin: '18px 0',
              },
              [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.6rem',
                margin: '18px 0',
              },
            },
          },
          {
            props: { variant: 'h5' },
            style: {
              fontFamily: 'Roboto Slab',
              fontSize: '1.1rem',
              margin: '12px 0',
              [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.2rem',
                margin: '13px 0',
              },
              [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.4rem',
                margin: '15px 0',
              },
            },
          },
          {
            props: { variant: 'h6' },
            style: {
              fontFamily: 'Roboto Slab',
              fontSize: '1rem',
              margin: '10px 0',
              [baseTheme.breakpoints.up('sm')]: {
                fontSize: '1.1rem',
                margin: '12px 0',
              },
              [baseTheme.breakpoints.up('md')]: {
                fontSize: '1.3rem',
                margin: '15px 0',
              },
            },
          },
        ],
      },
    },
  });

  const StyledApp = styled('div')({
    height: '100%',
    width: '100%',
    background: 'var(--bg-gradient)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  });

  const handleThemeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const orbStyles = {
    position: 'fixed' as const,
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 0,
    pointerEvents: 'none' as const,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledApp>
        <motion.div
          className="orb orb-1"
          style={{
            ...orbStyles,
            background: 'var(--orb-1)',
            top: '10%',
            left: '-10%',
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-2"
          style={{
            ...orbStyles,
            background: 'var(--orb-2)',
            top: '50%',
            right: '-10%',
          }}
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-3"
          style={{
            ...orbStyles,
            background: 'var(--orb-3)',
            bottom: '10%',
            left: '20%',
          }}
          animate={{ x: [0, 20, -15, 0], y: [0, -20, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className='app-wrapper'>
          <Header handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
          <TitleSection darkMode={darkMode} />
          <AboutSection />
          <ProjectSection darkMode={darkMode} />
          <ContactSection />
          <Footer />
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
