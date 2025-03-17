import React from "react";
import introPic from "../assets/introPic.png";

export default function Intro() {
  return (
    <div className="bg-[#F2BB03]">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Контейнер с текстом */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 px-6 md:px-16 lg:px-30">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
            Все о психомоторном развитии детей от рождения до первых шагов для
            родителей и специалистов
          </div>
          <div className="mt-4 text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
            Помогите ребенку активно и симметрично двигаться в первый год жизни,
            чтобы обеспечить ему хорошую осанку в будущем
          </div>
          <div className="pt-4 text-lg md:text-2xl lg:text-3xl text-center lg:text-left">
            Авторская методика Татьяны Трубы
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={introPic}
            alt="Intro Pic"
            className="w-full max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
