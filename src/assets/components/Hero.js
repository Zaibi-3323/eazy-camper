import React, { Component } from "react";
import "../style/hero.scss";
import headerImage from "../images/cube-1.png";
import headerImage2 from "../images/headerImage.png";
import explore from "../images/explore.png";
import Carousel from "react-bootstrap/Carousel";
import sliderImage from "../images/heroImg.png";
function Hero() {
  return (
    <div>
      <div className="container positionRelative">
        <div className="headerImage">
          <img className="img-fluid" src={headerImage} />
          <img className="headerImage2 img-fluid" src={headerImage2} />
        </div>
      </div>
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
      <div className="heroSection">
        <div class="bg_image">
          <div className="container">
            <div className="heroContent">
              <h2>
                Find out how we can <span>save your time </span>in Backpacking
                in Europe
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet
                id eget scelerisque amet etiam in sit commodo. Pretium ut duis
                orci pulvinar pretium id consectetur.{" "}
              </p>
              <button className="heroButton">
                <img className="me-2" src={explore} /> Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
