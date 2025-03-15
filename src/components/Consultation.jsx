import React from "react";
import { Link } from "react-router-dom";

export default function Consultation() {
  return (
    <div className="px-10 py-10">
      <div className="text-4xl font-bold mb-6">
        Индивидуальная консультация с Татьяной Трубой
      </div>

      <div className="space-y-4 text-2xl pl-6 text-gray-800">
        <p>
          Ваш малыш уникален, но его развитие можно поддержать наилучшим
          образом!
        </p>
        <p>
          Вы заметили, что ребёнок осваивает навыки не так, как другие, и у вас
          появились вопросы?
        </p>
        <p>
          Вам порекомендовали массаж, но нет возможности регулярно посещать
          специалиста?
        </p>
        <p>
          Хотите точно знать, соответствует ли развитие вашего малыша возрастной
          норме, и что делать дальше?
        </p>
        <p>Вас что-то тревожит, но педиатр не придаёт этому значения?</p>

        <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="font-semibold">💡 На консультации мы:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Разберёмся, как двигается ваш малыш, и определим, что ему
              действительно нужно.
            </li>
            <li>
              Подберём активные гравитационные упражнения, которые помогут телу
              раскрыть свой потенциал.
            </li>
            <li>
              Освоим базовые техники массажа и функциональных упражнений, чтобы
              вы могли исправить асимметрию и скорректировать задержку
              психомоторного развития без лишних слез и истерик.
            </li>
          </ul>
        </div>

        <p className="font-semibold">
          Поможем малышу расти свободно, уверенно и гармонично!
        </p>

        <p className="italic">
          📩 Записывайтесь на онлайн консультацию – всё можно сделать из дома!
        </p>
      </div>

      <Link
        to="/consultation"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold my-4 py-4 px-8 rounded-lg transition-all text-lg shadow-md"
      >
        Хочу узнать подробнее
      </Link>
    </div>
  );
}
