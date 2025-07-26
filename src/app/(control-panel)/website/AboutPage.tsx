import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Aboutpage from './components/AboutPage/page';
const theme = createTheme({
  palette: {
    primary: {
      main: '#00D4AA',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Aboutpage />
    </ThemeProvider>
  );
}

export default AboutPage;