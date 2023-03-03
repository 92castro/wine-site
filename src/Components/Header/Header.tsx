import logo from "../../Assets/Capture.png";
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Typography } from "@mui/material";


// export default function Header() {
//   return (
//     <>
//     <header style={{display:"flex",justifyContent:"space-around"}}>
      
//       <Link to="/"><img src={logo} alt="" style={{borderRadius:"20px"}} /></Link>
//       <Typography component="p" sx={{width:"20%",fontSize:"15px"}}>
//         Enabling Home Winemakers & Homebrewers since 2011
//       </Typography>
//       <Link to="/about">About</Link>
//       <Link to="/lessons">Lessons</Link>
//       <Link to="/photo">Photo</Link>
//       <Link to="/info">Info</Link>
//       <Link to="/contact">Contact</Link>
//     </header>
//     </>
//   )
// }


// import * as React from 'react';
// import { Link } from 'react-router-dom'
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Toolbar } from '@mui/material';


// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Toolbar>
//       <img src={logo} alt="" />
//       <IconButton
//         size="large"
//         edge="start"
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//       <MenuIcon/> 
//       </IconButton>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
//         <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
//         <MenuItem onClick={handleClose}><Link to="/lessons">Lessons</Link></MenuItem>
//         <MenuItem onClick={handleClose}><Link to="/photo">Photo</Link></MenuItem>
//         <MenuItem onClick={handleClose}><Link to="/info">Info</Link></MenuItem>
//         <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
//       </Menu>
//     </Toolbar>
//   );
// }

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, MenuItem, Menu } from "@mui/material";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#fff",
  minHeight: "65px",
  fontSize: "175%",
  textAlign: "center",
  position: "relative",

  "&:hover": {
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));
const StyledDesktopMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#fff",
  minHeight: "65px",
  fontSize: "125%",
  textAlign: "center",
  position: "relative",

  "&:hover": {
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));
const DesktopMenu = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const MobileMenu = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

function Header() {
  const [open, setOpen] = useState(false);

  const exitMenu = () => {
    setOpen(false);
  };

  
  return (
    <AppBar position="relative" sx={{ background:"var(--transparent)", padding:"5px" }}>
      <StyledToolbar>
        <Link to="/"><img src={logo} alt="logo" style={{borderRadius:"20px",height:"55px"}} /></Link>
        <Typography component="p" sx={{fontSize:"15px",color:"var(--maroon-color)"}}>
          Enabling Home Winemakers & Homebrewers since 2011     
          </Typography>
        <DesktopMenu>
          <StyledDesktopMenuItem>
            <Link to="/about">About Us</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link to="/lesson">Lesson</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link to="/photo">Photo</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link to="/info">Info</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link to="/contact">Contact</Link>
          </StyledDesktopMenuItem>
        </DesktopMenu>
        <MobileMenu onClick={(e) => setOpen(true)}>
          {/* <IconContext.Provider value={{ size: "1.8rem", padding: "0", margin: "0", color: "white" }}>
            
          </IconContext.Provider> */}
          <MdMenu />
        </MobileMenu>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 95,
          horizontal: "right",
        }}
        // transformOrigin={{
        //   vertical: "top",
        //   // horizontal: "bottom",
        // }}
        PaperProps={{
          style: {
            marginBlock: "1rem",
            background: "var(--drop-down-menu-bg)",
            width: "100%",
            minHeight: "80vh",
            backdropFilter: "var(--header-blur-filter)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Link to="" onClick={exitMenu}>
          <StyledMenuItem>
            <IconContext.Provider value={{ size: "2rem" }}>
              <AiOutlineArrowLeft />
            </IconContext.Provider>
          </StyledMenuItem>
        </Link>
        {/* <Link onClick={exitMenu} to="/">
          <StyledMenuItem>About Me</StyledMenuItem>
        </Link> */}
        <Link onClick={exitMenu} to="/about">
          <StyledMenuItem>About</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/lesson">
          <StyledMenuItem>Lesson</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/photo">
          <StyledMenuItem>Photo</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/info">
          <StyledMenuItem>Info</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/contact">
          <StyledMenuItem>Contact</StyledMenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
}

export default Header;