import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    transition:
      "transform: `translate(-${75 * currentSlide + 10 * currentSlide}px)`",
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <TransitionGroup>
          <CSSTransition key={currentSlide} timeout={500} classNames="item">
            <div className="test">
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

              {/* ------------------------------------------------------------ */}

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
          </CSSTransition>
        </TransitionGroup>
      </div>
      <button>Next</button>
    </div>
  );
}

export default AutoCarousel;
