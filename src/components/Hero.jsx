import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { bg1, bg2, bg3 } from "../images/index.js";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container ">
      <Slider {...settings} className="">
        <div className="slide1">
          <img src={bg1} alt="Slide 1" className="w-full h-screen" />
          <div className="card-body">
            <h2>text 1</h2>
          </div>
        </div>

        <div className="slide2">
          <img
            src={bg2}
            alt="Slide 2"
            className="w-full h-screen bg-center bg-cover bg-no-repeat"
          />
        </div>

        <div className="slide3">
          <img
            src={bg3}
            alt="Slide 3"
            className="w-full h-screen bg-center bg-cover bg-no-repeat"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
