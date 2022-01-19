import React, { useState } from "react";
import { appbarStyle } from "../styles/Styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Appbar = () => {
  //setting styles for component
  const appbarStyles = appbarStyle();

  //setting state for anchor of menu
  const [anchorEl, setAnchorEl] = useState(null);

  //handling menu
  const handleMenu = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={appbarStyles.root}>
      <AppBar className={appbarStyles.appbar} position="static">
        <Toolbar>
          <Typography variant="h6">Admin Access</Typography>
          <div className={appbarStyles.accountButton}>
            <IconButton onClick={handleMenu}>
              <AccountCircle
                sx={{ fontSize: "1.5em" }}
                className={appbarStyles.accountCircle}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={anchorEl}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;