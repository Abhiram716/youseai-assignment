import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", // Customize the primary color
      light: "#FAFBFF",
      contrastText: "#292D32",
    },
    secondary: {
      main: "#5932EA",
      contrastText: "#ACACAC",
    },
  },
});

export default theme;
