import React from "react";
import { Box } from "@mui/material";
import theme from "../utils/theme";
import activeCustomerSvg from "../assets/img/active-customers.svg";

const ActiveCustomers = () => {
  return (
    <Box sx={{ display: "flex", mt: 4, ml: 7, mb: 4, pr: 11 }}>
      <Box sx={{ mr: 3 }}>
        <img src={activeCustomerSvg} alt="" />
      </Box>
      <Box sx={{ color: theme.palette.secondary.contrastText }}>
        {"Active Customers"}
      </Box>
    </Box>
  );
};

export default ActiveCustomers;
