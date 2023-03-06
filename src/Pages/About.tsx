
import React, { CSSProperties } from "react";
import {Link} from "react-router-dom"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://www.fermentations.biz/mediac/450_0/media/f7989aefdfb9dbc8ffff8378ffffe904.jpg')",
  height: "45vh",
  minHeight:"15em",
  // marginTop: "20px",
  alignSelf: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
};

const heroText: CSSProperties = {
  textAlign: "center",
  color: "white",
  fontSize: "40px",
};

const title: CSSProperties = {
  textAlign: "center",
  color: "var(--maroon-color)",
  fontWeight: "700",
  fontSize: "50px",
  marginTop:"50px",
  marginBottom:"10px",
  width:"100%",
}

const paragraphs: CSSProperties = {
  textAlign:"center",
  fontSize:"20px",
  color:"var(--maroon-color)",
}

export default function About() {
  return (
    <>
    <div style={heroImg}>
        <div style={heroText}>
          <p></p>
        </div>
    </div>
        <Typography style={title}>
          Who we are
        </Typography>
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <Typography style={paragraphs}>
          Since 2011, our wine making and homebrewing store has been serving Colorado Springs, CO with a wide selection of brewing products, equipment, and supplies for both beginners and advanced brewers. We also offer classes and workshops taught by 
          Tim, who's very passionate about the craft of brewing and enjoys covering topics from beer brewing to wine making. Our store is dedicated to creating a community of brewing enthusiasts who share our love for the art and providing everything needed to create unique and delicious brews. Visit us to experience the joy of brewing for yourself!
        </Typography>
        </Box>
    </>
  )
}
