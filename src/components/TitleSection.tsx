import React from "react";
import Typography from "@mui/material/Typography";
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
        <Typography
          sx={{
            "::first-letter": {
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.5rem",
              },
              fontWeight: "bolder",
            },
            display: "inline-block", // Explicitly setting display to inline-block
            alignItems: "center",
            fontWeight: "500",
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "1.8rem",
            },
          }}
          variant="h4"
          component="span"
        >
          WEB DEVELOPER
        </Typography>
      </div>
    </div>
  );
}

export default TitleSection;
