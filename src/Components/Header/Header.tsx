import logo from "../../Assets/Capture.png";
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from "@mui/material";


export default function Header() {
  return (
    <>
    <header style={{display:"flex",justifyContent:"space-around"}}>
      
      <Link to="/"><img src={logo} alt="" style={{borderRadius:"20px"}} /></Link>
      <Typography component="p" sx={{width:"20%",fontSize:"15px"}}>
        Enabling Home Winemakers & Homebrewers since 2011
      </Typography>
      <Link to="/about">About</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/photo">Photo</Link>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
    </header>
    </>
  )
}


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