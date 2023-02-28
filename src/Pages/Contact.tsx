import React, { CSSProperties } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//Form Card Styling
const formCard: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    minWidth: "auto",
    minHeight: "80vh",
    marginTop: "15px",
    marginBottom: "15px",
    // backgroundColor: "#606D32",
    backgroundColor: "#a8ad9c",
    borderRadius: "10px",
}

const label: CSSProperties = {
  backgroundColor: "white",
  width: "80%"
}

export default function Contact() {
  return (
    <>
    {/* Business Information */}
    <div style={formCard}>
      <p style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
        <span>Regular Business Hours:</span>
        <span>Monday thru Thursday 11am to 7pm</span>
        <span>Fridays 11am to 6pm</span>
        <span>Saturdays 9am to 2pm</span>
        <span>Closed Sundays</span>
        <span>sales@fermentations.biz</span>
      </p>
      <p style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
        <span>5765 North Academy Blvd.</span>
        <span>Colorado Springs, CO 80918</span>
        <span>(719) 598-1164</span>
        <span>sales@fermentations.biz</span>
      </p>
    </div>
    {/* Contact Form */}
    <div style={formCard}>
      <h1>Contact Us!</h1>
      <TextField
        id="filled-hidden-label-small"
        label="First Name"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
        id="filled-hidden-label-small"
        label="Last Name"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
        id="filled-hidden-label-small"
        label="E-Mail Address"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
          id="standard-multiline-static"
          label="Comment"
          multiline
          rows={4}
          variant="filled"
          sx={label}
        />
        <Button sx={{ backgroundColor: "#602827" }} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
    </>
  )
}
