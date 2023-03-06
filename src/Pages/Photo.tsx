import { Grid, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { CSSProperties } from "react";
// import HeroImage from "../Assets/photoGallery";

import photoGalleryOne from "../Assets/photoGallery";
import photoGalleryTwo from "../Assets/photoGallery";

// photoGalleryThree, photoGalleryFour, photoGalleryFive, photoGallerySix
const StyledBox: CSSProperties = {
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  // overflow: "hidden",
  padding: "1rem",
  border: "1px solid gold",
  // marginInline: "1rem",
};
// const PhotoStyledBox: CSSProperties = {};
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
// console.log(photoGallery);
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container maxWidth="lg" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 6 }}>
          {/* {photoGallery.map((photo, index) => (
          <Grid key={index} item xs={photo.gridBreakPoints.sx} sm={6} lg={photo.gridBreakPoints.lg}>
            <Box style={StyledBox}>
              <img src={photo.imageSource} style={{ width: "100%", height: "100%", backgroundSize: "cover" }} />
            </Box>
          </Grid>
        ))} */}
          {/* <Grid item xs={12} md={6} lg={8}>
            <Box style={StyledBox}>
              <Typography component="h3" variant="h6">
                Title
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
                urna id volutpat lacus laoreet non curabitur gravida.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box>
              <ImageList cols={2} gap={6}>
                {photoGallery.slice(0, 4).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ background: "cover", height: 150 }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box>
              <ImageList cols={2} gap={6}>
                {photoGallery.slice(4, 8).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ background: "cover", height: 150 }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Box style={StyledBox}>
              <Typography component="h3" variant="h6">
                Title
              </Typography>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
                urna id volutpat lacus laoreet non curabitur gravida.
              </Typography>
            </Box>
          </Grid> */}
          <Grid item xs={12} md={6} lg={8}>
            <TextBoxComponent />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ImageListComponent photoGallery={photoGalleryOne} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ImageListComponent photoGallery={photoGalleryTwo} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <TextBoxComponent />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const TextBoxComponent = () => {
  return (
    <Box style={StyledBox}>
      <Typography component="h3" variant="h6">
        Title
      </Typography>
      <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id
        volutpat lacus laoreet non curabitur gravida.
      </Typography>
    </Box>
  );
};
const ImageListComponent = (photoGallery: any) => {
  return (
    <ImageList cols={2} gap={6}>
      {photoGallery.map((photo: any, index: number) => (
        <ImageListItem key={index}>
          <img
            src={`${photo.imageSource}?w=248&fit=crop&auto=format`}
            srcSet={`${photo.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={photo.name}
            loading="lazy"
            style={{ background: "cover", height: 150 }}
          />
        </ImageListItem>
      ))}
      {/* {photoGallery.map((item, index) => (
      
      ))} */}
    </ImageList>
  );
};

// text box component
// image list component
// data
