import { CSSProperties, useRef } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';


//Form Card Styling
const formCardLarge: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    minWidth: "auto",
    minHeight: "100vh",
    marginTop: "15px",
    marginBottom: "15px",
    textAlign: "center",
    backgroundColor: "#a8ad9c",
    borderRadius: "10px",
    padding: "10px"
}

const container1: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
}

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
    textAlign: "center",
    backgroundColor: "#a8ad9c",
    borderRadius: "10px",
    padding: "10px"
}

// Input Fields Styling
const label: CSSProperties = {
  backgroundColor: "white",
  width: "80%",
  margin: "10px",
}

// Business Info Styling
const info: CSSProperties = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "space-evenly",
} 

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

export default function Contact() {
  const width = window.innerWidth;
  
  const form: any = useRef();
  
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

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
      
  if (width < 768) {
    return (
      <>
        {/* Contact Form */}
        <form ref={form} onSubmit={onSubmit}>
        <div style={formCard} key={"green"}>
          <h1 className="contactText">Contact Us For Inquiries, Or Questions About Wine And Beer Making!</h1>
          <TextField
            {...register("firstName", { required: "First name is required *" })}
            id="firstName"
            name="firstName"
            label="First Name"
            variant="filled"
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
            label="Last Name"
            variant="filled"
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
            label="Email Address"
            variant="filled"
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
            label="Comment"
            multiline
            rows={4}
            variant="filled"
            sx={label}
          />
          <Typography component="small">
            {errors.comment?.message}
          </Typography>
          <Button type="submit" sx={{ backgroundColor: "#602827" }} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        </form>
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
  } else {
      return (
        // Large Screen Component
        <div style={formCardLarge}>
        <form style={container1} ref={form} onSubmit={sendEmail}>
          <h1 style={{ color: "#602827"}} className="contactText">Contact Us For Inquiries, Or Questions About Wine And Beer Making!</h1>
          <TextField
            id="firstName"
            name="first_name"
            label="First Name"
            variant="filled"
            size="small"
            sx={label}
          />
          <TextField
            id="lastName"
            name="last_name"
            label="Last Name"
            variant="filled"
            size="small"
            sx={label}
          />
          <TextField
            id="emailAddress"
            name="email"
            label="Email Address"
            variant="filled"
            size="small"
            sx={label}
          />
          <TextField
            id="commentSection"
            name="comment"
            label="Comment"
            multiline
            rows={4}
            variant="filled"
            sx={label}
          />
          <Button className="button" type="submit" sx={{ backgroundColor: "#602827" }} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
        <div>
          <p className="info" style={info}>
            <span><b>Regular Business Hours</b></span>
            <span>Monday - Thursday: 11am to 7pm</span>
            <span>Fridays: 11am to 6pm</span>
            <span>Saturdays: 9am to 2pm</span>
            <span>Closed On Sundays</span>
          </p>
          <p className="info" style={info}>
            <span>5765 North Academy Blvd.</span>
            <span>Colorado Springs, CO 80918</span>
            <span><b>Phone:</b> (719) 598-1164</span>
            <span><b>Email:</b> sales@fermentations.biz</span>
          </p>
          <p className="info"><b>Come See Us</b></p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.428126182952!2d-104.78811748483716!3d38.914190979568055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134ef4c367b6b3%3A0xcd184256fb212d0!2sFermentations%20Home%20Winemaking%20and%20Homebrew%20Center!5e0!3m2!1sen!2sjp!4v1677554341746!5m2!1sen!2sjp" className="map" loading="lazy">
          </iframe>
        </div>
        </div>
    )
  }
}
