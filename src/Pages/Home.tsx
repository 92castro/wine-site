import class1 from "../Assets/class1.jpg"
import grains from "../Assets/grains.jpg"
import beer from "../Assets/bottles.jpg"
import wine from "../Assets/winebottles.jpg"

import React, { CSSProperties } from "react";
import {Link} from "react-router-dom"
import Divider from "@mui/material/Divider"
import { GiCellarBarrels } from 'react-icons/gi';
import { Typography, Box, Paper, Grid } from "@mui/material";

const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
  height: "55vh",
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
  fontWeight: "600",
  fontSize: "40px",
  // marginTop:"50px",
  marginBottom:"10px",
  width:"100%",
}

const StyledBox: CSSProperties = {
  // height: "100px",
  display: "flex",
  flexDirection:"column",
  borderRadius: "8px",
};

const images: CSSProperties = {
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  borderRadius: "10px",
}

const paragraphs: CSSProperties = {
  textAlign:"center",
  fontSize:"20px",
  color:"var(--maroon-color)"
}

export default function Home() {
  return (
    <>
      <div style={heroImg}>
        <div style={heroText}>
          <p>Enjoy your winemaking hobby responsibly!</p>
        </div>
      </div>
    <Divider style={{height:"50px"}}><GiCellarBarrels style={{height:"100px",fontSize:"60px"}}/></Divider>
    <Grid container minHeight="30vh" maxWidth="lg" margin={{ lg: "auto" }} marginTop={"25px"} spacing={5} px={2}>
      <Grid item xs={12} md={6} lg={6}  >
        <Box style={StyledBox}>
          <Typography style={title}
      >
        Fermentations Education Center
      </Typography>
              <Typography style={paragraphs}>
                In order to serve our clients better, we have created a new Classroom/Education Center within Fermentations Home Winemaking Center. We have always valued the educational aspects of making wine and beer, so now we have a room dedicated to the learning environment. In the near future, we'll feature wine and beer education events.
              </Typography>
              <Link style={{fontWeight:"550"}} to="/contact">Contact us for arrangements to use this presentation space for your special event. </Link>
          </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Box  style={StyledBox}>
          <img src={class1} alt="classroom" style={images} />
        </Box>
      </Grid>
     
      <Grid item xs={12} md={6} lg={5} order={{xs:"2", md:"1"}}>
        <Box  style={StyledBox}>
          <img src={grains} alt="grainroom" style={images} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} order={{xs:"1",md:"2"}}>
          <Box style={StyledBox}>
            <Typography style={title}
      >
        We Have Grains
      </Typography>
              <Typography style={paragraphs}>
                To serve our all-grain brewing community better, we've expanded and added a full-service grain room, complete with 15 Base Malts, 60 Specialty Malts, and two mills (one Barley Crusher and one Brewery Series Professional mill). Check out our selection - we intend to have the best selection and service in this Region!
              </Typography>
          </Box>
      </Grid>
      
      <Grid item xs={12} md={6} lg={6} order={{xs:"3",md:"3"}}>
        <Box style={StyledBox}>
          <Typography style={title}
      >
        Wine Kits
      </Typography>
              <Typography style={paragraphs}>
                Are you a wine enthusiast? A wine starter kit is the perfect way to get started on your winemaking journey, providing you with all the essential equipment and ingredients you need to create your first batch of wine. And the best part, you don't need any prior winemaking experience to get started!
              </Typography>
          </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={5} order={{xs:"4",md:"5"}}>
        <Box  style={StyledBox}>
          <img src={wine} alt="classroom" style={images} />
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6} lg={5} order={{xs:"6",md:"5"}}>
        <Box  style={StyledBox}>
          <img src={beer} alt="bottles" style={images} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} order={{xs:"5",md:"6"}}>
          <Box style={StyledBox}>
            <Typography style={title}
      >
        Beer Kits
      </Typography>
              <Typography style={paragraphs}>
                Are you a beer lover? Imagine the satisfaction of creating your own unique brew, perfectly tailored to your personal taste. With a beer starter kit, you can do just that! Brewing your own beer at home is not only a fun and rewarding hobby, but it also allows you to experiment with different ingredients and styles to create your own signature brew.
              </Typography>
          </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} order={{xs:"7",md:"7"}}>
        <Box style={StyledBox}>
          <Typography style={title}
      >
        Gift Cards
      </Typography>
              <Typography style={paragraphs}>
                Are you a wine enthusiast? A wine starter kit is the perfect way to get started on your winemaking journey, providing you with all the essential equipment and ingredients you need to create your first batch of wine. And the best part, you don't need any prior winemaking experience to get started!
              </Typography>
          </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={5} order={{xs:"8",md:"8"}}>
        <Box  style={StyledBox}>
          <img src="http://www.fermentations.biz/mediac/450_0/media/2e7de5b7368af662ffff805cffffe904.JPG" alt="classroom" style={{maxWidth:"400px", maxHeight:"auto",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  borderRadius: "10px",}} />
        </Box>
      </Grid>
    </Grid>
    </>
  );
}
