import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { CSSProperties } from "react";

import photoGallery from "../Assets/photoGallery";

const StyledBox: CSSProperties = {
  height: "100%",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  borderRadius: "8px",
  border: "1px solid #fff",
  overflow: "hidden",
};
const heroImg: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
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
          <p>Create memory's and build a family at Fermentations</p>
        </div>
      </div>
      <Grid container maxWidth="lg" margin={{ lg: "auto" }} spacing={1}>
        {photoGallery.map((photo, index) => (
          <Grid key={index} item xs={photo.gridBreakPoints.sx} sm={6} lg={photo.gridBreakPoints.lg}>
            <Box style={StyledBox}>
              <img src={photo.imageSource} style={{ objectFit: "fill", width: "100%", height: "100%" }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
