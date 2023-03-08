import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CSSProperties } from "react";
// import HeroImage from "../Assets/photoGallery";

import photoGallery from "../Assets/photoGallery";

const StyledBox: CSSProperties = {
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  border: "1px solid gold",
  minHeight: "100%",
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
      <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
        <Grid container maxWidth="lg" rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <ImageList cols={2} sx={{ margin: 0 }}>
                {photoGallery.slice(0, 4).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
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
          <Grid item xs={12} md={4} lg={4}>
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

          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <ImageList cols={2} sx={{ margin: 0 }}>
                {photoGallery.slice(8, 12).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <ImageList cols={2} sx={{ margin: 0 }}>
                {photoGallery.slice(12, 16).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <ImageList cols={2} sx={{ margin: 0 }}>
                {photoGallery.slice(4, 8).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <ImageList cols={2} sx={{ margin: 0 }}>
                {photoGallery.slice(16, 20).map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.imageSource}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.imageSource}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
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
        </Grid>
      </div>
    </>
  );
}
