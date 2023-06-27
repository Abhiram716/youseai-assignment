import { Paper } from "@mui/material";
import React from "react";
import theme from "../utils/theme";
import CoustemerBadge from "./CoustemerBadge";

const CustomerBadgeContainer = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "968px",
        height: "151px",
        bgcolor: theme.palette.primary.main,
        borderRadius: 3,
        mt: 5,
      }}
    >
      <CoustemerBadge />
    </Paper>
  );
};

export default CustomerBadgeContainer;
