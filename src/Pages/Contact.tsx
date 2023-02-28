import { CSSProperties, useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

//Form Card Styling
const formCard: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "auto",
    minHeight: "80vh",
    marginTop: "15px",
    marginBottom: "15px",
    // backgroundColor: "#606D32",
    backgroundColor: "#a8ad9c",
    borderRadius: "10px",
    padding: "10px"
}

// Input Fields Styling
const label: CSSProperties = {
  backgroundColor: "white",
  width: "80%"
}

// Business Info Styling
const info: CSSProperties = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "space-evenly"
} 

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
     {/* Contact Form */}
    <div style={formCard}>
      <h1>Contact Us!</h1>
      <TextField
        id="firstName"
        label="First Name"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
        id="lastName"
        label="Last Name"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
        id="emailAddress"
        label="Email Address"
        variant="filled"
        size="small"
        sx={label}
      />
      <TextField
          id="commentSection"
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
    {/* Business Information */}
    <div style={formCard}>
      <p style={info}>
        <span><b>Regular Business Hours</b></span>
        <span>Monday - Thursday: 11am to 7pm</span>
        <span>Fridays: 11am to 6pm</span>
        <span>Saturdays: 9am to 2pm</span>
        <span>Closed On Sundays</span>
      </p>
      <p style={info}>
        <span>5765 North Academy Blvd.</span>
        <span>Colorado Springs, CO 80918</span>
        <span>(719) 598-1164</span>
        <span>sales@fermentations.biz</span>
      </p>
      <p><b>Come See Us</b></p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.428126182952!2d-104.78811748483716!3d38.914190979568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134ef4c367b6b3%3A0xcd184256fb212d0!2sFermentations%20Home%20Winemaking%20and%20Homebrew%20Center!5e0!3m2!1sen!2sjp!4v1677554341746!5m2!1sen!2sjp" className="map" loading="lazy">
      </iframe>
    </div>
    </>
  )
}
