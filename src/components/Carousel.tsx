import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css'
import { useState, useEffect } from 'react';


const images: string[] = [
  'image0.png',
  'image0.png',
  'image0.png',
  'image0.png',
  'image0.png',
  'image0.png',
];

const Carousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);

  var centerPadding = isMobile ? '50px' : '0px';

  console.log(centerPadding)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: centerPadding,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    

    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
