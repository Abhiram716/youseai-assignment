import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", // Customize the primary color
      contrastText: "#333",
    },
    secondary: {
      main: "#FAFBFF", // Customize the secondary color
      contrastText: "#ACACAC",
    },
  },
});

export default theme;