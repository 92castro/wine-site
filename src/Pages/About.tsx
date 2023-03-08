
import React, { CSSProperties } from "react";
import {Link} from "react-router-dom"
import { Grid, Typography, Box } from "@mui/material";



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
  marginTop:"40px",
  marginBottom:"10px",
  width:"100%",
}

const paragraphs: CSSProperties = {
  textAlign:"center",
  fontSize:"20px",
  color:"var(--maroon-color)",
}

const StyledBox: CSSProperties = {
  // height: "100px",
  display: "flex",
  flexDirection:"column",
  borderRadius: "8px",
};

export default function About() {
  return (
  <>
    <div style={heroImg}>
        <div style={heroText}>
          <p></p>
        </div>
    </div>
    <div style={{padding:"20px"}}>
    <Grid container minHeight="30vh" maxWidth="lg" margin={{ lg: "auto" }} rowSpacing={{xs:"2",md:"20"}} columnSpacing={{xs:"2",md:"3rem"}}>
          <Typography style={title}>
          Who we are
        </Typography>
          <Grid item xs={12} sm={12} md={12}>
            <Box style={StyledBox}>
              <Typography style={paragraphs}>
                Since 2011, Fermentation has been serving Colorado Springs, CO with a wide selection of brewing products, equipment, and supplies for both beginners and advanced brewers. We also offer classes and workshops where we will teach you how to make wine & beer you can share with pride. We began our winemaking hobby as a social event for couples, and have continued to enjoy creating exceptional wines with our friends. Our store is dedicated to creating a community of brewing enthusiasts who share our love for the art and providing everything needed to create unique and delicious brews. Visit us to experience the joy of fermentation for yourself!
              </Typography> 
              </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{height:"100%"}}>
            <img src="https://www.aws-cos.com/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-5/085/213085/jsB24WCV/979969d26bd24a40b5f501ac221ab0cf" alt="Tim & Brenda" style={{width:"100%",height:"100%",marginInline:"auto" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box style={StyledBox}>
              <Typography style={title}>
          American Wine Society
        </Typography>
              <Typography style={paragraphs}>
                Fermentations is a proud member and sponsor of the Colorado Springs Chapter of American Wine Society.
                Visit the AWS website at: <a href="https://www.aws-cos.com/" style={{color:"black"}}>www.aws-cos.com.</a>
              </Typography>
              <Typography style={title}>
          Wine Exploration Groups
        </Typography>
              <Typography style={paragraphs}>
                Contact Brenda to join in the fun, for more details and future announcements. Winemaking is a great way to meet new friends and get together with existing ones. Visit Tim or Brenda for more details on costs, schedules and to Join the Fermentations Wine Explorations! Let's travel the winemaking world together! 
              </Typography> 
              </Box>
          </Grid>
        </Grid>
        </div>
    </>
  )
}
