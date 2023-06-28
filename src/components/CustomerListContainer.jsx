import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";
import CustomersList from "./CustomersList";
import SearchBar from "./SearchBar";

const CustomerListContainer = () => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          mt: 5,
          pt: 4,
          pl: 5,
          pr: 6,
          pb: 5,
          borderRadius: "20px",
          width: "968px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent:"space-between",
            alignItem: "center",
            mb: 5,
          }}
        >
          <Typography>All Customers</Typography>
          <Box >
            <SearchBar />
          </Box>
        </Box>
        <CustomersList />
      </Paper>
    </Box>
  );
};

export default CustomerListContainer;
