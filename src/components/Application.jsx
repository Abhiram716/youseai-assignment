import { Box } from "@mui/material";
import React from "react";
import CustomerBadgeContainer from "./CustomerBadgeContainer";
import SearchBar from "./SearchBar";
import theme from "../utils/theme";

const Application = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
				justifyContent: "center",
				pt: 5,
				pb:8,
        bgcolor: theme.palette.secondary.main,
				// bgcolor:"pink"
      }}
    >
      <SearchBar />
      <CustomerBadgeContainer />
    </Box>
  );
};

export default Application;
