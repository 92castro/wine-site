import React, { CSSProperties } from "react";
import Divider from "@mui/material/Divider"
import { GiCellarBarrels } from 'react-icons/gi';

const heroImg: CSSProperties = {
  display:"flex",
  flexDirection: "column",  
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1491924778227-f225b115dd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
  height: "40vh",
  minHeight:"15em",
  alignSelf: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center"
}

const heroText: CSSProperties = {
  textAlign: "center",
  color: "white",
  fontSize:"40px"
}

export default function Home() {
  return (
    <>
    <div style={heroImg}>
      <div style={heroText}>
        <p>Enjoy your winemaking hobby responsibly!</p>
      </div>
    </div>
    <div >
    <Divider style={{height:"50px"}}><GiCellarBarrels style={{height:"100px",fontSize:"60px"}}/></Divider>
    </div>
    </>
  )
}
