import React from "react";

import resume from "../../assets/resume-goers-jack.pdf";
import "./resume.css";

function Resume() {


  return (
    <div className="resume-wrapper">
      <div className="container">
        <div>
          <button className="resume-btn" href={resume} target="_blank">
            Download PDF

          </button>
        </div>
        <div className="resume">
          <h2>Jack Goers</h2>
          <br/>
          
        </div>
          <div className="skills">
          <h3 >Technical Skills</h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          <div className="techCol">


            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript ES6+</li>
            <li>Node JS</li>
            <li>JQuery</li>
            <li>Moment.js</li>
            <li>Bootstrap</li>
            <li>Pure css</li>
            <li>GitHub</li>
            
          </div>
          <div className="techCol">
            
            <li>Chrome Extensions</li>
            <li>Adobe Photoshop/Illustrator</li>
            <li>Handlebars js</li>
            <li>API Integration</li>
            <li>Jest</li>
            <li>RegEx</li>
            <li>Express</li>
            <li>Slack</li>
            <li>Heroku</li>
            
          </div>
          <div className="techCol">
            
            <li>Sequelize</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Insomnia</li>
            <li>MySQLWorkbench</li>
            <li>Robo 3T</li>
            <li>Socket IO</li>
            
            
            
          </div>
        </div>

        <h3 className="resume-skills">Soft Skills</h3>
        
        <li>Patience</li>
        <li>Open-minded</li>
        <li>Adaptability</li>
        <li>Teamwork</li>
        <li>Leadership</li>
        <li>Fast Learner</li>
        <li>Problem Solving</li>
        <li>Listener</li>
        <li>Dedicated</li>
        <li>Forward Thinking</li>
        
        </div>
      </div>
    

  );
}

export default Resume;