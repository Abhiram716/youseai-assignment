import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import theme from "../utils/theme";

const SearchBar = () => {
  return (
    <Paper elevation={8}>
      <TextField
        size="small"
        variant="outlined"
        sx={{ bgcolor: theme.palette.primary.main, borderRadius:"15px"}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default SearchBar;
