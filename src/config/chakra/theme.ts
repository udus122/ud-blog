import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    "50": "#e3f1f9",
    "100": "#bbdcf2",
    "200": "#91c6e9",
    "300": "#6ab0e0",
    "400": "#4d9fdb",
    "500": "#3390d5",
    "600": "#2b83c9",
    "700": "#2272b7",
    "800": "#1a61a5",
    "900": "#0c4586",
  },
  secondary: {
    "50": "#ebe5f4",
    "100": "#cbbee4",
    "200": "#a994d3",
    "300": "#8769c2",
    "400": "#6d49b6",
    "500": "#522aa9",
    "600": "#4926a4",
    "700": "#3b1e9b",
    "800": "#2d1993",
    "900": "#100c86",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const theme = extendTheme({ colors });

export default theme;
