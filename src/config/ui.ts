import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#4C6FB7, 1)",
      main: "rgba(11, 68, 135, 1)",
      dark: "rgba(0, 30, 89, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      light: "rgba(134, 87, 220, 1)",
      main: "rgba(82, 42, 169, 1)",
      dark: "rgba(21, 0, 121, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    error: {
      light: "rgba(255, 98, 128, 1)",
      main: "rgba(228, 35, 84, 1)",
      dark: "rgba(171, 0, 44, 1)",
      contrastText: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontSize: 14,
  },
});

export default theme;
