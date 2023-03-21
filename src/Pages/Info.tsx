import { CSSProperties } from "react";
import Image from "../Assets/resizedImages/info_4500x1800.jpeg";
import Box from '@mui/material/Box';

//Form Card Styling
const formCard: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh",
    maxWidth: "auto",
    textAlign: "center",
    // backgroundColor: "white",
    margin: "0",
    padding: "10px"
}

//Header Text Styling
const headerText: CSSProperties = {
  fontFamily: "Fermentations", 
  color: "#74250e", 
  margin: "0", 
  fontSize:"40px"
  // textShadow: "2px 2px 5px #667",
}

//Text Info Styling
const infoText: CSSProperties = {
  fontFamily: "Roboto, sans-serif",
}

export default function Info() {
  return (
    <>
      {/* Hero Image */}
      <div className="contactImage">
          <img src={Image} alt="sunset" style={{ maxWidth: "100%", height: "auto" }} />
          <h3 className="contactText">
            Tips, Tricks, and Legality
          </h3>
      </div>
      {/* Hints and Legal Info */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Hints and Tricks */}
          <div style={formCard}>
            <h1 style={headerText}>Tips & Tricks</h1>
            <span style={infoText}>At Fermentations, we offer premium quality wine kits from Winexpert and RJ Spagnols, and beer ingredient kits from Brewers Best & True Brew. The links provided below will take you to helpful hints from our manufacturers to make sure your winemaking & brewing experience is successful.</span>
            <p style={infoText}>Want to know more about Winemaking?  Visit these helpful industry links:</p>
            <p style={infoText}>
              <a className="info" href="https://www.brewersbestkits.com/faqs.html" rel="noopener noreferrer" target="_blank">Brewer's Best Beermaking Tips</a>
            </p>
            <p style={infoText}>
              <a className="info" href="https://winexpert.com/winemaking-process/" rel="noopener noreferrer" target="_blank">Winexpert Helpful Winemaking Tips</a>
            </p>
            <p style={infoText}>
              <a className="info" href="http://winemakermag.com/" rel="noopener noreferrer" target="_blank">Winemaker Magazine</a>
            </p>
            <p style={infoText}>
              <a className="info" href="http://www.byo.com/" rel="noopener noreferrer" target="_blank">Brew Your Own Magazine</a>
            </p>
            <h3 style={infoText}>Enjoy your winemaking hobby responsibly!</h3>
          </div>
          {/* Legal Information */}
          <div style={formCard}>
            <h1 style={headerText}>Legal Information</h1>
            <h3>Here is what the Federal Law says about making beer and wine:</h3>
            <p>The Alcohol and Tobacco Tax and Trade Bureau (TTB) has been asked if there are any Federal requirements covering operation of a Home Winemakers' Center. Home Winemakers' Centers are places where an individual pays a fee to use space and equipment to make wine for personal or family use.</p>
            <p>Although we refer to the individual making wine for personal or family use as a "home winemaker," the wine may be made somewhere other than the individual's residence, including a Home Winemakers' Center.</p>
            <p>
              <a className="info" href="https://www.ttb.gov/wine/wine-faqs#w4" rel="noopener noreferrer" target="_blank">
                Click Here To Access The Federal Guidelines For Home Winemaking Centers:
              </a>
            </p>
            <p>
              <a className="info" href="https://www.ttb.gov/beer/beer-faqs" rel="noopener noreferrer" target="_blank">
                Click Here To Access The Federal Guidelines For Brew On Premises:
              </a>
            </p>
            <h3>Are Sales Taxes In Colorado charged on wine and beer ingredients?</h3>
            <p>In August 2011, the Colorado Department of Revenue provided a written determination that winemaking ingredient kits and beermaking ingredient kits are considered food products for home consumption, and therefore are not subject to sales taxes.  Non-consumable items such as equipment, bottles, corks, labels, etc. are subject to sales taxes, just as they have always been.</p>
            <h3>For more information about homebrewing and winemaking, visit these helpful industry websites:</h3>
            <h4>American Homebrewer's Association:</h4>
            <a className="info" style={{ fontSize: "90%" }} href="http://www.homebrewersassociation.org/pages/government-affairs/talking-points" rel="noopener noreferrer" target="_blank">http://www.homebrewersassociation.org/pages/government-affairs/talking-points</a>
            <a className="info" style={{ fontSize: "90%" }} href="https://www.homebrewersassociation.org/homebrewing-rights/statutes/Colorado/" target="_blank" rel="noopener noreferrer">https://www.homebrewersassociation.org/homebrewing-rights/statutes/Colorado/</a>
            <p>On November 13, 2015 the Colorado Liquor Enforcement Division published a document titled "Homebrew Use and Limitations" to clarify how Homebrewers and Homebrew Supply Stores (i.e. Fermentations Home Winemaking Center) are permitted to handle the production, tasting and use of homebrew by patrons.  The American Homebrewers Association (AHA) has made this document available via its website.  See the following link for the entire document:</p>
            <a className="info" href="http://www.homebrewersassociation.org/wp-content/uploads/2015/11/Colorado-LED-BULLETIN-15-04-Home-Brew.pdf" rel="noopener noreferrer" target="_blank">http://www.homebrewersassociation.org/wp-content/uploads/2015/11/Colorado-LED-BULLETIN-15-04-Home-Brew.pdf</a>
          </div>
      </Box>
    </>
  )
}
