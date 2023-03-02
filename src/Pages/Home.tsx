import class1 from "../Assets/class1.jpg"
import grains from "../Assets/grains.jpg"
import bottles from "../Assets/bottles.jpg"
import wine from "../Assets/winebottles.jpg"

import React, { CSSProperties } from "react";
import {Link} from "react-router-dom"
import Divider from "@mui/material/Divider"
import { GiCellarBarrels } from 'react-icons/gi';
import { Typography, Box, Paper, Grid } from "@mui/material";
import { minHeight, width } from "@mui/system";

const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
  height: "55vh",
  minHeight:"15em",
  marginTop: "20px",
  alignSelf: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center"
}

const heroText: CSSProperties = {
  textAlign: "center",
  color: "white",
  fontSize:"40px"
}

const title: CSSProperties = {
  textAlign:"center",
  color: "var(--maroon-color)",
  fontWeight: "700",
  fontSize: "30px",
  marginTop:"50px",
  marginBottom:"10px",
  width:"100%"
}

const StyledPaper: CSSProperties = {
  padding: "1rem",
  border:"2px solid",
  borderColor:"#6028278e",
  backgroundColor: "var(--green-color)",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  // minHeight:"150px"
};
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

export default function Home() {
  return (
    <>
    <div style={heroImg}>
      <div style={heroText}>
        <p>Enjoy your winemaking hobby responsibly!</p>
      </div>
    </div>
    <Divider style={{height:"50px"}}><GiCellarBarrels style={{height:"100px",fontSize:"60px"}}/></Divider>
    <Grid container minHeight="30vh" maxWidth="lg" margin={{ lg: "auto" }} spacing={3}>
      <Typography style={title}
      >
        Fermentations Education Center
      </Typography>
      <Grid item xs={12} sm={6} lg={6} >
        <Box style={StyledBox}>
            <Paper style={StyledPaper} sx={{minHeight:{sm:"200px",md:"245px", lg:"240px"}}}>
              <Typography>
                In order to serve our clients better, we have created a new Classroom/Education Center within Fermentations Home Winemaking Center. We have always valued the educational aspects of making wine and beer, so now we have a room dedicated to the learning environment. In the near future, we'll feature wine and beer education events.
              </Typography>
              <Link style={{fontWeight:"550"}} to="/contact">Contact us for arrangements to use this presentation space for your special event. </Link>
            </Paper>
          </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={5}>
        <Box  style={StyledBox}>
          <img src={class1} alt="classroom" style={images} />
        </Box>
      </Grid>
      <Typography style={title}
      >
        We Have Grains
      </Typography>
      <Grid item xs={12} sm={6} lg={5}>
        <Box  style={StyledBox}>
          <img src={grains} alt="grainroom" style={images} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
          <Box style={StyledBox}>
            <Paper style={StyledPaper} sx={{minHeight:{sm:"200px",md:"245px", lg:"235px"}}}>
              <Typography>
                To serve our all-grain brewing community better, we've expanded and added a full-service grain room, complete with 15 Base Malts, 60 Specialty Malts, and two mills (one Barley Crusher and one Brewery Series Professional mill).  Check out our selection - we intend to have the best selection and service in this Region!
              </Typography>
            </Paper>
          </Box>
      </Grid>
      <Typography style={title}
      >
        Wine Kits
      </Typography>
      <Grid item xs={12} sm={6} lg={6} >
        <Box style={StyledBox}>
            <Paper style={StyledPaper} sx={{minHeight:{sm:"200px",md:"245px", lg:"240px"}}}>
              <Typography>
                In order to serve our clients better, we have created a new Classroom/Education Center within Fermentations Home Winemaking Center. We have always valued the educational aspects of making wine and beer, so now we have a room dedicated to the learning environment. In the near future, we'll feature wine and beer education events.
              </Typography>
              <Link style={{fontWeight:"550"}} to="/contact">Contact us for arrangements to use this presentation space for your special event. </Link>
            </Paper>
          </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={5}>
        <Box  style={StyledBox}>
          <img src={wine} alt="classroom" style={images} />
        </Box>
      </Grid>
      <Typography style={title}
      >
        Beer Kits
      </Typography>
      <Grid item xs={12} sm={6} lg={5}>
        <Box  style={StyledBox}>
          <img src={bottles} alt="bottles" style={images} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
          <Box style={StyledBox}>
            <Paper style={StyledPaper} sx={{minHeight:{sm:"200px",md:"245px", lg:"235px"}}}>
              <Typography>
                To serve our all-grain brewing community better, we've expanded and added a full-service grain room, complete with 15 Base Malts, 60 Specialty Malts, and two mills (one Barley Crusher and one Brewery Series Professional mill).  Check out our selection - we intend to have the best selection and service in this Region!
              </Typography>
            </Paper>
          </Box>
      </Grid>
    </Grid>
    </>
  )
}
