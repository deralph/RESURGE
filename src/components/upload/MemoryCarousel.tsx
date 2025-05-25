import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import  image from '../../assets/Image.png'
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline } from "react-icons/io5";

// Make sure these are imported once in your app (e.g. index.tsx)
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface Memory {
  id: number;
  url: string;
  alt: string;
}

const mockImages: Memory[] = [
  {
    id: 1,
    url: image,
    alt: "Person boxing at a punching bag",
  },
  {
    id: 2,
    url: image,
    alt: "Second boxing memory",
  },
  {
    id: 3,
    url: image,
    alt: "Third boxing memory",
  },
];

const PrevArrow: React.FC<CustomArrowProps> = ({
  onClick,
  currentSlide,
}) => {
  const disabled = currentSlide === 0;
  return (
    <IoArrowBackCircleOutline
      type="button"
      aria-label="Previous memory"
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute -bottom-10 left-1/3
        w-8 h-8 rounded-full bg-white flex items-center justify-center
        ${disabled ? "text-gray-200 cursor-not-allowed" : ""}
      `}
    />
     );
};

const NextArrow: React.FC<CustomArrowProps> = ({
  onClick,
  currentSlide,
  slideCount,
}) => {
  const disabled = currentSlide === slideCount! - 1;
  return (
    <IoArrowForwardCircleOutline 
      type="button"
      aria-label="Next memory"
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute -bottom-10 left-2/3
        w-8 h-8 rounded-full bg-white flex items-center justify-center
        ${disabled ? "text-gray-200 cursor-not-allowed" :""}
      `}
    />
     );
};

export const MemoryCarousel: React.FC = () => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    draggable: true,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full max-w-xs mx-auto my-6">
      <Slider {...settings}>
        {mockImages.map((mem) => (
          <div key={mem.id} className="px-1">
            <img
              src={mem.url}
              alt={mem.alt}
              className="w-full  h-auto object-cover rounded-lg mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MemoryCarousel;
