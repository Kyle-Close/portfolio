import React from "react";
import { motion } from "framer-motion";
import data from "../data/carouselData";

import "../styles/Carousel/Carousel.css";

function AutoCarousel() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth); // Store the window width

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    console.log(typeof windowWidth);
  }, [windowWidth]);

  function getCarouselItems(screenSize: number) {
    const translateArr = createTranslateArray(screenSize <= 650 ? 85 : 110);
    const carouselItems = data.map((item, index) => {
      return (
        <motion.div
          animate={{ transform: translateArr }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: 0,
          }}
          className={`item ${index}`}
          key={index}
        >
          <div className="carousel-img-container">
            <img src={item.src} />
          </div>
          <p>{item.title}</p> {/* This line breaks the responsive design */}
        </motion.div>
      );
    });
    return carouselItems;
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {getCarouselItems(windowWidth)}
        {getCarouselItems(windowWidth)}
        {getCarouselItems(windowWidth)}
      </div>
    </div>
  );
}

function createTranslateArray(size: number) {
  let length = data.length;
  let result = [];

  for (let i = 0; i < length + 1; i++) {
    for (let j = 0; j < 2; j++) {
      result.push(`translate(-${size * i}px)`);
    }
  }

  return result;
}

export default AutoCarousel;
