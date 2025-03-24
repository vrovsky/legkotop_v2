import React, { useState, useEffect } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Cases from "../components/Cases.jsx";

import tatyana3 from "../assets/tatyana3.png";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";

const TariffCard = ({ title, price, features, image }) => (
  <div className="flex flex-col items-center justify-between rounded-3xl shadow-xl pb-4">
    <div className="flex flex-col items-center p-6 ">
      <img className="w-56 h-56 mb-4 rounded-2xl" src={image} alt={title} />
      <h2 className="text-2xl font-bold   pb-2 mb-4">{title}</h2>
      <ul className="space-y-2 text-xl text-justify text-gray-700 list-disc pt-6 border-t-4 border-red-400">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <button className="mt-6 text-lg bg-red-400 px-6 py-2 hover:bg-red-500 text-white font-bold rounded-lg transition duration-300">
      {price} EUR
    </button>
  </div>
);

const CheckIcon = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-10 h-10"
  >
    <g fill="orange">
      <path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" />
      <path
        fillRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const symptoms = [
  {
    title: "Ребенок не сидит",
    description:
      "В 6 месяцев не сидит с опорой на руки, а в 9 не может сидеть самостоятельно и держать в руках 2 игрушки одновременно.",
  },
  {
    title: "Сидит, но не садится сам",
    description:
      "Если посадить, то может удерживать себя вертикально, хорошо сидит в стульчике для кормления, но не может самостоятельно сесть ни с какого положения",
  },
  {
    title: "Вы тревожитесь и боитесь навредить",
    description:
      "Хотите понимать, как долго можно ждать, а когда стоит вмешиваться и как накормить ребенка, который еще не сидит",
  },
];

const tariffs = [
  {
    title: "Базовый",
    price: 40,
    features: [
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей с разной степенью готовности к сидению",
      "Возможность задавать вопросы в рамках курса",
      "Доступ навсегда",
    ],
    image: course1,
  },
  {
    title: "Индивидуальный для родителей",
    price: 70,
    features: [
      "Индивидуальное тестирование и определение причин, почему ваш ребенок не сидит самостоятельно",
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей с разной степенью готовности к сидению",
      "Возможность задавать вопросы в рамках курса",
      "Доступ к курсу навсегда",
      "Обратная связь от Татьяна Трубы в течение 2 недель",
    ],
    image: course2,
  },
  {
    title: "Супервизия для специалистов",
    price: 300,
    features: [
      "Индивидуальное тестирование и определение причин нарушения и задержки двигательного развития ваших клиентов",
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей с разной степенью готовности к сидению",
      "Доступ к курсу навсегда",
      "Возможность разбирать кейсы, быть куратором и задавать вопросы в рамках курса",
      "Обратная связь от Татьяна Трубы в течение 3 месяцев",
    ],
    image: course3,
  },
];

