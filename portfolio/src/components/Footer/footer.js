import React from "react";
import './footer.css';




function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div class="footer" >
      <div>
        <div class="footercopywright">
          <h4>Jack Goers<br />
            Copyright © {year}</h4>
        </div>
        <div class="footer-body">
          <ul class="footericons">
            <li class="socialIcons">
              <a
                href="https://github.com/Jackgoers96"
                target="_blank"
              >Github

              </a>
            </li>

            <li class="socialicons">
              <a
                href="https://www.linkedin.com/in/jack-goers-117998162/"
                target="_blank"
              >LinkedIn

              </a>
            </li>

            <li class="socialIcons">
              <a
                href="mailto:jackgoers@gmail.com"
                target="_blank"
              >jackgoers@gmail.com

              </a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}

export default Footer;