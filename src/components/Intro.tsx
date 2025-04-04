import { useState, useEffect } from "react";
import introPic from "../assets/tatyanaP.png";
// import yellowcircle from "../assets/yellowcircle.svg";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`bg-amber-300 transition-all duration-900 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
      }`}
    >
      <div className="px-4 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex flex-col py-10 px-6 md:px-16 lg:px-10 xl:ml-20">
            <h2 className="text-2xl lg:text-4xl text-justify lg:text-left font-bold ">
              Все о психомоторном развитии детей от рождения до первых шагов для
              родителей и специалистов
            </h2>
            <h1 className="mt-4 text-xl lg:text-2xl text-justify">
              Помогите ребенку активно и симметрично двигаться в первый год
              жизни, чтобы обеспечить ему хорошую осанку в будущем
            </h1>
            <h1 className="pt-4 text-xl md:text-2xl lg:text-2xl text-center lg:text-justify">
              Авторская методика Татьяны Трубы
            </h1>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            {/* <img
              src={yellowcircle}
              className="absolute z-0 w-1/4 ml-100 mt-20"
            ></img>
            <img
              src={yellowcircle}
              className="absolute z-10 w-1/4 ml-40 mt-60"
            ></img> */}
            <img
              src={introPic}
              alt="Intro Pic"
              className={`relative z-20 w-full max-w-sm md:max-w-md lg:max-w-full ${
                isVisible
                // ? "opacity-100 translate-x-0"
                // : "opacity-0 translate-x-5"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-6 md:pb-10 md:pt-20 px-4 xl:px-40 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Вас беспокоит развитие вашего ребенка?
        </h2>

        <h2 className="space-y-4 py-6 text-lg md:text-xl text-gray-800">
          <p>
            🔸 Вы заметили, что ребёнок осваивает навыки не так, как другие, и у
            вас появились вопросы?
          </p>
          <p>
            🔸 Вам порекомендовали массаж, но нет возможности регулярно посещать
            специалиста?
          </p>
          <p>
            🔸 Хотите точно знать, соответствует ли развитие вашего малыша
            возрастной норме, и что делать дальше?
          </p>
          <p>🔸 Вас что-то тревожит, но педиатр не придаёт этому значения?</p>
        </h2>

        <h2 className="mt-6 text-lg md:text-2xl font-semibold text-center text-gray-900">
          Получите ответы на все вопросы на курсах и индивидуальных
          консультациях <br />
          <span className="text-orange-600 font-semibold">
            Онлайн Школы Татьяны Трубы{" "}
            <span className="font-bold">Legko_top</span>
          </span>
        </h2>
      </div>
    </div>
  );
}
