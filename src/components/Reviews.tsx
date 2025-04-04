import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowRight from "../assets/arrowRight.svg";

const CustomLightbox = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const handleNext = () => {
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsImageChanging(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + images.length - 1) % images.length
      );
      setIsImageChanging(false);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
        isVisible ? "bg-opacity-90 opacity-100" : "bg-opacity-0 opacity-0"
      }`}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>

      <button
        className="absolute left-4 text-white text-6xl hover:text-gray-300 focus:outline-none transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
      >
        ‹
      </button>

      <div
        className="max-h-full max-w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`max-h-[90vh] max-w-[90vw] object-contain transition-opacity duration-300 ${
            isImageChanging ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <button
        className="absolute right-4 text-white text-6xl hover:text-gray-300 focus:outline-none transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
      >
        ›
      </button>

      <div className="absolute bottom-4 text-white transition-opacity duration-300">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default function Reviews() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    "/reviews/review1.png",
    "/reviews/review2.png",
    "/reviews/review3.png",
    "/reviews/review4.png",
    "/reviews/review5.png",
    "/reviews/review6.png",
    "/reviews/review7.png",
    "/reviews/review8.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full py-6 bg-gray-100 px-4 sm:px-40">
      <h2 className="text-2xl font-bold mb-4">Отзывы</h2>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Отзыв ${index + 1}`}
                className="h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>

      <CustomLightbox
        isOpen={isOpen}
        onClose={closeLightbox}
        images={images}
        initialIndex={photoIndex}
      />
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-15px] xl:right-[-45px] top-1/2 transform -translate-y-1/2  w-10 h-10 flex items-center rounded-full hover:bg-blue-200 transition ease-in-out duration-300"
    >
      <img src={arrowRight} className="w-20 h-20 " alt="arrow-right" />
    </button>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-15px] xl:left-[-45spx] top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center rounded-full  hover:bg-blue-200 transition ease-in-out duration-300"
    >
      <img
        src={arrowRight}
        className="transform rotate-180 w-20 h-20"
        alt="arrow-right"
      />
    </button>
  );
}
