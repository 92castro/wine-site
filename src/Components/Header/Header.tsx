import logo from "../../Assets/Capture.png";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, styled, Typography, Box, MenuItem, Menu } from "@mui/material";
import { IconContext } from "react-icons";
import { FaGlassCheers } from 'react-icons/fa';
import { GiBarrel } from 'react-icons/gi';
import CloseIcon from '@mui/icons-material/Close';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#f5f5f5",
  minHeight: "65px",
  fontSize: "180%",
  textAlign: "center",
  position: "relative",
  fontFamily: "Italiana, serif",
  fontWeight:"bold",

  "&:hover": {
    // backgroundColor: "transparent",
    // textDecorationLine: "underline",
    // textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
}));
const StyledDesktopMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "var(--maroon-color)",
  minHeight: "65px",
  fontSize: "125%",
  textAlign: "center",
  position: "relative",
  fontFamily: "Italiana, serif",
  fontWeight:"bold",

  "&:hover": {
    // backgroundColor: "transparent",
    // textDecorationLine: "underline",
    // textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
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
    <AppBar position="relative" sx={{ background:"linear-gradient(180deg, rgba(191,166,162,0.19931722689075626) 75%, rgba(184,148,148,0.3029586834733894) 100%)", padding:"5px" }}>
      <StyledToolbar>
        <Link to="/"><img src={logo} alt="logo" style={{borderRadius:"20px",height:"70px"}} /></Link>
        <Typography  sx={{fontSize:{xs:"12px", sm:"20px"},color:"var(--maroon-color)",fontFamily: "Italiana, serif",
  fontWeight:"bold",}}>
          Enabling Home Winemakers & Homebrewers since 2011     
          </Typography>
        <DesktopMenu>
          <StyledDesktopMenuItem>
            <Link to="/about">About Us</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link to="/lessons">Lesson</Link>
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
          <MenuRoundedIcon sx={{color:"black"}} fontSize="large" />
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
            background: "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.5))",
            width: "100%",
            minHeight: "80vh",
            // backdropFilter: "var(--header-blur-filter)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Link to="" onClick={exitMenu}>
          <StyledMenuItem>
            <IconContext.Provider value={{ size: "2rem" }}>
              <CloseIcon sx={{fontSize:"45px"}} />
            </IconContext.Provider>
          </StyledMenuItem>
        </Link>
        {/* <Link onClick={exitMenu} to="/">
          <StyledMenuItem>About Me</StyledMenuItem>
        </Link> */}
        <Link onClick={exitMenu} to="/about">
          <StyledMenuItem><FaGlassCheers/>About</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/lessons">
          <StyledMenuItem><GiBarrel/>Lesson</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/photo">
          <StyledMenuItem><PhotoOutlinedIcon/>Photo</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/info">
          <StyledMenuItem><InfoOutlinedIcon/>Info</StyledMenuItem>
        </Link>
        <Link onClick={exitMenu} to="/contact">
          <StyledMenuItem><EmailOutlinedIcon/>Contact</StyledMenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
}

export default Header;
