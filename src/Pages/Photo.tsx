import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { CSSProperties } from "react";
// import HeroImage from "../Assets/photoGallery";

import photoGallery from "../Assets/photoGallery";

const StyledBox: CSSProperties = {
  height: "100%",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  overflow: "hidden",
};
const heroImg: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
  height: "40vh",
  minHeight: "15em",
  marginTop: "20px",
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
export default function Photo() {
  return (
    <>
      <div style={heroImg}>
        <div style={heroText}>
          <Typography
            maxWidth={{ xs: "400px", sm: "450px", lg: "550px" }}
            component="h1"
            textAlign="center"
            sx={{
              color: "#fff",
              fontWeight: "700",
              fontSize: { xs: "28px", sm: "36px", lg: "42px" },
              marginX: "auto",
              marginY: { xs: "1rem", md: "2rem" },
            }}
          >
            Create memory's and build a family at Fermentations
          </Typography>
        </div>
      </div>
      <Grid container maxWidth="xl" margin={{ lg: "auto" }} spacing={1} mt={5}>
        {photoGallery.map((photo, index) => (
          <Grid key={index} item xs={photo.gridBreakPoints.sx} sm={6} lg={photo.gridBreakPoints.lg}>
            <Box style={StyledBox}>
              <img src={photo.imageSource} style={{ width: "100%", height: "100%", backgroundSize: "cover" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
// object-fit:cover;
//    object-position:50% 50%;
