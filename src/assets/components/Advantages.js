import React, { Component } from "react";
import "../style/advantages.scss";
import image11 from "../images/image-11.png";
import image12 from "../images/image-12.png";
import image13 from "../images/image-13.png";

function Advantages() {
  return (
    <div className="Promoting">
      <div className="container">
        <div className="advantagesHeading">Our Advantages</div>
        <div className="Advantages">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-4 col-md-6">
              <div className="cards">
                <div className="justify-content-center row">
                  <div className="advantagesCard">
                    <img
                      className="img-fluid whiteImage"
                      src={image11}
                      alt=""
                    />
                    <h5>Digital marketing and editorial support</h5>
                    <p>
                      You don’t have to find out later or only after camenierk
                      and trarsparent Easyamper ratains pliacas and beautias of
                      your tariaary and halpin a fixed commission on each
                      transaction of 5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="justify-content-center row">
                <div className="advantagesCard">
                  <img className="img-fluid whiteImage" src={image12} alt="" />
                  <h5>Digital marketing and editorial support</h5>
                  <p>
                    You don’t have to find out later or only after camenierk and
                    trarsparent Easyamper ratains pliacas and beautias of your
                    tariaary and halpin a fixed commission on each transaction
                    of 5
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="justify-content-center row">
                <div className="advantagesCard">
                  <img className="img-fluid whiteImage" src={image13} alt="" />
                  <h5>Digital marketing and editorial support</h5>
                  <p>
                    You don’t have to find out later or only after camenierk and
                    trarsparent Easyamper ratains pliacas and beautias of your
                    tariaary and halpin a fixed commission on each transaction
                    of 5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
