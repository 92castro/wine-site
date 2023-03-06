import ImageOne from "../Assets/CustomLabelOne.jpg";
import ImageTwo from "../Assets/CustomLabelTwo.jpg";
import ImageThree from "../Assets/CustomLabelThree.jpg";
import ImageFour from "../Assets/CustomLabelFour.jpg";
import HeroImage from "../Assets/vineYardImage.jpg";

import React, { CSSProperties } from "react";
import { Grid, ImageList, ImageListItem, List, ListItem, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LessonsGridPhoto from "../Assets/WineBottlesOnWineBarrel.png";
const StyledGridItem: CSSProperties = {
  // padding: "2rem",
  // minHeight: "400px",
};
// const StyledPaper: CSSProperties = {
//   // minHeight: "400px",
//   padding: "2rem",
//   // backgroundColor: "var(--green-color)",
//   backgroundColor: "none",
//   background: "none",
//   border: "0",
//   // boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
// };
const StyledBox: CSSProperties = {
  // height: "100%",
  display: "flex",
  flexDirection: "column",
  // borderRadius: "8px",
  backgroundColor: "none",
  // padding: "1rem",
};
const heroImg: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
  height: "40vh",
  minHeight: "15em",
  marginTop: "20px",
  alignSelf: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
};

const wineMakingSteps: { step: string }[] = [
  { "step": "Mix wine ingredients (premium juice, water & yeast) to begin primary fermentation. Allow 45 minutes for your first lesson." },
  { "step": "Transfer your wine-in-progress to a glass carboy.  It takes about 15 minutes for this step; continue in secondary fermentation." },
  {
    "step":
      "Add the 'fining agents' which prevent oxidation, clarify your wine and prevent renewed fermentation of the wine. Allow 15 to 20 minutes.",
  },
  {
    "step": " Transfer (rack) your wine to leave the remaining sediment behind and make your wine clear enough to bottle.  15 minutes for this step.",
  },
  { "step": "Bottling!  Allow 90 minutes to fill, cork and label your bottles. Then you'll take your bottled wine home with you." },
];
const beerMakingSteps: { step: string }[] = [
  { "step": "About 3 hours on day one to brew your beer and begin primary fermentation." },
  { "step": "Rack to secondary fermentation (10 minutes)" },
  {
    "step": "Prime & bottle your beer, then take it home (60 minutes).",
  },
];

