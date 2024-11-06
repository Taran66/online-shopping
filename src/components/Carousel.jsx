import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

const images = [
  {src:"/assets/model-man.jpg", classname: "bg-slate-200" ,offer: "Buy 2 Get 1 Free", category: "Men's Winter Collection"},
  {src:"/assets/woman-model.jpg", classname: "bg-red-200", offer: "Buy 1 Get 1 Free", category: "Women's Sweatshirt Collection"}
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
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.index} className={`w-screen mt-10 ${image.classname}`}>
            <div className="flex items-center gap-40">
                <img src={image.src} alt={`Slide ${image.index + 1}`} className="h-[700px]" />
                <div className=" flex flex-col gap-5">
                <h6 className="text-lg ">{image.category}</h6>
                <h2 className="text-4xl font-bold">{image.offer}</h2>
                <a href="">
                    <button className="px-5 py-2 bg-black text-white">Shop Now</button>
                </a>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
