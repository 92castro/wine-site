import React, { CSSProperties } from "react";
import { Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
const StyledGridItem: CSSProperties = {
  // minHeight: "400px",
};
const StyledPaper: CSSProperties = {
  // minHeight: "400px",
  padding: "2rem",
  backgroundColor: "var(--green-color)",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
};
const StyledBox: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
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

console.log(wineMakingSteps);

export default function Lessons() {
  return (
    <>
      <Typography
        maxWidth={{ xs: "400px", sm: "450px", lg: "550px" }}
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
        Personalized winemaking and home brew lessons
      </Typography>
      <Grid container maxWidth="lg" minHeight="100vh" rowSpacing={{ xs: 3 }} columnSpacing={{ md: 3 }} margin={{ lg: "auto" }}>
        <Grid item style={StyledGridItem} xs={12} md={12} lg={12}>
          <Box style={StyledBox}>
            <Paper style={StyledPaper}>
              <Typography component="p" py={1}>
                Winemaking lessons are available Mondays through Saturdays during regular store hours.
                <Typography component="span" sx={{ fontWeight: "700" }}>
                  Appointments will be scheduled after payment is received for your lesson fees and ingredient kit.
                </Typography>
                Beermaking lessons require 3 hours on the first day, by appointment only.
              </Typography>
              <Typography component="p" py={1}>
                Winemaking and beer brewing is an adult hobby, for participants over the age of 21. Due to space limitations in our center we ask that
                children not be brought along during your appointments, to permit your full attention during the winemaking process.
              </Typography>
              <Typography component="p" py={1}>
                Winemaking centers like Fermentations are considered extensions of your home. The wine is your property from start to finish, and you
                make it yourself. We will help you through each step to make your wine with our equipment in our store, then take home the wine you
                bottle and label personally, approximately 7 to 8 weeks later.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
          <Box style={StyledBox}>
            <Paper style={StyledPaper} sx={{ minHeight: { md: "800px", lg: "650px" } }}>
              <Typography component="h3" variant="h6">
                Winemaking in five (5) easy steps. Each step is two weeks from the last one.
              </Typography>
              <List>
                {wineMakingSteps.map((step, index) => (
                  <ListItem sx={{ display: "listItem" }} key={index}>
                    <WineBarIcon />
                    {step.step}
                  </ListItem>
                ))}
              </List>
              <Typography component="h3" variant="h6">
                What will this cost?
              </Typography>
              <Typography component="p">
                We currently charge $99.75 + tax to make wine in our store (includes bottles, corks, labels, shrink capsules, use of equipment &
                lesson fee), plus the wine ingredient kit of your choice. Wine ingredient kits make approx. 30 bottles, and range from $75 for Island
                Mist (fruit-flavored wine-based beverages) to about $211 for our highest end Cabernet Sauvignon ingredient kits. Typical total cost is
                around $250 to $300 for 30 bottles of great quality wine, or about $8 to $10 per bottle for wine that rivals premium varietal wine
                brands in liquor stores.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item style={StyledGridItem} xs={12} md={6} lg={6}>
          <Paper style={StyledPaper} sx={{ minHeight: { md: "800px", lg: "650px" } }}>
            <Box style={StyledBox}>
              <Typography component="p">
                Fermentations has the Best Selection of Brewing Grains in Colorado Springs! Our professional brewery grade mill is getting terrific
                customer reviews, too! Check us out!
              </Typography>
              <Typography component="h3" variant="h6">
                Beer Brewing in three easy steps:
              </Typography>
              <List>
                {beerMakingSteps.map((step, index) => (
                  <ListItem sx={{ display: "listItem" }} key={index}>
                    <SportsBarIcon />
                    {step.step}
                  </ListItem>
                ))}
              </List>
              <Typography component="h3" variant="h6">
                What will this cost?
              </Typography>
              <Typography component="p">
                We currently charge $56.50 plus ingredients to make beer in our store. Includes 3 hour brewing session, 48 to 52 bottles, use of our
                equipment & lesson fee, plus the beer ingredient kit of your choice. Beer ingredient kits make approx. 5 gallons (48-52 bottles), and
                range from $35 to $60 depending upon the kit you choose. Typical total cost is around $100 to $120 for two cases of great quality
                beer, or about $2 per bottle for beer that rivals premium brands in liquor stores. Three weeks from start to bottling in 3
                appointments, plus approximately four weeks for bottle conditioning
              </Typography>
            </Box>
          </Paper>
        </Grid>
        {/* <Grid item style={StyledGridItem} xs={12} md={12} lg={12}>
          <Box style={StyledBox}>Custom bottle labels</Box>
        </Grid> */}
      </Grid>
    </>
  );
}
