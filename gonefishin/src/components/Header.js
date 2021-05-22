import React from "react";
import "../styles/Header.css";
import '../styles/main.css';

function Header() {
    return (
      <header className="header flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-blue-300 bg-opacity-75 py-6 px-6 relative">
        <img src="../assets/gone.png" alt="logo" />
        <h1 className="text-xl text-yellow-800 font-bold pl-20" >Welcome to Gone Fishin'!</h1>
        <button className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <nav className="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gray-100 md:bg-transparent p-6 md:p-0">
          <a href="#/Home" className="text-green-800 hover:underline">Home</a>
          <a href="#/Map" className="text-green-800 hover:underline">Forum</a>
          <a href="#/Login" className="text-green-800 hover:underline">Login/Signup</a>
        </nav>
      </header>
    );
  }
  
  export default Header;