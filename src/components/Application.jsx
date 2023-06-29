import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import CustomerBadgeContainer from "./CustomerBadgeContainer";
import theme from "../utils/theme";
import CustomerListContainer from "./CustomerListContainer";
import SideBar from "./SideBar";

const Application = () => {
  return (
    <Box sx={{ display: "flex", bgcolor:theme.palette.primary.light }}>
      <Paper elevation={4}>
        <SideBar />
      </Paper>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ pt: 5, pb: 8, pr: 12, pl: 9 }}
      >
        <Grid item>
          <CustomerBadgeContainer />
        </Grid>
        <Grid item>
          <CustomerListContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Application;
