import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "270px"}} />
      <div className="f-content">
        <span>elvisvasquez559@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"2rem"} /> */}
          <a href="https://www.linkedin.com/in/elvis-vasquez-v" target='_blank'>

          <Linkedin color="white" size={"2rem"} />
          </a>
          <a href="https://github.com/ELVISJVV" target='_blank'>

          <Github color="white" size={"2rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;