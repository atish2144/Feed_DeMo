import React from "react";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export type NavbarProps = {
  /**
   * To be triggered on logout click
   */
  onLogout?: any;

};

export const Navbar = ({ onLogout }: NavbarProps) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{ flex: 1 }}
        >
          Am Social Feed
        </Typography>
        <Tooltip title="Logout">
          <Button variant="text" style={{ color: '#fff' }} onClick={onLogout}>
            <Logout />
          </Button>
        </Tooltip>


        <Avatar >
          AJ
        </Avatar>


        {/* <Tooltip title="edit profile">
          <Button variant="text" style={{ color: '#fff' }} >
            <EditIcon />
          </Button>
        </Tooltip> */}

        <Typography style={{ fontSize: "12px" }}>Atish Jagtap</Typography>


      </Toolbar>
    </AppBar>
  );
};