const faqs = [
  {
    question: "Подойдет ли мне курс, если я просто мама, а не специалист?",
    answer:
      "Да! Все упражнения разработаны специально для родителей, которые не являются специалистами по движению и не имеют медицинскогообразования. Даже если вы ранее никогда не работали с детьми, вам подойдет этот курс",
  },
  {
    question:
      "Все дети разные! Может ничего не делать и ребенок сядет, когда будет готов?",
    answer:
      "Да, на освоение навыков каждому ребенку требуется не одинаковое количество времени. Однако, очень важно обеспечить малышу безопасное введение прикорма, то есть сидение с ровной спиной. А это может произойти, если ребенок освоит все навыки, предшествующие самостоятельному сидению. На курсе вы не только узнаете, что мешает вашему крохе сесть, но и получите эффективные упражнения, способствующие самостоятельному выходу в сидение и ползанию на четвереньках",
  },
  {
    question: "Подойдет ли курс для детского массажиста?",
    answer:
      "Да! Многие мои коллеги приобрели курс и начали применять упражнения в своей практике. Положительные отзывы можете прочитать в карусели выше",
  },
  {
    question:
      "Я уже покупала курс у другого специалиста, но нам не помогло! Как я могу быть уверена, что этот поможет?",
    answer:
      "Мы гарантируем 100% возврат ваших денег в первую неделю прохождения курса, если вы увидете, что упражнения вам не подходят. К счастью, они на столько эффективны, что мы ни разу еще не делали возврат! Однако покупка курса - это как покупка абонемента в спортзал. Его не достаточно просто купить, нужно регулярно делать упражнения, следить за техникой выполнения и если в чем-то сомневаетесь, лучше спросите у тренера, а не у подружки )))",
  },
];
export default function ParrentsSittingCoursePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <div
        className={`flex items-center flex-col-reverse gap-12 lg:flex-row py-20 px-4 lg:px-40 xl:px-80 justify-between transition-all duration-900 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="flex xl:items-start flex-col">
          <h2 className="text-4xl font-bold">Курс "Сажать нельзя ждать"</h2>
          <h1 className="text-2xl font-semibold mt-6">
            Помогите ребёнку сесть и поползти самостоятельно в комфортном для
            него темпе!
          </h1>
          <p className="text-2xl mt-6 text-justify">
            Научитесь поддерживать естественное развитие малыша без лишних
            девайсов и стрессов
          </p>
          <p className="text-2xl mt-6">Авторская методика Татьяны Трубы</p>
          <button className="text-xl bg-red-400 px-24 py-2 hover:bg-red-500 text-white transition-all duration-800 ease-in-out font-bold rounded mt-8">
            Выбрать тариф
          </button>
        </div>
        <div>
          <div className="w-full max-w-sm lg:max-w-xl xl:max-w-3xl">
            <img
              src={tatyana3}
              alt="Intro Pic"
              className="rounded-4xl w-6xl max-w-sm md:max-w-md lg:max-w-full bg-amber-700"
            />
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mt-30 mb-10">
        Вам точно нужен этот курс если
      </h2>

      <div className="text-justify flex flex-col items-center lg:items-start lg:flex-row gap-4 justify-between mx-4 xl:mx-60">
        {symptoms.map((item, index) => (
          <div key={index} className="flex flex-row gap-2">
            <CheckIcon />
            <div className="w-full lg:w-72">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className=" text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-justify flex flex-col items-center my-20 py-10 px-4 sm:px-64 bg-cyan-400">
        <h2 className="text-4xl font-bold pb-8 ">
          Почему сидение это такой же важный навык, как и ползание?
        </h2>
        <p className="text-xl font-bold  pb-10">
          На вебинаре с примерами и актуальными исследованиями разобрала, как и
          когда дети начинают сидеть — нормы и естественные сроки; признаки
          готовности малыша к самостоятельному сидению; почему ребёнок не
          садится — причины и пути решения
        </p>
        <iframe
          className="w-full sm:w-3xl aspect-video rounded-4xl"
          src="https://www.youtube.com/embed/FCU3SCULqnY?si=T4KIFvvdcT-u1lgq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="text-justify flex flex-col m-4 p-8 gap-8 lg:flex-row justify-around">
        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-4 max-w-2xl mx-auto">
          <img
            src={course1}
            class="col-span-1 row-span-2 rounded-2xl shadow-xl"
          />
          <img src={course2} class="rounded-2xl shadow-xl" />
          <div class="grid grid-cols-2 gap-4">
            <img src={course3} class="rounded-2xl shadow-xl" />
            <img src={course4} class="rounded-2xl shadow-xl" />
          </div>
        </div>
        <div className="pr-4 sm:pr-40">
          <h2 className="text-2xl sm:text-4xl font-bold ">
            Сажать или ждать? Перестаньте волноваться и помогите своему ребенку
            освоить навык сидения без слез и истерик!
          </h2>
          <p className="text-lg sm:text-2xl mt-6">
            Если вы сомневаетесь, когда малыш должен начать сидеть, нужно ли
            помогать или лучше подождать — этот курс для вас
          </p>
          <p className="text-lg sm:text-2xl mt-6">
            Вы получите ответы на все вопросы о самостоятельном сидении и
            пошаговые упражнения, чтобы поддержать ребёнка в развитии.
          </p>
          <p className="text-lg sm:text-2xl mt-6 font-bold">
            Что вас ждёт в курсе:
          </p>
          <ul className="list-disc mt-6 text-lg sm:text-2xl">
            <li>
              <i>Теоретический вебинар</i> — чётко, без воды, с примерами и
              актуальными исследованиями;
            </li>
            <li>
              4 практических блока с активными гравитационными упражнениями —
              объясняю текстом и показываю на видео каждое упражнение на детях и
              кукле;
            </li>
            <li>
              Вы сможете сразу повторять и видеть прогресс в освоении
              самостоятельного сидения и ползания вашим ребенком!
            </li>
          </ul>
          <p className="text-lg sm:text-2xl mt-6">
            <i>Что получите в результате:</i>
          </p>
          <p className="text-lg sm:text-2xl mt-6">
            Чёткое понимание, как развивается навык сидения;
          </p>
          <p className="text-lg sm:text-2xl mt-6">
            Уверенность, что вы не упустили момент и все делаете правильно;
          </p>
          <p className="text-lg sm:text-2xl mt-6">
            Ответы на все ваши вопросы от специалиста с 16-летним опытом.
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-12">
        Результаты мам и малышей, которые прошли этот курс
      </h2>
      <Cases />

      <div className="px-4 xl:px-40 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Тарифы</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-4">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
      </div>

      <div className="text-justify mx-4 xl:mx-40 my-20 p-4 xl:p-10">
        <h2 className="text-2xl xl:text-4xl font-bold text-center mb-8">
          Ответы на вопросы
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg xl:text-2xl font-semibold p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                {faq.question}
                <span
                  className={`text-3xl xl:text-5xl transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-4 text-lg xl:text-2xl text-semibold text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