const itemData: { img: string; title: string }[] = [
  {
    img: ImageTwo,
    title: "Danish Devil wine label",
  },

  {
    img: ImageThree,
    title: "Cosmo Kramer's wine label",
  },
  {
    img: ImageOne,
    title: "Seville Orange wine label",
  },
  {
    img: ImageFour,
    title: "Badge wine label",
  },
];
// ={{ xs: 3, md: 2 }}
export default function Lessons() {
  return (
    <>
      <Box style={heroImg}></Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container maxWidth="xl" minHeight="100vh" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 6 }}>
          <Grid item style={StyledGridItem} xs={12} md={6} lg={6} sx={{ display: { xs: "none", md: "block" } }}>
            <img src={LessonsGridPhoto} style={{ width: "100%", height: "100%" }} />
          </Grid>
          {/* Lesson info grid item */}
          <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <Box>
                <Typography
                  maxWidth={{ xs: "400px", sm: "470px", lg: "600px" }}
                  component="h1"
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "35px", sm: "40px", lg: "50px" },
                    marginY: { xs: "1rem", md: "2rem" },
                    px: { xs: 2, sm: 3, md: 3, lg: 2 },
                    fontFamily: "League Spartan",
                  }}
                >
                  Personalized winemaking and home brew lessons
                </Typography>
                <Typography
                  component="p"
                  py={{ xs: 1, lg: 2 }}
                  px={{ xs: 2, sm: 3, md: 3, lg: 2 }}
                  sx={{ fontSize: { sm: "16px", md: "18px", lg: "20px" } }}
                >
                  Winemaking lessons are available Mondays through Saturdays during regular store hours.
                  <Typography component="span" sx={{ fontWeight: "700", display: "block" }}>
                    Appointments will be scheduled after payment is received for your lesson fees and ingredient kit.
                  </Typography>
                  Beermaking lessons require 3 hours on the first day, by appointment only.
                </Typography>
                <Typography
                  component="p"
                  py={{ xs: 1, lg: 2 }}
                  px={{ xs: 2, sm: 3, md: 3, lg: 2 }}
                  sx={{ margin: { sm: "auto" }, fontSize: { sm: "16px", md: "18px", lg: "20px" } }}
                >
                  Winemaking and beer brewing is an adult hobby, &nbsp;
                  <Typography component="span" sx={{ fontWeight: "700" }}>
                    for participants over the age of 21 years old.
                  </Typography>
                  <br />
                  Due to space limitations in our center we ask that children not be brought along during your appointments, to permit your full
                  attention during the winemaking process.
                </Typography>
                <Typography
                  component="p"
                  py={{ xs: 1, lg: 2 }}
                  px={{ xs: 2, sm: 3, md: 3, lg: 2 }}
                  sx={{ margin: { sm: "auto" }, fontSize: { sm: "16px", md: "18px", lg: "20px" } }}
                >
                  Winemaking centers like Fermentations are considered extensions of your home. The wine is your property from start to finish, and
                  you make it yourself. We will help you through each step to make your wine with our equipment in our store, then take home the wine
                  you bottle and label personally, approximately 7 to 8 weeks later.
                </Typography>
              </Box>
            </div>
          </Grid>
          {/* winemaking steps grid item */}
          <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
            <Box
              p={{ xs: 1, md: 2 }}
              sx={{ display: "flex", flexDirection: "column", minHeight: { md: "550px", lg: "650px" }, justifyContent: "space-between" }}
            >
              <Typography
                component="h3"
                variant="h6"
                sx={{ fontSize: { xs: "32px", lg: "40px" }, textAlign: "center", mt: 5, fontFamily: "League Spartan" }}
              >
                Winemaking in five (5) easy steps.
                {/* <Typography component="small" sx={{ fontSize: "12px", display: "block" }}>
                  Each step is two weeks from the last one.
                </Typography> */}
              </Typography>
              <List sx={{ minHeight: "360px" }}>
                {wineMakingSteps.map((step, index) => (
                  <ListItem sx={{ display: "listItem" }} key={index}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <WineBarIcon sx={{ alignSelf: "center" }} />
                      <Typography component="p" sx={{ marginLeft: 2, fontSize: { sm: "16px", md: "18px" } }}>
                        {step.step}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
              <Typography component="h3" variant="h6" sx={{ fontWeight: "700", fontSize: { sm: "18px", md: "22px", lg: "26px" } }}>
                What will this cost?
              </Typography>
              <Typography component="p">
                We currently charge{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  $99.75 + tax to make wine in our store.
                </Typography>
                <br />
                Which includes bottles, corks, labels, shrink capsules, use of equipment & lesson fee, plus the wine ingredient kit of your choice.
                Wine ingredient kits{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  make approximately 30 bottles
                </Typography>
                , and range from $75 for Island Mist (fruit-flavored wine-based beverages) to about $211 for our highest end Cabernet Sauvignon
                ingredient kits. Typical{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  total cost is around $250 to $300 for 30 bottles of great quality wine
                </Typography>{" "}
                , or about{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  $8 to $10 per bottle
                </Typography>{" "}
                for wine that rivals premium varietal wine brands in liquor stores.
              </Typography>
            </Box>
          </Grid>
          {/* beer brewing steps grid item */}
          <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
            <Box
              p={{ xs: 1, md: 2 }}
              sx={{ display: "flex", flexDirection: "column", minHeight: { md: "550px", lg: "650px" }, justifyContent: "space-between" }}
            >
              <Typography
                component="h3"
                variant="h6"
                sx={{ fontSize: { xs: "32px", lg: "40px" }, textAlign: "center", mt: 5, fontFamily: "League Spartan" }}
              >
                Beer Brewing in three (3) easy steps:
              </Typography>
              <List sx={{ minHeight: "360px" }}>
                {beerMakingSteps.map((step, index) => (
                  <ListItem sx={{ display: "listItem" }} key={index}>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                      <SportsBarIcon />
                      <Typography component="p" sx={{ marginLeft: 2, fontSize: { sm: "16px", md: "18px" } }}>
                        {step.step}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
              <Typography component="h3" variant="h6" sx={{ fontWeight: "700", fontSize: { sm: "18px", md: "22px", lg: "26px" } }}>
                What will this cost?
              </Typography>
              <Typography component="p">
                We currently charge{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  $56.50 plus ingredients to make beer in our store.
                </Typography>{" "}
                Includes 3 hour brewing session, 48 to 52 bottles, use of our equipment & lesson fee, plus the beer ingredient kit of your choice.
                Beer ingredient kits{" "}
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  make approximately 5 gallons (48-52 bottles)
                </Typography>
                , and range from $35 to $60 depending upon the kit you choose.Typical{" "}
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  total cost is around $100 to $120 for two cases of great quality beer
                </Typography>
                , or about{" "}
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  $2 per bottle
                </Typography>{" "}
                for beer that rivals premium brands in liquor stores. Three weeks from start to bottling in 3 appointments, plus approximately four
                weeks for bottle conditioning
              </Typography>
            </Box>
          </Grid>
          <Typography
            maxWidth={{ xs: "500px", sm: "600px", lg: "100%" }}
            component="h1"
            textAlign="center"
            sx={{
              color: "var(--maroon-color)",
              fontWeight: "700",
              fontSize: { xs: "28px", sm: "36px", lg: "42px" },
              marginX: "auto",
              marginY: { xs: "1rem", md: "2rem" },
            }}
          >
            Personalize your wine and beer bottles with custom labels!
          </Typography>
          {/* Custom labels grid item*/}
          <Grid item style={StyledGridItem} xs={12} md={12} lg={8}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
              <Box style={StyledBox}>
                <Typography component="p" py={{ sm: 1, lg: 2 }} px={{ sm: 3, lg: 2 }}>
                  We can print any label design you create on high-gloss, white self-adhesive labels. Standard with each winemaking class in our
                  store,we will print your custom label creations to showcase your handmade beverages. Stock label sizes are 3"x4", 3"x3",
                  2-1/2"x3-3/4", 2"x3" & 2"x4" rectangles and 2"x3" ovals. We charge 50-cents per label for customers that purchase classes and
                  ingredients in our store.
                </Typography>
                <Typography component="p" py={{ sm: 1, lg: 2 }} px={{ sm: 3, lg: 2 }}>
                  We can accept your label designs in most graphic formats, but .JPG and .PNG are preferred. Resolution at least 200 dpi, and file
                  sizes at least 100K produce best results. Borders are difficult to align perfectly to the edges of our die-cut label stock.
                  Therefore, we prefer borderless label designs so we can print your image edge-to-edge, for best printed quality.
                </Typography>
                <Typography component="p" py={{ sm: 1, lg: 2 }} px={{ sm: 3, lg: 2 }}>
                  If you design your labels in PowerPoint or MS Publisher, for best printing quality please double the dimensions of the finished
                  label size (i.e. 6:x8" for a 3"x4" label) and "Save As" to a .PNG or .JPG image file before submitting your completed design.
                </Typography>
                <Typography component="p" py={{ sm: 1, lg: 2 }} px={{ sm: 3, lg: 2 }}>
                  Free label design templates are available from the following third-party websites: www.beerlabelizer.com www.jamlabelizer.com Some
                  examples of labels we've used on our personal homemade beverages are shown below. Email your label design(s) to:
                  labels@fermentations.biz Call Tim at (719) 598-1164 with any questions you may have!
                </Typography>
              </Box>
            </div>
          </Grid>
          {/* Photos grid item*/}
          <Grid item style={StyledGridItem} xs={12} md={12} lg={4}>
            <Box p={{ xs: 1, md: 2 }}>
              <ImageList cols={2} gap={8}>
                {itemData.map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{ background: "cover", height: 185 }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
