import React from "react";
import "./bio.css";
import profile from "../../assets/images/profile.png";

const bio = () => {
  return (
    <div className="bio">
      <div className="bio-left">
        <div className="bio-left-wrapper">
          <h2 className="bio-hello">Hello, my name is</h2>
          <h1 className="bio-name">Alena</h1>
          <div className="bio-title">
            <div className="bio-title-wrapper">
              <div className="bio-title-item">Developer</div>
              <div className="bio-title-item">Photographer</div>
              <div className="bio-title-item">Lifelong Learner</div>
              <div className="bio-title-item">Dreamer</div>
            </div>
          </div>
          <h5 className="bio-text">
         words go here
         
          </h5>
        </div>
      </div>
      <div className="bio-right">
        <div className="bio-bg"></div>
        <img src={profile} alt="profile" className="bio-img" />
      </div>
    </div>
  );
};

export default bio;