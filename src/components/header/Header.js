import React from "react";
import "./header.css";
import logo from "../../assets/logo.webp"

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <h1></h1>
    </div>
  );
}

export default Header;
