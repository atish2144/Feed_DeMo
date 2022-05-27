import React from "react";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Menu, MenuItem, Radio, RadioGroup, Stack, TextareaAutosize, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Modal from '@mui/material/Modal';



// import logo from "./AM.jpg"

export type NavbarProps = {
  /**
   * To be triggered on logout click
   */
  onLogout?: any;

};
const settings = ['Edit profile', 'Change password', 'Logout'];


//Mpodal Style
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "400px",
  height: "550px",
  bgcolor: 'background.paper',
  border: '0.5px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Navbar = ({ onLogout }: NavbarProps) => {


  //navbar menu items
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);



  //modal edit profile
  const [open, setOpen] = React.useState(true);



  //navbar menu items 
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //modal edit profile
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (


    <>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>

        <Toolbar variant="dense">
          {/* <Tooltip title="Logout">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip> */}

          {/* src="./AM.jpg" */}
          <Avatar style={{ marginLeft: "19%" }}
            src={require("./AM.jpg")} >
          </Avatar>


          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ flex: 1, color: "black", fontWeight: "Bold" }}
          >
            Life @AM
          </Typography>


          <Tooltip title="Logout">
            <Button variant="text" style={{ color: 'black' }} onClick={onLogout}>
              <Logout />
            </Button>
          </Tooltip>


          {/* <Tooltip title="Logout"> */}

          <Stack direction="row" alignItems={"center"} sx={{ marginRight: "10%" }}>
            {/* <Button variant="text" style={{
            color: 'black', width: "23.33px", height: "19.83px"
          }} onClick={onLogout}> */}
            <Button variant="text" style={{ color: 'black' }} >
              <HomeIcon />
            </Button>
            {/* </Tooltip> */}


            {/* <Tooltip > */}
            {/* <Button variant="text" style={{ color: 'black', width: "23.33px", height: "19.83px" }} > */}
            <Button variant="text" style={{ color: 'black' }} >
              <CameraAltOutlinedIcon />
            </Button>
            {/* </Tooltip> */}



            <Button variant="text" style={{ color: 'black' }} >
              <BookmarkAddOutlinedIcon />
            </Button>

            {/* <Avatar style={{ cursor: "pointer" }} >
            AJ
          </Avatar> */}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="J" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar>AJ</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}

                <MenuItem key={0} onClick={() => { handleCloseUserMenu(); handleOpen(); }}>
                  <Typography textAlign="center"  > <ManageAccountsRoundedIcon />  {settings[0]}</Typography>
                </MenuItem>

                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><LockResetRoundedIcon style={{ marginTop: "1%" }} /> {settings[1]}</Typography>
                </MenuItem>

                <MenuItem key={2} onClick={() => { handleCloseUserMenu(); }}>
                  <Typography textAlign="center" style={{ marginBottom: "px" }}><LogoutRoundedIcon /> {settings[2]}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}>Atish Jagtap</Typography>
          </Stack>

        </Toolbar>
      </AppBar >

      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >

            {/* <Stack direction="column" alignItems={"center"} spacing={2} sx={{ marginRight: "10%" }}> */}

            <Grid container alignItems="center" spacing={2} >

              <Grid item xs={12} sm={12}>
                <Typography sx={{ fontWeight: "bold", fontSize: "25px", marginLeft: "25%" }}>
                  Profile Update
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <TextField id="outlined-basic" label="FirstName" variant="outlined"
                  fullWidth required
                  size={"small"} />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField id="outlined-basic" label="LastName" variant="outlined"
                  fullWidth required
                  size={"small"} />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  style={{ width: 393, height: 100 }}
                />
              </Grid>


              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  // value={data.gender}
                  // onChange={(e) => setdata({ ...data, gender: e.target.value })}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />

                  </RadioGroup>
                </FormControl>
              </Grid>





            </Grid>


            {/* </Stack> */}



          </Box>
        </Modal>
      </div>



    </>




  );
};
