import React from "react";
import introPic from "../assets/introPic.png";

export default function Intro() {
  return (
    <div className="bg-[#F2BB03]">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center py-20 px-30">
          <div className="text-5xl font-semibold">
            Все о психомоторном развитии детей от рождения до первых шагов для
            родителей и специалистов
          </div>
          <div className="mt-4 text-3xl">
            Помогите ребенку активно и симметрично двигаться в первый год жизни,
            чтобы обеспечить ему хорошую осанку в будущем
          </div>
          <div className="pt-4 text-3xl">Авторская методика Татьяны Трубы</div>
        </div>
        <div className="bg-cover bg-center w-1/3">
          <img src={introPic} alt="Intro Pic" />
        </div>
      </div>
    </div>
  );
}
