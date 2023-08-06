import React, { Component } from "react";
import img from "../img/javascript.png";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [autoPlay, setAutoPlay] = React.useState(true);

  const buttonStyle = { fontSize: 20, padding: "5px 20px", margin: "5px 0px" };
  const containerStyle = { margin: "5px 0 20px" };

  function next() {
    setCurrentSlide((prevCurrentSlide) => {
      return prevCurrentSlide + 1;
    });
  }

  function prev() {
    setCurrentSlide((prevCurrentSlide) => {
      return prevCurrentSlide - 1;
    });
  }

  function changeAutoPlay() {
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  }

  function updateCurrentSlide(index: number) {
    setCurrentSlide(index);
  }

  return (
    <div>
      <div style={containerStyle}>
        <p style={containerStyle}>
          Use the buttons below to change the selected item in the carousel
          <br />
          <small>
            <i>
              Note that the external controls might not respect the carousel
              boundaries but the carousel won't go past it.
            </i>
          </small>
        </p>
        <p>External slide value: {currentSlide}</p>
        <button onClick={prev} style={buttonStyle}>
          Prev
        </button>
        <button onClick={next} style={buttonStyle}>
          Next
        </button>
        <button onClick={changeAutoPlay} style={buttonStyle}>
          Toggle Autoplay ({autoPlay ? "true" : "false"})
        </button>
      </div>
      <Carousel
        autoPlay={autoPlay}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        infiniteLoop={true}
        interval={1500}
      >
        <div>
          <img src={img} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default AutoCarousel;
