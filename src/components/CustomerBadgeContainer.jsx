import { Box } from "@mui/material";
import React from "react";
import theme from "../utils/theme";
import CoustemerBadge from "./CoustemerBadge";

const CustomerBadgeContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "968px",
        height: "151px",
				bgcolor: theme.palette.primary.main,
				borderRadius: 3,
				mt:5
      }}
    >
      <CoustemerBadge />
    </Box>
  );
};

export default CustomerBadgeContainer;
