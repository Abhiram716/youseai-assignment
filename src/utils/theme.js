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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: `none`,
            borderRadius: `15px`,
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: `none`,
            },
          },
        },
      },
    },
  },
});

export default theme;
