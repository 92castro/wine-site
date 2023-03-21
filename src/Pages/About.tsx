import storefront from "../Assets/storefront.jpg"

import { CSSProperties } from "react";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';



const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${storefront})`,
  height: "40vh",
  alignSelf: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%", 
};

const heroText: CSSProperties = {
  textAlign: "center",
  color: "white",
  fontSize: "40px",
};

const title: CSSProperties = {
  textAlign: "center",
  color: "var(--maroon-color)",
  fontWeight: "700",
  fontSize: "50px",
  marginTop:"40px",
  marginBottom:"10px",
  width:"100%",
  fontFamily: "Fermentations"
}

const paragraphs: CSSProperties = {
  textAlign:"center",
  fontSize:"20px",
  color:"var(--maroon-color)",
}

const StyledBox: CSSProperties = {
  display: "flex",
  flexDirection:"column",
  borderRadius: "8px",
};

export default function About() {
  return (
  <>
    <div style={heroImg}>
        <div style={heroText}>
          <p></p>
        </div>
    </div>
    <div style={{padding:"20px"}}>
    <Grid container minHeight="30vh" maxWidth="lg" margin={{ lg: "auto" }} rowSpacing={{xs:"2",md:"20"}} columnSpacing={{xs:"2",md:"3rem"}} justifyContent="center">
          <Typography style={{textAlign:"center",width:"100%",fontFamily: "Fermentations",color: "var(--maroon-color)",fontSize:"70px",fontWeight:"bold"}}>
          Who we are
        </Typography>
          <Grid item xs={12} sm={12} md={12}>
            <Box style={StyledBox}>
              <Typography style={paragraphs}>
                Since 2011, Fermentations has been serving Colorado Springs with a wide selection of brewing products, equipment, and supplies for both beginners and advanced brewers. We also offer lessons where we will teach you how to make wine & beer you can share with pride. We began our winemaking hobby as a social event for couples, and have continued to enjoy creating exceptional wines with our friends. Our store is dedicated to creating a community of brewing enthusiasts who share our love for the art and providing everything needed to create unique and delicious brews. Visit us to experience the joy of fermentation for yourself!
              </Typography> 
              </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Box sx={{height:"100%"}}>
            <img src="https://www.aws-cos.com/x/cdn/?https://storage.googleapis.com/production-sitelio-v1-0-5/085/213085/jsB24WCV/979969d26bd24a40b5f501ac221ab0cf" alt="Tim & Brenda" style={{width:"100%",height:"100%",marginInline:"auto",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",borderRadius:"100px" }} />
            <Typography textAlign={"center"}>
              (Tim & Brenda)
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box style={StyledBox}>
              <Typography style={title}>
          American Wine Society
        </Typography>
              <Typography style={paragraphs}>
                Fermentations is a proud member and sponsor of the Colorado Springs Chapter of American Wine Society. After 10 years, the Colorado Springs Chapter of American Wine Society has grown to 100+ members! Meetings are held on the 1st Tuesday of each month at various locations around town. Visit the AWS website: <a href="https://www.aws-cos.com/" rel="noopener noreferrer" target="_blank" style={{color:"var(--maroon-color)", fontWeight:"bold"}}>www.aws-cos.com</a> Or you can contact Tim or Brenda for more information. 
              </Typography>
              </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box style={StyledBox}>
              <Typography style={title
              }>
                Features
              </Typography>
              <List >
                <ListItem>
                  <FeedIcon sx={{color: "var(--maroon-color)"}}/>
              <Typography style={paragraphs} sx={{marginLeft: 2, fontSize: { sm: "16px", md: "18px" } }}>
                Fermentations was featured live on television Sunday morning 2/19/2017 for National Drink Wine Day!  Follow this link to view both segments: 
                <a href="https://www.fox21news.com/mornings/in-studio-interviews/food-and-wine-pairings-for-national-drink-wine-day/" style={{color:"var(--maroon-color)", fontWeight:"bold"}} rel="noopener noreferrer" target="_blank">Fox 21 News</a> 
                </Typography>
                </ListItem>
                <ListItem>
                  <FeedIcon sx={{color: "var(--maroon-color)"}}/>
              <Typography style={paragraphs} sx={{marginLeft: 2, fontSize: { sm: "16px", md: "18px" } }}>
                Fermentations was proudly featured in the online Gazette March 31,2016: 
                <a href="https://gazette.com/news/wine-lover-this-may-be-your-new-favorite-hobby/article_c1cd9e91-6030-56b5-9566-fe66c3dc2f74.html" style={{color:"var(--maroon-color)", fontWeight:"bold"}} rel="noopener noreferrer" target="_blank"> Click Here to see the article.</a>
                </Typography>
                </ListItem>
                <ListItem>
                  <FeedIcon sx={{color: "var(--maroon-color)"}}/>
              <Typography style={paragraphs} sx={{marginLeft: 2, fontSize: { sm: "16px", md: "18px" } }}>
                On Thursday May 7th, Fermentations was featured during the morning news segment of Fox21 News by John Martin. Click the link below to watch the video clip that's posted on Youtube.
                <a href="https://www.youtube.com/watch?v=hAvWNWhwN3k" style={{color:"var(--maroon-color)", fontWeight:"bold"}} rel="noopener noreferrer" target="_blank">Fox21 News Clip 5/07/2015</a>
              </Typography>
              </ListItem>
              </List>
              </Box>
          </Grid>
        </Grid>
        </div>
    </>
  )
}
