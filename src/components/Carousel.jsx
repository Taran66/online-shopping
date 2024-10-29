import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

const images = [
  "/assets/model-man.jpg",
  "/assets/woman-model.jpg",
  "/assets/kids2.jpg"
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img src={image} alt={`Slide ${index + 1}`} className="h-[700px]" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
