import React from "react";
import "../styles/Carousel/Carousel.css";

import jsCarouselImg from "../img/js-carousel.svg";
import tsCarouselImg from "../img/ts-carousel.svg";
import reactCarouselImg from "../img/react-carousel.svg";
import htmlCarouselImg from "../img/html-carousel.svg";
import tailwindCarouselImg from "../img/tailwind-carousel.svg";
import nodeCarouselImg from "../img/node-carousel.svg";
import gitCarouselImg from "../img/git-carousel.svg";
import mySQLCarouselImg from "../img/mySQL-carousel.svg";

function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [autoPlay, setAutoPlay] = React.useState(true);

  function nextSlide() {}

  let itemStyle = {
    transform: `translate(-${50 * currentSlide + 5 * currentSlide}px)`,
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div style={itemStyle} className="item 1">
          <img src={jsCarouselImg} />
        </div>
        <div style={itemStyle} className="item 2">
          <img src={tsCarouselImg} />
        </div>
        <div style={itemStyle} className="item 3">
          <img src={reactCarouselImg} />
        </div>
        <div style={itemStyle} className="item 4">
          <img src={htmlCarouselImg} />
        </div>
        <div style={itemStyle} className="item 5">
          <img src={tailwindCarouselImg} />
        </div>
        <div style={itemStyle} className="item 6">
          <img src={nodeCarouselImg} />
        </div>
        <div style={itemStyle} className="item 7">
          <img src={gitCarouselImg} />
        </div>
        <div style={itemStyle} className="item 8">
          <img src={mySQLCarouselImg} />
        </div>
      </div>
      <button>Next</button>
    </div>
  );
}

export default AutoCarousel;
