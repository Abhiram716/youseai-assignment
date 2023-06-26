import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Application from "./components/Application";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box>
        <Application />
      </Box>
    </ThemeProvider>
  );
}

export default App;
