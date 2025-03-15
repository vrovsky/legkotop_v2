import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="w-full h-auto p-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-center ">Кейсы</h2>
      <Slider {...settings} className="w-full">
        {videos.map((video, index) => (
          <div key={index} className="p-4">
            <video
              src={video}
              controls
              playsInline
              className="w-full h-[640px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
