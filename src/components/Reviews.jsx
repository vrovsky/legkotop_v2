import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Отличный курс! Узнала много нового, теперь уверенно помогаю ребенку в развитии.",
    },
    {
      name: "Дмитрий Иванов",
      text: "Очень понравилась методика! Все четко, понятно и главное — работает!",
    },
    {
      name: "Екатерина Петрова",
      text: "Спасибо за полезную информацию и поддержку! Уже вижу прогресс у малыша.",
    },
    {
      name: "Сергей Волков",
      text: "Прекрасный курс! Теперь понимаю, как правильно взаимодействовать с ребенком.",
    },
    {
      name: "Жанна Смирнова",
      text: "Отличный курс! Узнала много нового, теперь уверенно помогаю ребенку в развитии.",
    },
    {
      name: "Георгий Иванов",
      text: "Очень понравилась методика! Все четко, понятно и главное — работает!",
    },
    {
      name: "Павел Петрова",
      text: "Спасибо за полезную информацию и поддержку! Уже вижу прогресс у малыша.",
    },
    {
      name: "Антон Волков",
      text: "Прекрасный курс! Теперь понимаю, как правильно взаимодействовать с ребенком.",
    },
    {
      name: "Денис Смирнова",
      text: "Отличный курс! Узнала много нового, теперь уверенно помогаю ребенку в развитии.",
    },
    {
      name: "Виктор Иванов",
      text: "Очень понравилась методика! Все четко, понятно и главное — работает!",
    },
    {
      name: "Даша Петрова",
      text: "Спасибо за полезную информацию и поддержку! Уже вижу прогресс у малыша.",
    },
    {
      name: "Жопа Волков",
      text: "Прекрасный курс! Теперь понимаю, как правильно взаимодействовать с ребенком.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-10 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 pl-10">Отзывы</h2>
      <div className=" px-6 mx-auto">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-2">{review.name}</p>
                <p className="text-gray-700">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
