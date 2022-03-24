import React, { Component } from "react";
import "../../assets/scss/footer.scss";

function footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2 py-3">
            <h5>Easy Camper</h5>
            <div className="footerHeading pt-2">
              When Passion Meets Comfort.
            </div>
          </div>
          <div className="col-md-2 offset-md-2 py-3">
            <div className="subHeading">
              Discover Network
              <p className="pt-4">Where to shop</p>
              <p>Tour Guided</p>
              <p>Our Tours</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 py-3">
            <div className="subHeading">
              Become a Manager
              <p className="pt-4"> Join your Pairing</p>
              <p>Offer your Service</p>
              <p>Are you a guide?</p>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 py-3">
            <div className="subHeading">
              Discover Network
              <p className="pt-4">Support Center</p>
              <p>FAQs</p>
              <p>Cancallation Options</p>
              <p>Reliablity and Sequrity</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row mt-4">
          <div className="col-md-6 order-md-0 order-1">
            <p>EazyCamper. All rights reserved.</p>
          </div>
          <div className="col-md-6 order-md-1 order-0 text-right">
            <div className="button">
              <a href="#">About</a>
              <a href="#">Terms</a>
              <a href="#">Site Map</a>
              <a href="#">Teams</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default footer;
