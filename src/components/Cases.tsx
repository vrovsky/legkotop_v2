import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowRight from "../assets/arrowRight.svg";

export default function Cases() {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
  ];

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
        <h2 className="text-4xl mb-8 font-bold text-center">
          Кейсы наших клиентов
        </h2>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="px-2">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[640px] flex justify-center">
                <video
                  src={video}
                  controls
                  playsInline
                  className="rounded-lg max-w-full h-full object-cover"
                />
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
      className="absolute right-[-45px] xl:right-[-45px] top-1/2 transform -translate-y-1/2  w-10 h-10 flex items-center rounded-full hover:bg-blue-200 transition ease-in-out duration-300"
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
      className="absolute left-[-45px] xl:left-[-45spx] top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center rounded-full  hover:bg-blue-200 transition ease-in-out duration-300"
    >
      <img
        src={arrowRight}
        className="transform rotate-180 w-20 h-20"
        alt="arrow-right"
      />
    </button>
  );
}
