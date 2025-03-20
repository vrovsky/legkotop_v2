import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", size: "10px" }}
      onClick={onClick}
    />
  );
}

export default function Cases() {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    // "/videos/video4.mp4",
    // "/videos/video5.mp4",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
    <div className="w-full h-auto pt-10 p-4 overflow-hidden bg-amber-100">
      {/* <h2 className="text-4xl mb-8 pl-4 font-bold">Кейсы наших клиентов</h2> */}
      <Slider {...settings} className="w-full">
        {videos.map((video, index) => (
          <div key={index} className="p-4">
            <video
              src={video}
              controls
              playsInline
              className=" h-[640px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
