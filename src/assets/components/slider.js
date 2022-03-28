import React, { Component } from "react";
import "../style/hero.scss";
import sliderImage from "../images/heroImg.png";
import headerImage from "../images/cube-1.png";
import headerImage2 from "../images/headerImage.png";

function slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={sliderImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={sliderImage} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderImage} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default slider;
