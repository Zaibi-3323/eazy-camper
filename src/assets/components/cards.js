import React, { Component } from "react";
import "../style/cards.scss";
import image1 from "../images/image-1.png";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";

function Hero() {
  return (
    <div className="Promoting">
      <div className="container">
        <div className="SoftwareCompnie">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-4 col-md-6">
              <div className="cards">
                <div className="justify-content-center row">
                  <div className="software-compnie-card">
                    <img className="img-fluid" src={image1} alt="" />
                    <h5>
                      Promoting your territory <br /> towards foreign tourists
                    </h5>
                    <p>
                      EasyCamper wants to promote the excellence of Italian food
                      and wine, art, culture and the economy.
                    </p>
                    <h3>
                      Discover the places linked to your area that you can link
                      to your structure
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="justify-content-center row">
                <div className="software-compnie-card">
                  <img className="img-fluid" src={image2} alt="" />
                  <h5>Promoting your territory towards foreign tourists</h5>
                  <p>
                    EasyCamper wants to promote the excellence of Italian food
                    and wine, art, culture and the economy.
                  </p>
                  <h3>
                    Discover the places linked to your area that you can link to
                    your structure
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="justify-content-center row">
                <div className="software-compnie-card">
                  <img className="img-fluid" src={image3} alt="" />
                  <h5>Promoting your territory towards foreign tourists</h5>
                  <p>
                    EasyCamper wants to promote the excellence of Italian food
                    and wine, art, culture and the economy.
                  </p>
                  <h3>
                    Discover the places linked to your area that you can link to
                    your structure
                  </h3>
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
