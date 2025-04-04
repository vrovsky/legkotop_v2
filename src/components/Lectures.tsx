import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowRight from "../assets/arrowRight.svg";

const lectures = [
  {
    title: "Норма и отклонение от нормы в развитии детей 0-18 мес",
    image: "/lectures/lecture1.jpg",
  },
  {
    title: "Полезные и бесполезные девайсы",
    image: "/lectures/lecture2.jpg",
  },
  {
    title: "Нет опоры на ручки! Что делать?",
    image: "/lectures/lecture3.jpg",
  },
  {
    title: "Коррекция асимметрий у детей 0-10 мес",
    image: "/lectures/lecture4.jpg",
  },
  {
    title: "Сажать нельзя ждать",
    image: "/lectures/lecture5.jpg",
  },
  {
    title: "Первые шаги: до и после",
    image: "/lectures/lecture6.jpg",
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
    <div className="w-full bg-amber-200 py-10 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl xl:text-4xl mb-8 font-bold">
          Лекции
        </h2>
        <Slider {...settings}>
          {lectures.map((lecture, index) => (
            <div key={index} className="px-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={lecture.image}
                  alt={lecture.title}
                  className="w-full h-52 md:h-64 xl:h-76 object-cover rounded-3xl"
                />
                <div className="p-4 text-center">
                  {/* <h3 className="text-lg font-semibold mb-2">
                    {lecture.title}
                  </h3> */}
                  <button className="text-xl font-bold w-full rounded-xl h-11 bg-blue-400 text-white hover:bg-blue-500 transition ease-in-out duration-400">
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
      className="absolute right-[-45px] xl:right-[-45px] top-1/2 transform -translate-y-1/2  w-10 h-10 flex items-center rounded-full  hover:bg-blue-200 transition ease-in-out duration-400"
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
      className="absolute left-[-45px] xl:left-[-45px] top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center rounded-full  hover:bg-blue-200 transition ease-in-out duration-400"
    >
      <img
        src={arrowRight}
        className="transform rotate-180 w-20 h-20"
        alt="arrow-right"
      />
    </button>
  );
}
