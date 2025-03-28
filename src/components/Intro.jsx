import React, { useState, useEffect } from "react";
import introPic from "../assets/intro3.png";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`bg-amber-300 transition-all duration-900 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="px-4 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex flex-col py-10 px-6 md:px-16 lg:px-10 xl:ml-20">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold ">
              Все о психомоторном развитии детей от рождения до первых шагов для
              родителей и специалистов
            </div>
            <div className="mt-4 text-xl md:text-2xl lg:text-3xl text-justify">
              Помогите ребенку активно и симметрично двигаться в первый год
              жизни, чтобы обеспечить ему хорошую осанку в будущем
            </div>
            <div className="pt-4 text-xl md:text-2xl lg:text-3xl text-center lg:text-justify">
              Авторская методика Татьяны Трубы
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={introPic}
              alt="Intro Pic"
              className={`w-full max-w-sm md:max-w-md lg:max-w-full transition-all duration-900 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-6 md:py-10 px-4 xl:px-40 rounded-lg shadow-lg">
        <div className="text-2xl md:text-4xl font-bold text-center mb-6">
          Вас беспокоит развитие вашего ребенка?
        </div>

        <div className="space-y-4 py-6 text-lg md:text-2xl text-gray-800">
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
        </div>

        <div className="mt-6 text-lg md:text-2xl font-semibold text-center text-gray-900">
          Получите ответы на все вопросы на курсах и индивидуальных
          консультациях <br />
          <span className="text-orange-600 font-semibold">
            Онлайн Школы Татьяны Трубы{" "}
            <span className="font-bold">Legko_top</span>
          </span>
        </div>
      </div>
    </div>
  );
}
