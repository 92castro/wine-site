
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
        <Box>
          <Typography style={paragraphs}>
          Since 2011, Fermentation has been serving Colorado Springs, CO with a wide selection of brewing products, equipment, and supplies for both beginners and advanced brewers. We also offer classes and workshops where we will teach you how to make wine & beer you can share with pride. We began our winemaking hobby as a social event for couples, and have continued to enjoy creating exceptional wines with our friends. Our store is dedicated to creating a community of brewing enthusiasts who share our love for the art and providing everything needed to create unique and delicious brews. Visit us to experience the joy of fermentation for yourself!
        </Typography>
        <img src="https://www.aws-cos.com/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-5/085/213085/jsB24WCV/979969d26bd24a40b5f501ac221ab0cf" alt="Tim & Brenda" style={{width:"450px", height:"500px"}} />
        </Box>
    </>
  )
}
