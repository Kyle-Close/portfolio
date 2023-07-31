import React from "react";
import "../styles/Title-Section/TitleSection.css";
import WebImg from "../img/web.svg";

function TitleSection() {
  return (
    <div className="title-section-container">
      <h5 className="intro">Hi, my name is</h5>
      <h1 className="name">
        K<span>YLE </span>C<span>LOSE</span>
      </h1>
      <div className="web-dev-section">
        <div className="web-img-container">
          <img src={WebImg} alt="" />
        </div>
        <h1 className="web-developer">
          W<span>EB</span> D<span>EVELOPER</span>
        </h1>
      </div>
      <div className="separator"></div>
    </div>
  );
}

export default TitleSection;
