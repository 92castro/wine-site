import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CSSProperties } from "react";
// import HeroImage from "../Assets/photoGallery";

import photoGallery from "../Assets/photoGallery";

const StyledBox: CSSProperties = {
  // boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  minHeight: "100%",
  maxWidth: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignContent: "center"
  marginInline: "auto",
  textAlign: "center",
};
const heroImg: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
  height: "40vh",
  minHeight: "15em",
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
              fontFamily: "Italiana, sans-serif",
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
          {/* Photo Gallery #1 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 2, sm: 2, md: 1 }}>
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
          {/* Text Box #1 Grid item */}
          <Grid item xs={12} md={8} lg={8} order={{ xs: 1, sm: 1, md: 2 }}>
            <Box style={StyledBox}>
              <Typography
                component="h3"
                variant="h6"
                textAlign="center"
                sx={{
                  fontFamily: "Italiana, sans-serif",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "35px", sm: "40px", lg: "50px", textShadow: "2px 2px 5px #667" },
                }}
              >
                Title
              </Typography>
              <Typography component="p" py={{ xs: 2, lg: 2 }} px={{ xs: 2, sm: 3, md: 3, lg: 2 }} sx={{ fontSize: { sm: "16px", md: "18px" } }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
                urna id volutpat lacus laoreet non curabitur gravida.
              </Typography>
            </Box>
          </Grid>
          {/* Text Box #2 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 4, sm: 4, md: 3 }}>
            <Box style={StyledBox}>
              <Typography
                component="h3"
                variant="h6"
                textAlign="center"
                sx={{
                  fontFamily: "Italiana, sans-serif",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "35px", sm: "40px", lg: "50px", textShadow: "2px 2px 5px #667" },
                }}
              >
                Title
              </Typography>
              <Typography component="p" py={{ xs: 2, lg: 2 }} px={{ xs: 2, sm: 3, md: 3, lg: 2 }} sx={{ fontSize: { sm: "16px", md: "18px" } }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
                urna id volutpat lacus laoreet non curabitur gravida.
              </Typography>
            </Box>
          </Grid>
          {/* Photo Gallery #2 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 3, sm: 3, md: 4 }}>
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
          {/* Photo Gallery #3 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 5, sm: 6, md: 5 }}>
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
          {/* Photo Gallery #4 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 7, sm: 5, md: 6 }}>
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
          {/* Photo Gallery #5 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 8, sm: 7, md: 7 }}>
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
          {/* Text Box #3 Grid item */}
          <Grid item xs={12} md={4} lg={4} order={{ xs: 6, sm: 8, md: 8 }}>
            <Box style={StyledBox}>
              <Typography
                component="h3"
                variant="h6"
                textAlign="center"
                sx={{
                  fontFamily: "Italiana, sans-serif",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "35px", sm: "40px", lg: "50px", textShadow: "2px 2px 5px #667" },
                }}
              >
                Title
              </Typography>
              <Typography component="p" py={{ xs: 2, lg: 2 }} px={{ xs: 2, sm: 3, md: 3, lg: 2 }} sx={{ fontSize: { sm: "16px", md: "18px" } }}>
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
//
