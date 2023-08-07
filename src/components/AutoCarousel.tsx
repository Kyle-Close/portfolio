import React from "react";
import { motion } from "framer-motion";
import { data } from "../data";

import "../styles/Carousel/Carousel.css";
import { reverse } from "dns";

function AutoCarousel() {
  const translateArr = createTranslateArray(85);
  console.log(translateArr);

  const carouselItems = data.src.map((src, index) => {
    return (
      <motion.div
        animate={{ transform: translateArr }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          delay: 0,
        }}
        className={`item ${index}`}
        key={index}
      >
        <img src={src} />
      </motion.div>
    );
  });

  return (
    <div className="carousel-container">
      <div className="carousel">
        {carouselItems}
        {carouselItems}
      </div>
    </div>
  );
}

function createTranslateArray(size: number) {
  let length = data.src.length;
  let result = [];

  for (let i = 0; i < length + 1; i++) {
    // Loop through each item in carousel
    for (let j = 0; j < 2; j++) {
      result.push(`translate(-${size * i}px)`);
    }
  }

  return result;
}

export default AutoCarousel;
