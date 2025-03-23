import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowRight from "../assets/arrowRight.svg";

const lectures = [
  {
    title: "Норма и отклонение от нормы в развитии детей 0-18 мес",
    image: "/images/lecture1.jpg",
  },
  {
    title: "Полезные и бесполезные девайсы",
    image: "/images/lecture2.jpg",
  },
  {
    title: "Нет опоры на ручки! Что делать?",
    image: "/images/lecture3.jpg",
  },
  {
    title: "Коррекция асимметрий у детей 0-10 мес",
    image: "/images/lecture4.jpg",
  },
  {
    title: "Сажать нельзя ждать",
    image: "/images/lecture5.jpg",
  },
  {
    title: "Первые шаги: до и после",
    image: "/images/lecture6.jpg",
  },
];

export default function Lections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-amber-300 py-10 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl xl:text-4xl mb-8 font-bold">
          Доступные лекции
        </h2>
        <Slider {...settings}>
          {lectures.map((lecture, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* <img
                  src={lecture.image}
                  alt={lecture.title}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {lecture.title}
                  </h3>
                  <button className="w-full h-10 bg-blue-500 text-white hover:bg-blue-600">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-45px] xl:right-[-55px] top-1/2 transform -translate-y-1/2  w-12 h-12 flex items-center rounded-full  hover:bg-green-400 transition ease-in-out duration-400"
    >
      <img src={arrowRight} className="w-24 h-24" alt="arrow-right" />
    </button>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-45px] xl:left-[-55px] top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center rounded-full  hover:bg-green-400 transition ease-in-out duration-400"
    >
      <img
        src={arrowRight}
        className="transform rotate-180 w-24 h-24"
        alt="arrow-right"
      />
    </button>
  );
}
