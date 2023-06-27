import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import theme from "../utils/theme";

const SearchBar = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: "10px",
        width: "216px",
      }}
    >
      <TextField
        fullWidth
        placeholder="search"
        variant="outlined"
        size="small"
        autoComplete="off"
        sx={{
          bgcolor: theme.palette.primary.light,
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderRadius: "15px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        InputProps={{
          sx: {
            height: "38px",
          },
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
