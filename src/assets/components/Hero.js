import React, { Component } from "react";
import "../style/hero.scss";
import headerImage from "../images/cube-1.png";
import headerImage2 from "../images/headerImage.png";
import explore from "../images/explore.png";
import Carousel from "react-bootstrap/Carousel";
import sliderImage from "../images/heroImg.png";
import sliderImage2 from "../images/images.jpeg";
import sliderImage3 from "../images/images2.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import Toggle from "./Toggle";
import useDarkMode from "use-dark-mode";

function Hero() {
  const darkMode = useDarkMode(false);
  return (
    <div>
      <div className="container positionRelative">
        <div className="headerImage">
          <div>
            <img className="img-fluid" src={headerImage} />
          </div>
          <div className="darkButton">
            <div className="dark-mode-toggle">
              <button type="button" onClick={darkMode.disable}>
                ☀
              </button>
              <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
              <button type="button" onClick={darkMode.enable}>
                ☾
              </button>
            </div>

            <img className="headerImage2 img-fluid" src={headerImage2} />
          </div>
        </div>
      </div>
      <Swiper
        // install Swiper modules

        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="d-block sliderimage w-100"
            src={sliderImage}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block sliderimage w-100"
            src={sliderImage3}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block sliderimage w-100"
            src={sliderImage2}
            alt="First slide"
          />
        </SwiperSlide>
      </Swiper>
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
