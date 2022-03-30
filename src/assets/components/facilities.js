import React, { Component } from "react";
import "../style/cards.scss";
import "../style/facilities.scss";
import image4 from "../images/image-4.png";
import image5 from "../images/image-7.png";
import image6 from "../images/image-5.png";
import image7 from "../images/image-6.png";

function facilities() {
  return (
    <div className="Promoting">
      <div className="container">
        <div className="facilitiesHeading">
          Making your facility known is our priority
        </div>
        <div className="SoftwareCompnie">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-3 col-md-6">
              <div className="cards">
                <div className="justify-content-center row">
                  <div className="failitiesCard">
                    <img className="img-fluid whiteImage" src={image4} alt="" />
                    <h5>Choose the type of stop</h5>
                    <p>
                      Select the type of stopover you are ordering from Equipped
                      Area, Camping and Agricamping
                    </p>
                    <h3>Show me more</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="justify-content-center row">
                <div className="failitiesCard">
                  <img className="img-fluid whiteImage" src={image5} alt="" />
                  <h5>Describe your structure</h5>
                  <p>
                    Add photos, videos and descriptions Define the price of each
                    type of that make your propety truly
                  </p>
                  <h3>Show me more</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="justify-content-center row">
                <div className="failitiesCard">
                  <img className="img-fluid whiteImage" src={image6} alt="" />
                  <h5>Build your showcase</h5>
                  <p>
                    Add photos, videos and descriptions Define the price of each
                    type of that make your propety truly
                  </p>
                  <h3>Show me more</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="justify-content-center row">
                <div className="failitiesCard">
                  <img className="img-fluid whiteImage" src={image7} alt="" />
                  <h5>Prices and Availability</h5>
                  <p>
                    Add photos, videos and descriptions Define the price of each
                    type of that make your propety truly
                  </p>
                  <h3>Show me more</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default facilities;
