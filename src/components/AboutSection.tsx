import React from "react";
import "../styles/About/AboutSection.css";

import Carousel from "./Carousel";

function AboutSection() {
  return (
    <div className="about-container">
      <h3 className="about-header">About</h3>
      <p>
        As you may have already gathered, my name is Kyle. I’m a computer
        engineering graduate currently working as a software developer in
        Canada. Although my professional work involves a broader range of
        software development, I've always been particularly interested in web
        development.
      </p>
      <p>
        After graduating I was looking for a way to learn much more about the
        web. That’s when I came across The Odin Project. Which is an open-source
        course that really resonated with my desire for a comprehensive,
        project-based learning experience.
      </p>
      <p>
        The Odin Project has guided me in my self-learning journey. In the next
        section you can find projects that I’ve built throughout the course, as
        well as personal passion projects.
      </p>
      <h4 className="technologies-title">Technologies:</h4>
      <Carousel />
    </div>
  );
}

export default AboutSection;
