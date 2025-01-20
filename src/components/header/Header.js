import React from "react";
import "./header.css";
import logo from "../../assets/logo.webp"
import profile from "../../assets/profile.png"

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo"  className="logo" />
      <div style={{backgroundImage:`url(${profile})`}} className="profile"></div>
    </div>
  );
}

export default Header;
