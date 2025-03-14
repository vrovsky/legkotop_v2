import React from "react";
import myImage from "../assets/your-image.jpg";

export default function Intro() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center p-8">
          <div className="text-lg font-semibold">
            Все о психомоторном развитии детей от рождения до первых шагов для
            родителей и специалистов
          </div>
          <div className="mt-4">
            Помогите ребенку активно и симметрично двигаться в первый год жизни,
            чтобы обеспечить ему хорошую осанку в будущем
          </div>
        </div>
        <div className="w-1/2 bg-cover bg-center p-20">
          <img src={myImage} alt="Your Image" />
        </div>
      </div>
      <div className="flex justify-center text-lg">
        Авторская методика Татьяны Трубы
      </div>
    </div>
  );
}
