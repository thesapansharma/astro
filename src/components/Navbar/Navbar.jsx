import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Astro75</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a href="/"><button className="button n-button">Home</button></a>
            </li>
            <li>
             <a href="/#contact"><button className="button n-button">Contact Us</button></a> 
            </li>
            <li>
              <a href="/#about"><button className="button n-button">About Us</button></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
