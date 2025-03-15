import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl text-2xl  mx-auto p-6 text-gray-900">
        <h1 className="text-4xl font-bold text-center mb-6">
          Онлайн консультация
        </h1>
        <p className="mb-4">
          Онлайн консультация состоит из{" "}
          <span className="font-semibold">2 частей</span>: онлайн занятия +
          сопровождение.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Онлайн встреча</span> длится около{" "}
          <span className="font-semibold">1 часа</span>. На ней мы проведем
          тестирование, я подберу коррекционные упражнения, и вы попробуете их
          сделать. Отвечу на все ваши вопросы.
        </p>
        <p className="mb-4">
          Встречаемся в <span className="font-semibold">Zoom</span>, будет
          видеозапись.
        </p>
        <p className="mb-4">
          Затем в течение <span className="font-semibold">2 недель</span> вы
          сможете присылать мне видео того, как вы занимаетесь, а я буду
          корректировать и добавлять другие упражнения, чтобы на разных уровнях
          снять ограничения и запустить нормальное движение ребенка.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2">Стоимость</h2>
        <p className="text-lg font-semibold">100 евро</p>

        <h2 className="text-2xl font-bold mt-6 mb-2">Способы оплаты</h2>
        <ul className="list-disc list-inside mb-6">
          <li>PayPal</li>
          <li>IBAN в евро/доллар</li>
          <li>Эквивалент на карту Приватбанка</li>
          <li>Криптокошелек USDT</li>
        </ul>

        <div className="flex justify-center">
          <a
            href="https://example.com/payment-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Оплатить консультацию
          </a>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-blue-500 hover:underline">
            ⬅ Вернуться на главную
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
