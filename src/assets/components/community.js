import React, { Component } from "react";
import "../style/community.scss";
import image8 from "../images/image-8.png";
import image9 from "../images/image-9.png";
import image10 from "../images/image-10.png";
import start from "../images/start.png";
import Slider from "react-slick";

function community() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };
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
          <div className="col-lg-9  offset-lg-1">
            <Slider {...settings}>
              <div className="communityImage ">
                <img src={image8} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>

              <div className="communityImage">
                <img src={image9} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>

              <div className="communityImage">
                <img src={image10} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>
              <div className="communityImage">
                <img src={image8} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>
              <div className="communityImage">
                <img src={image9} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>
              <div className="communityImage">
                <img src={image10} />
                <div className="imagesHeading">Lucciano</div>
                <p>Rome</p>
                <p className="siteColor">View the Site</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default community;
