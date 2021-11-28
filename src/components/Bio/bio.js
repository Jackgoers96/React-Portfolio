import React from "react";
import img81663225 from "../../assets/81663225.jpg";
import './bio.css'



const Bio = () => {
  return (
    <div class="bio">
      <div className="imgContainer">
      <img src={img81663225} alt="Profile Goers, Jack"></img>
      </div>
      
      
        <h2>Hello!</h2>
        <br/>
        <p>My name is Jack, a full stack coder with a focus on MERN technologies. This site was made by me to show off my skills with React and display a few of the projects I've been a part of in the UofM coding bootcamp, by Triliogy Education. I am currently set to graduate on the 8th of December with a certificate.
      </p>
      <br/>
      <p>When I am not coding, you can find me hiking with my wife, following the latest scores in the NHL or playing video games with my friends. Check out my work and feel free to reach out. Leave a comment or anything else! </p>
    </div>

  );
};

export default Bio;