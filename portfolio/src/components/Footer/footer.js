import React from "react";
import './footer.css';




function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div class="footer" >
      <div class="footercopywright">
        <h4>Jack Goers<br />
          Copyright © {year}</h4>
      </div>
      <div class="footericons">



        <li class="socialIcons">
          <a
            href="https://github.com/Jackgoers96"
            target="_blank" rel="noreferrer"
          >Github

          </a>
        </li>
        <div />

        <li class="socialicons">
          <a
            href="https://www.linkedin.com/in/jack-goers-117998162/"
            target="_blank" rel="noreferrer"
          >LinkedIn

          </a>

        </li>

        <li class="socialIcons">
          <a
            href="mailto:jackgoers@gmail.com"
            target="_blank" rel="noreferrer"
          >Email me 😀

          </a>
        </li>


      </div>
    </div>

  );
}

export default Footer;