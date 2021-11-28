import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./header.css";


function Header(props) {
  return (
    <div class="header">
      <Link class="headername" to="Bio">
        <h1 class="headername">
          Jack Goers
        </h1></Link>
      <div class="nav">

        <Link to="/Portfolio" class="nav-link">Portfolio</Link>
        <Link to="/Contact" class="nav-link">Contact</Link>
        <Link to="/Resume" class="nav-link">Resume</Link>
      </div>



    </div>
  );
}

export default Header;