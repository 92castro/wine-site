import logo from "../../Assets/Capture.png";

import {useState } from "react";
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
  fontSize: "215%",
  textAlign: "center",
  position: "relative",
  fontFamily: "Fermentations",
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
  fontSize: "160%",
  textAlign: "center",
  position: "relative",
  fontFamily: "Fermentations",
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
        <Link to="/"><img className="logo" src={logo} alt="logo" style={{borderRadius:"20px",height:"70px", marginRight:"8px", mixBlendMode:"multiply"}} /></Link>
        <Typography className="script" sx={{fontSize:{xs:"12px", sm:"20px"},color:"var(--maroon-color)",fontFamily: "Fermentations",
  fontWeight:"bold",}}>
          Inspiring Home Winemakers & Homebrewers since 2011     
          </Typography>
        <DesktopMenu>
          <StyledDesktopMenuItem>
            <Link className="desktop" to="/about">About Us</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link className="desktop" to="/lessons">Lessons</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link className="desktop" to="/photos">Photos</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link className="desktop" to="/info">Info</Link>
          </StyledDesktopMenuItem>
          <StyledDesktopMenuItem>
            <Link className="desktop" to="/contact">Contact</Link>
          </StyledDesktopMenuItem>
        </DesktopMenu>
        <MobileMenu onClick={(e) => setOpen(true)}>
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
        PaperProps={{
          style: {
            marginBlock: "1rem",
            background: "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8))",
            width: "100%",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {/* <Link to=""  */}
        <Typography style={{textAlign:"center", color:"white",fontFamily: "Fermentations", marginBottom:"15px", fontWeight:"bold", fontSize:"30px"}} >
              Inspiring Home Winemakers & Homebrewers since 2011  
          </Typography>
          <StyledMenuItem onClick={exitMenu}>
            <IconContext.Provider value={{ size: "2rem" }}>
              <CloseIcon sx={{fontSize:"45px"}} />
            </IconContext.Provider>
          </StyledMenuItem>
        {/* </Link> */}
        <Link className="mobile" onClick={exitMenu} to="/about">
          <StyledMenuItem><FaGlassCheers style={{padding:"5px"}} />About</StyledMenuItem>
        </Link>
        <Link className="mobile" onClick={exitMenu} to="/lessons">
          <StyledMenuItem><GiBarrel style={{padding:"5px"}}/>Lessons</StyledMenuItem>
        </Link>
        <Link className="mobile" onClick={exitMenu} to="/photos">
          <StyledMenuItem><PhotoOutlinedIcon style={{padding:"10px"}}/>Photos</StyledMenuItem>
        </Link>
        <Link className="mobile" onClick={exitMenu} to="/info">
          <StyledMenuItem><InfoOutlinedIcon style={{padding:"10px"}}/>Info</StyledMenuItem>
        </Link>
        <Link className="mobile" onClick={exitMenu} to="/contact">
          <StyledMenuItem><EmailOutlinedIcon style={{padding:"10px"}}/>Contact</StyledMenuItem>
        </Link>
      </Menu>
    </AppBar>
  );
}

export default Header;
