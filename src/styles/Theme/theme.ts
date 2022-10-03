import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4282a4",
      light: "#53a1c4",
      dark: "#31526d",
      contrastText: "#f6f5f0",
    },
    secondary: {
      main: "#48beff",
      contrastText: "#202a25",
    },
    background: {
      default: "#202a25",
      paper: "#4282a4",
    },
    text: {
      primary: "#53a1c4",
      secondary: "#48beff",
    },
    divider: "#18171a",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4282a4",
      light: "#53a1c4",
      dark: "#31526d",
      contrastText: "#f6f5f0",
    },
    secondary: {
      main: "#4282a4",
      contrastText: "#fbfaf5",
    },
    background: {
      default: "#fbfaf5",
      paper: "#4282a4",
    },
    text: {
      primary: "#31526d",
      secondary: "#1f4256",
    },
    divider: "#18171a",
  },
});

export const generalTheme = createTheme({
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontSize: "6rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Open Sans",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 300,
    },
    button: {
      fontFamily: "Open Sans",
      fontSize: "1.6rem",
      fontWeight: "600",
      letterSpacing: "0.11em",
    },
  },
  breakpoints: {
    values: {
      lg: 1200,
      md: 834,
      sm: 375,
      xl: 1500,
      xs: 0,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
