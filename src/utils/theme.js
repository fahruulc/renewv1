import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2A004E",
    },
    background: {
      default: "#000",
      paper: "#242424",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cdcdcd",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
});

export default theme;
