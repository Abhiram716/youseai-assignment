import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box } from "@mui/material";
import theme from "../utils/theme";
import { Button } from "@mui/base";

const SideBar = () => {
  const [collapseed, setCollapsed] = useState(false);

  const handleClick = () => {
    collapseed === true ? setCollapsed(false) : setCollapsed(true);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Sidebar
        backgroundColor={theme.palette.primary.light}
        style={{ height: "100%" }}
        collapsed={collapseed}
      >
        <Menu>
          <MenuItem>Abhi</MenuItem>
          <MenuItem>
            <Button onClick={handleClick}>click me</Button>
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
