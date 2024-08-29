import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css'

const images: string[] = [
  'https://via.placeholder.com/300x100?text=Image+1',
  'https://via.placeholder.com/300x100?text=Image+2',
  'https://via.placeholder.com/300x100?text=Image+3',
  'https://via.placeholder.com/300x100?text=Image+4',
  'https://via.placeholder.com/300x100?text=Image+5',
  'https://via.placeholder.com/300x100?text=Image+6',
  'https://via.placeholder.com/300x100?text=Image+7',
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
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
