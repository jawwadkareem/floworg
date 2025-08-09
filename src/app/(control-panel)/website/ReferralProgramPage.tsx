import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ReferralProgrampage from "./components/ReferralProgramPage/page";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D4AA",
    },
    secondary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
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

const ReferralProgramPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReferralProgrampage />
    </ThemeProvider>
  );
};

export default ReferralProgramPage;
