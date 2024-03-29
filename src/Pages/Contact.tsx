import { CSSProperties, useRef } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Image from "../Assets/resizedImages/sunset_4500x1800.jpg"

const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
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
  fontSize: "50px",
  fontFamily: "Fermentations" 
};

//Form Card Styling
const formCard: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    minWidth: "auto",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "white",
    padding: "10px",
    margin: "0",
}

// Input Fields Styling
const label: CSSProperties = {
  width: "80%",
  margin: "10px",
}

// Business Info Styling
const info: CSSProperties = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "space-evenly",
  fontFamily: "Roboto, sans-serif"
} 

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

export default function Contact() {
  const form: any = useRef();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const sendEmail = (e: any) => {
    emailjs.sendForm('service_997ryp9', 'template_70gydw3', form.current, 'HMsyguFO56ZXH58Ld')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const onSubmit = handleSubmit(data => {sendEmail(data)});
      
  return (
    <>
      {/* Hero Image */}
      <div style={heroImg}>
        <div style={heroText}>
          <p>Let's Talk Wine and Beer!</p>
        </div>
      </div>
      {/* Form and Business Info */}
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        {/* Contact Form */}
        <Grid item sm={12} md={6}>
          <form ref={form} onSubmit={onSubmit} style={{ height: "100%"}}>
            <div style={formCard} key={"green"}>
              <h1 style={{ fontFamily: "Fermentations",color: "#74250e" ,fontSize:"40px" }}>Drop Us A Line With Inquiries, Or Questions About Wine And Beer Making!</h1>
              <TextField
                {...register("firstName", { required: "First name is required *" })}
                id="firstName"
                name="firstName"
                label="First Name*"
                variant="standard"
                size="small"
                sx={label}
              />
              <Typography component="small">
                {errors.firstName?.message}
              </Typography>
              <TextField
                {...register("lastName", { required: "Last name is required *" })}
                id="lastName"
                name="lastName"
                label="Last Name*"
                variant="standard"
                size="small"
                sx={label}
              />
              <Typography component="small">
                {errors.lastName?.message}
              </Typography>
              <TextField
                {...register(
                "email",
                {required: "Email is required", minLength: { value: 4, message: "Minimum length is 4 characters" }, 
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, message: "invalid email address" }}
                )}
                id="emailAddress"
                name="email"
                label="Email Address*"
                variant="standard"
                size="small"
                sx={label}
              />
              <Typography component="small">
                {errors.email?.message}
              </Typography>
              <TextField
                {...register("comment", {
                required: "Comment is required",
                minLength: { value: 50, message: "Minimum length is 50 characters" },
                maxLength: { value: 275, message: "Maximum length is 275 characters" },
                })}
                name="comment"
                label="Comment*"
                multiline
                rows={4}
                variant="standard"
                sx={label}
              />
              <Typography component="small">
                {errors.comment?.message}
              </Typography>
              <Button type="submit" sx={{ fontFamily: "Fermentations", backgroundColor: "#4a0d0b", width: "30%", marginTop: "50px", marginBottom: "50px", fontSize:"18px" }} variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
        {/* Business Information */}
        <Grid item xs={12} md={6}>
          <div style={formCard}>
            <div>
              <Button startIcon={<FacebookIcon className="socialIcon"/>} href="https://www.facebook.com/Fermentations" target="_blank"/>
              <Button startIcon={<TwitterIcon className="socialIcon"/>} href="https://twitter.com/fermentationsco" target="_blank"/>
            </div>
            <p style={info}>
              <span style={{ color: "#74250e", fontSize: "180%", fontFamily: "Fermentations" }}><b>Regular Business Hours</b></span>
              <span>Monday - Thursday: 11am to 7pm</span>
              <span>Fridays: 11am to 6pm</span>
              <span>Saturdays: 9am to 2pm</span>
              <span>Closed On Sundays</span>
            </p>
            <p style={info}>
              <span>5765 North Academy Blvd.</span>
              <span>Colorado Springs, CO 80918</span>
              <span><b style={{ color: "#74250e"}}>Phone: </b><a href="tel:+17195981164" style={{color:"black"}}>(719) 598-1164</a></span>
              <span><b style={{ color: "#74250e"}}>Email: </b> <a href="mailto:sales@fermentations.biz" style={{color:"black"}}>sales@fermentations.biz</a></span>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.428126182952!2d-104.78811748483716!3d38.914190979568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134ef4c367b6b3%3A0xcd184256fb212d0!2sFermentations%20Home%20Winemaking%20and%20Homebrew%20Center!5e0!3m2!1sen!2sjp!4v1677554341746!5m2!1sen!2sjp" title="map" className="map" loading="lazy">
            </iframe>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
