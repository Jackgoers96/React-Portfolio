import React from "react";



function footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div fluid className="footer">
      <div>
        <div md="4" className="footer-copywright">
          <div>Jack Goers</div>
        </div>
        <div md="4" className="footer-copywright">
          <div>Copyright © {year}</div>
        </div>
        <div md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href=""
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >

              </a>
            </li>

            <li className="social-icons">
              <a
                href=""
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >

              </a>
            </li>

            <li className="social-icons">
              <a
                href=""
                style={{ color: "#f0d6d2" }}
                target="_blank"
              >

              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default footer;