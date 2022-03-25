import React, { Component } from "react";
import "../style/hero.scss";
import headerImage from "../images/cube-1.png";
import headerImage2 from "../images/headerImage.png";
import explore from "../images/explore.png";

function Hero() {
  return (
    <div className="heroSection">
      <div class="bg_image">
        <div className="container">
          <div className="row">
            <div className="headerImage">
              <img src={headerImage} />
              <img className="headerImage2" src={headerImage2} />
            </div>
          </div>
          <div className=" row">
            <div className="col-lg-4">
              <div className="bgColor">
                <div className="heroContent">
                  <h2>
                    Find out how we can <span>save your time </span>in
                    Backpacking in Europe
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                    amet id eget scelerisque amet etiam in sit commodo. Pretium
                    ut duis orci pulvinar pretium id consectetur.{" "}
                  </p>
                  <button className="heroButton">
                    <img className="me-2" src={explore} /> Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
