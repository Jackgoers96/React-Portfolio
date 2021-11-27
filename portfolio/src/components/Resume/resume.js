import React from "react";

import resume from "../../assets/resume-goers-jack.pdf";
import "./resume.css";

function Resume() {


  return (
    <div className="resume-wrapper">
      <div fluid className="resume-container">
        <div>
          <button className="resume-btn" href={resume} target="_blank">
            Download PDF

          </button>
        </div>
        <div className="resume">
          <h2 className="resume-name">Jack Goers</h2>
          <p className="resume-items">
            Lots of words go here.
          </p>
          {/* className="resume-skills" */}
          <h3 >TECHNICAL SKILLS</h3>
          <div classname="skills"></div>
          <div className="techCol">


            <li className="alternate">JavaScript ES6+</li>
            <li>CSS</li>
            <li className="alternate">HTML</li>
            <li>Node JS</li>
            <li className="alternate">JQuery</li>
            <li>Moment.js</li>
            <li className="alternate">Node.js</li>
            <li>Bootstrap</li>
          </div>
          <div className="techCol">
            <li className="alternate">Bulma</li>
            <li>Adobe Photoshop</li>
            <li className="alternate">Handlebars.js</li>
            <li>APIs</li>
            <li className="alternate">NPM</li>
            <li>Jest</li>
            <li className="alternate">RegEx</li>
            <li>Express</li>
          </div>
          <div className="techCol">
            <li className="alternate">Sequelize</li>
            <li>MySQL</li>
            <li className="alternate">MongoDB</li>
            <li>React</li>
            <li className="alternate">Insomnia</li>
            <li>MySQLWorkbench</li>
            <li className="alternate">Robo 3T</li>
            <li>Heroku</li>
            <li className="alternate">Socket.IO</li>
            <li>GitHub</li>
            <li className="alternate">Slack</li>
            <li>Zoom</li>
          </div>
        </div>

        <h3 className="resume-skills">SOFT SKILLS</h3>
        <li className="alternate">Patience</li>
        <li>Open-mindness</li>
        <li className="alternate">Adaptability</li>
        <li>Teamwork</li>
        <li className="alternate">Emotional Intelligence</li>
        <li>Creativity</li>
        <li className="alternate">Problem Solving</li>
      </div>
    </div>

  );
}

export default Resume;