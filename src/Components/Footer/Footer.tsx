import React, { CSSProperties } from "react";
import { Grid,Box, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const footer: CSSProperties={
  background:"linear-gradient(180deg, rgba(191,166,162,0.19931722689075626) 75%, rgba(184,148,148,0.3029586834733894) 100%)",
  marginTop: "18px",
}

const store: CSSProperties={
  display:"flex",
  flexDirection:"column",
  textAlign:"center"

}

export default function Footer() {
  return (
    <>
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent:"center" }} style={footer}>
      <Grid item sm={4} md={4}>
        <p style={store}>
            <span>Monday - Thursday: 11am to 7pm</span>
            <span>Fridays: 11am to 6pm</span>
            <span>Saturdays: 9am to 2pm</span>
            <span>Closed On Sundays</span>
        </p>
      </Grid>
      <Grid item sm={4} md={4}> 
      <p style={store}>
        <a href="https://www.google.com/maps/place/Fermentations+Home+Winemaking+and+Homebrew+Center,+5765+N+Academy+Blvd,+Colorado+Springs,+CO+80918,+United+States/@38.914191,-104.785929,15z/data=!4m6!3m5!1s0x87134ef4c367b6b3:0xcd184256fb212d0!8m2!3d38.914191!4d-104.7859288!16s%2Fg%2F1tdf1thn?hl=en&gl=JP" target="_blank" style={{color:"black"}}>
        <span>5765 North Academy Blvd.</span>
        <br />
        <span>Colorado Springs, CO 80918</span>
        </a>
      </p>
      <p style={store}>
        <span><b style={{ color: "#74250e"}}>Phone: </b>(719) 598-1164</span>
        <span><b style={{ color: "#74250e"}}>Email: </b>sales@fermentations.biz</span>
      </p>
      </Grid>
      <Grid item sm={4} md={4} >
        < Box component="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.428126182952!2d-104.78811748483716!3d38.914190979568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134ef4c367b6b3%3A0xcd184256fb212d0!2sFermentations%20Home%20Winemaking%20and%20Homebrew%20Center!5e0!3m2!1sen!2sjp!4v1677554341746!5m2!1sen!2sjp" className="map" loading="lazy" sx={{maxWidth:{sm:"220px",md:"400px"}, maxHeight:{lg:"180px"}}}>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{display:"flex",justifyContent:"center"}}>
        <Button style={{transform:"scale(1)"}} startIcon={<FacebookIcon/>} href="https://www.facebook.com/Fermentations" target="_blank"/>
              <Button startIcon={<TwitterIcon/>} href="https://twitter.com/fermentationsco" target="_blank"/>
      </Grid>
    </Grid>
    </>
  )
}
