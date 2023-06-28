import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import theme from "../utils/theme";

const SearchBar = () => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          borderRadius: "10px",
          width: "216px",
        }}
      >
        <Box
          display={"flex"}
          backgroundColor={theme.palette.primary.light}
          borderRadius={"10px"}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="search" />
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBar;
