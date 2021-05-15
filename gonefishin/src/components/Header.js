import React from "react";
import "../styles/Header.css";

function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <img src="../assests/gone.png" alt="logo" />
        <h1 style={styles.headingStyle}>Welcome</h1>
      </header>
    );
  }
  
  export default Header;