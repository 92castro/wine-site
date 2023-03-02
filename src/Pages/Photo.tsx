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
export default function Photo() {
  return (
    <Grid container maxWidth="lg" margin={{ lg: "auto" }} spacing={1}>
      {photoGallery.map((photo, index) => (
        <Grid key={index} item xs={photo.gridBreakPoints.sx} sm={6} lg={photo.gridBreakPoints.lg}>
          <Box style={StyledBox}>
            <img src={photo.imageSource} style={{ objectFit: "fill", width: "100%", height: "100%" }} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
