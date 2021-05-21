import React from "react";
import "../styles/Header.css";

function Header() {
    return (
      <header style={styles.headerStyle} className="header" class="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-white py-6 px-6 relative">
        <img src="../assests/gone.png" alt="logo" />
        <h1 style={styles.headingStyle}>Welcome</h1>
        <button class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <nav class="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 md:bg-transparent p-6 md:p-0">
          <a href="#" class="text-blue-600 hover:underline">Home</a>
          <a href="#" class="text-gray-600 hover:underline">Forum</a>
          <a href="#" class="text-gray-600 hover:underline">Login/Signup</a>
        </nav>
      </header>
    );
  }
  
  export default Header;