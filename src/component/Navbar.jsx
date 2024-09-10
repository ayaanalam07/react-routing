import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/index.css'

const Navbar = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px"
    }}>
        <Link id='nav' to="">Home</Link>
        <Link id='nav' to="about">About</Link>
        <Link id='nav' to="contact">Contact</Link>
        <Link id='nav' to="service">Services</Link>
    </div>
  )
}

export default Navbar