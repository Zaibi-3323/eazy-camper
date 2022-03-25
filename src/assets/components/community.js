import React, { Component } from "react";
import "../style/community.scss";
import image8 from "../images/image-8.png";
import image9 from "../images/image-9.png";
import image10 from "../images/image-10.png";
import start from "../images/start.png";

function community() {
  return (
    <div className="Community">
      <div className="container">
        <div className=" row">
          <div className="col-lg-2">
            <div className="communityContent">
              <h2>Join community campervan sites managers.</h2>
              <p>
                Discover all the equibbed areas in Italy. Find the shop with all
                the services for you and your camper.
              </p>

              <button className="heroButton">
                <img className="me-2" src={start} /> Start
              </button>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-4">
            <div className="communityImage">
              <img src={image8} />
              <div className="imagesHeading">Lucciano</div>
              <p>Rome</p>
              <p className="siteColor">View the Site</p>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-4 ">
            <div className="communityImage">
              <img src={image9} />
              <div className="imagesHeading">Lucciano</div>
              <p>Rome</p>
              <p className="siteColor">View the Site</p>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-4 ">
            <div className="communityImage">
              <img src={image10} />
              <div className="imagesHeading">Lucciano</div>
              <p>Rome</p>
              <p className="siteColor">View the Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default community;
