import { Paper } from "@mui/material";
import React from "react";
import theme from "../utils/theme";
import ActiveCustomers from "./ActiveCustomers";
import TotalCustomers from "./TotalCustomers";
import TotalMembers from "./TotalMembers";

const CustomerBadgeContainer = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "968px",
        height: "151px",
        bgcolor: theme.palette.primary.main,
        borderRadius: 3,
        mt: 5,
      }}
    >
      <TotalCustomers />
      <TotalMembers />
      <ActiveCustomers />
    </Paper>
  );
};

export default CustomerBadgeContainer;
