import React from "react";
import { useHistory, Link } from "react-router-dom";
import "./header.css";


function Header(props) {
  return (
    <header>
      <navbar className="header" fixed="top" variant="dark">
        <h1 className="header-name">
          Jack Goers
        </h1>


        <nav >
          <Link to="/Bio" class="nav-link">Bio</Link>
          <Link to="/Portfolio" class="nav-link">Portfolio</Link>
          <Link to="/Contact" class="nav-link">Contact</Link>
          <Link to="/Resume" class="nav-link">Resume</Link>
        </nav>
        <div>
          <p>This is a paragraph full of hoopla</p>
        </div>

      </navbar>
    </header>
  );
}

export default Header;