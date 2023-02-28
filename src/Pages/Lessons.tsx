import React, { CSSProperties } from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

const StyledGridItem: CSSProperties = {
  minHeight: "400px",
};
const StyledBox: CSSProperties = {
  height: "100%",
  backgroundColor: "Red",
};
// const brewingLessonData: { wineBrewing: Object;  beerBrewing: Object} = [
//   wineBrewing:  {
//     test : 1
//   },
//   beerBrewing: {
//     test : 1
//   },
// ];

// const people: { name: string; age: number; }[] = [
//     {
//         age: 27,
//         name: 'Tim'
//     },
//     {
//         age: 28,
//         name: 'Bob'
//     }
// ]
export default function Lessons() {
  return (
    <Grid container maxWidth="lg" maxHeight="100vh" spacing={{ xs: 2, md: 3 }} margin={{ lg: "auto" }}>
      <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
        <Box style={StyledBox}>Wine Lessons</Box>
      </Grid>
      <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
        <Box style={StyledBox}>Beer Lessons</Box>
      </Grid>
      <Grid item style={StyledGridItem} xs={12} md={12} lg={12}>
        <Box style={StyledBox}>Custom bottle labels</Box>
      </Grid>
    </Grid>
  );
}
