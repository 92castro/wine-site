import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { CSSProperties } from "react";

// import  from "../Assets/WinePhotos/photoOne.jfif";

// import { PhotoOne } from "../Assets/WinePhotos";

// const StyledContainer ()

// const photoGalleryData = [
//   {
//     img: ImageTwo,
//     title: "Danish Devil wine label",
//   },

//   {
//     img: ImageThree,
//     title: "Cosmo Kramer's wine label",
//   },
//   {
//     img: ImageOne,
//     title: "Seville Orange wine label",
//   },
//   {
//     img: ImageFour,
//     title: "Badge wine label",
//   },
// ];
const StyledPaper: CSSProperties = {
  // minHeight: "400px",
  padding: "2rem",
  backgroundColor: "var(--green-color)",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  minHeight: "200px",
};
const StyledBox: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
};
export default function Photo() {
  return (
    <Grid container maxWidth="lg" margin={{ lg: "auto" }} spacing={1}>
      <Grid item xs={6} sm={6} lg={6}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={8}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={3}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={8}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} lg={4}>
        <Box style={StyledBox}>
          <Paper style={StyledPaper}>
            <Box>Text</Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
