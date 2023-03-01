import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header style={{display:"flex",justifyContent:"space-around"}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/photo">Photo</Link>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
    </header>
    </>
  )
}
