import { Box } from "@mui/material";
import React from "react";
import usersSvg from "../assets/img/users.svg";
import theme from "../utils/theme";
const TotalCustomers = () => {
  return (
    <Box sx={{ display: "flex", mt: 4, ml: 7, mb: 4 }}>
      <Box sx={{ mr: 3 }}>
        <img src={usersSvg} alt="" />
      </Box>
      <Box sx={{ color: theme.palette.secondary.contrastText }}>
        {"Total Customers"}
      </Box>
    </Box>
  );
};

export default TotalCustomers;
