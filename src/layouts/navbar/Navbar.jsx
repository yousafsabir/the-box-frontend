import React from 'react'
import website_logo from "../../assets/images/logo_website.png";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="NavContainer">
      <div className="Left">
        <img src={website_logo} alt="Website logo" />
        <h1 className="Heading">
          <span>The</span>Box
        </h1>
      </div>
      <nav className="Right">
        <a href="/">
          Home
        </a>
        <a href="/">
          About Us
        </a>
        <a href="/">
          Projects
        </a>
        <a href="/">
          Services
        </a>
        <a
          href="/"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}
