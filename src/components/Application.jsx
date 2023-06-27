import { Box } from "@mui/material";
import React from "react";
import CustomerBadgeContainer from "./CustomerBadgeContainer";
// import SearchBar from "./SearchBar";
import theme from "../utils/theme";
import CustomerListContainer from "./CustomerListContainer";


const Application = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: 5,
        pb: 8,
        pr: 12,
        pl: 9,
        bgcolor: theme.palette.primary.light,
      }}
    >
      {/* <SearchBar /> */}
      <CustomerBadgeContainer />
      <CustomerListContainer />
    </Box>
  );
};

export default Application;
