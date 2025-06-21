import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2D343E" },
    secondary: { main: "#E9EAEB" },
    success: { main: "#3CBAF0" },
    info: { main: "#5A7285" },
    error: { main: "#3966C8" },
    warning: { main: "#D36433" },
    background: { default: "#F0F2F5" },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14,
  },
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  direction: "ltr", // Default, will be overridden by i18n
});

export default theme;
