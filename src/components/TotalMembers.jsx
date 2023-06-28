import { Box } from "@mui/material";
import React from 'react';
import membersSvg from "../assets/img/members.svg";
import theme from "../utils/theme";

const TotalMembers = () => {
	return (
    <Box sx={{ display: "flex", mt: 4, ml: 7, mb: 4 }}>
      <Box sx={{ mr: 3 }}>
        <img src={membersSvg} alt="" />
      </Box>
      <Box sx={{ color: theme.palette.secondary.contrastText }}>
        {"Members"}
      </Box>
    </Box>
  );
}

export default TotalMembers