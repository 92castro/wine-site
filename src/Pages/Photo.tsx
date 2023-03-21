import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CSSProperties } from "react";
import HeroImage from "../Assets/resizedImages/cheers_4500x1800.jpeg";

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

// console.log(photoGallery);
export default function Photo() {
  return (
    <>
      <div>
        <img src={HeroImage} alt="cheers" style={{ maxWidth: "100%", height: "auto" }} />
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
                  fontFamily: "Fermentations",
                  color: "var(--maroon-color)",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "45px", sm: "50px", lg: "60px" },
                }}
              >
                It's Wine O'Clock Somewhere! 
              </Typography>
              <Typography component="p" py={{ xs: 2, lg: 2 }} px={{ xs: 2, sm: 3, md: 3, lg: 2 }} sx={{color: "var(--maroon-color)", fontSize: { sm: "16px", md: "18px" } }}>
                We have a great time helping new friends make, bottle, label and take home their personalized wines.  Please give us a call or stop by our store to schedule your winemaking sessions.
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
                  fontFamily: "Fermentations",
                  color: "var(--maroon-color)",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "45px", sm: "50px", lg: "60px" },
                }}
              >
                Wine a little, laugh a lot.
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
          <Grid item xs={12} md={4} lg={4} order={{ xs: 6, sm: 6, md: 8 }}>
            <Box style={StyledBox}>
              <Typography
                component="h3"
                variant="h6"
                textAlign="center"
                sx={{
                  fontFamily: "Fermentations",
                  color: "var(--maroon-color)",
                  fontWeight: "700",
                  mb: "1rem",
                  fontSize: { xs: "45px", sm: "50px", lg: "60px" },
                }}
              >
                I'm not a wine snob, I'm a wine enthusiast.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
//
