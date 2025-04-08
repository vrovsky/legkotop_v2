import { useState, useEffect, useRef } from "react";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Cases from "../components/Cases.tsx";

import sittingCourseintro from "../assets/sittingCoursePage/sittingCourseIntro.png";
import course1 from "../assets/sittingCourseBasic.png";
import course2 from "../assets/sittingCourseCorrection.png";
import course3 from "../assets/sittingCourseSupervision.png";
import sittingCollage1 from "../assets/sittingCoursePage/sittingCollage2.png";

import course4 from "../assets/course4.png";

const TariffCard = ({ title, price, features, image, href }) => (
  <div className="flex flex-col items-center justify-between text-center rounded-3xl shadow-xl pb-4">
    <div className="flex flex-col items-center p-6 ">
      {/* w-72 if different */}
      <img
        className=" mb-4 rounded-2xl brightness-125"
        src={image}
        alt={title}
      />
      <h2 className="text-xl font-bold  pb-2 mb-4">{title}</h2>
      <ul className="space-y-2 text-xl pl-4 text-justify text-gray-700 list-disc pt-6 border-t-4 border-amber-300">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        className="mt-6 text-lg bg-amber-600 px-6 py-2 hover:bg-amber-500 
    text-white font-bold rounded-lg transition duration-300"
      >
        {price} EUR
      </button>
    </a>
  </div>
);

const CheckIcon = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8"
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
    title: "Базовый без сопровождения для родителей",
    price: 50,
    features: [
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей с разной степенью готовности к сидению",
      "Возможность задавать вопросы в рамках курса",
      "Доступ навсегда",
    ],
    image: course1,
    href: "https://secure.wayforpay.com/button/bb51e1db96b9b",
  },
  {
    title: "С сопровождением для родителей",
    price: 100,
    features: [
      "Индивидуальное тестирование и определение причин, почему ваш ребенок не сидит самостоятельно",
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей с разной степенью готовности к сидению",
      "Возможность задавать вопросы в рамках курса",
      "Доступ к курсу навсегда",
      "Обратная связь от Татьяна Трубы в течение 2 недель",
    ],
    image: course2,
    href: "https://secure.wayforpay.com/button/b1ad7670a3e74",
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
    href: "https://secure.wayforpay.com/button/ba0d97c352678",
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
  const tariffRef = useRef<HTMLDivElement | null>(null);
  const scrollToTariffs = () => {
    tariffRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        className={` bg-amber-300  flex items-center flex-col gap-12 lg:flex-row 
          py-10 px-4 lg:px-40 xl:px-20 justify-between 
          transition-all duration-900 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
      >
        <div className="flex xl:items-start flex-col">
          <h2 className="text-3xl font-bold">Курс "Сажать нельзя ждать"</h2>
          <h1 className="text-xl font-semibold mt-6">
            Помогите ребёнку сесть и поползти самостоятельно в комфортном для
            него темпе!
          </h1>
          <p className="text-xl mt-6 text-justify">
            Научитесь поддерживать естественное развитие малыша без лишних
            девайсов и стрессов
          </p>
          <p className="text-xl mt-6">Авторская методика Татьяны Трубы</p>
          <button
            onClick={scrollToTariffs}
            className="text-xl bg-red-400 px-24 py-2 hover:bg-red-500 text-white transition-all duration-800 ease-in-out font-bold rounded mt-8"
          >
            Выбрать тариф
          </button>
        </div>
        <div>
          <div className="w-full max-w-sm lg:max-w-xl xl:max-w-5xl">
            <img
              src={sittingCourseintro}
              alt="Intro Pic"
              className="rounded-4xl w-6xl md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">
        Вам точно нужен этот курс если
      </h2>
      <div className="text-justify flex flex-col items-center lg:items-start lg:flex-row gap-10 justify-between mx-4 xl:mx-44">
        {symptoms.map((item, index) => (
          <div key={index} className="flex flex-row gap-2">
            <CheckIcon />
            <div className="w-full lg:w-64">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className=" text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-justify flex flex-col items-center my-20 py-10 px-4 sm:px-64 bg-cyan-200">
        <h2 className="text-3xl font-bold pb-8 ">
          Почему сидение это такой же важный навык, как и ползание?
        </h2>
        <p className="text-lg font-bold pb-10">
          На вебинаре с примерами и актуальными исследованиями разобрала, как и
          когда дети начинают сидеть — нормы и естественные сроки; признаки
          готовности малыша к самостоятельному сидению; почему ребёнок не
          садится — причины и пути решения
        </p>
        <iframe
          className="w-full lg:w-3xl aspect-video rounded-4xl"
          src="https://www.youtube.com/embed/FCU3SCULqnY?si=T4KIFvvdcT-u1lgq"
          title="YouTube video player"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="text-justify flex flex-col mx-4 px-8 pb-10 gap-8 lg:flex-row-reverse justify-around">
        <img src={sittingCollage1} className="md:h-[500px] rounded-2xl" />
        <div className="pr-4 xl:pl-20">
          <h2 className="text-xl sm:text-3xl font-bold ">
            Сажать или ждать? Перестаньте волноваться и помогите своему ребенку
            освоить навык сидения без слез и истерик!
          </h2>
          <p className="text-lg sm:text-xl mt-6">
            Если вы сомневаетесь, когда малыш должен начать сидеть, нужно ли
            помогать или лучше подождать — этот курс для вас
          </p>
          <p className="text-lg sm:text-xl mt-6">
            Вы получите ответы на все вопросы о самостоятельном сидении и
            пошаговые упражнения, чтобы поддержать ребёнка в развитии.
          </p>
          <p className="text-lg sm:text-xl mt-6 font-bold">
            Что вас ждёт в курсе:
          </p>
          <ul className="list-disc mt-6 text-lg sm:text-xl">
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
          <p className="text-lg sm:text-xl mt-6">
            <i>Что получите в результате:</i>
          </p>
          <p className="text-lg sm:text-xl mt-6">
            Чёткое понимание, как развивается навык сидения;
          </p>
          <p className="text-lg sm:text-xl mt-6">
            Уверенность, что вы не упустили момент и все делаете правильно;
          </p>
          <p className="text-lg sm:text-xl mt-6">
            Ответы на все ваши вопросы от специалиста с 16-летним опытом.
          </p>
        </div>
      </div>
      {/* title="Результаты мам и малышей, которые прошли этот курс" */}
      <Cases />
      <div ref={tariffRef} className="px-4 xl:px-40 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Тарифы</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-4">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
      </div>
      <div className="text-justify mx-4 xl:mx-40 my-8 p-4 xl:p-10">
        <h2 className="text-xl xl:text-3xl font-bold text-center mb-8">
          Ответы на вопросы
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-[#3c62c9] w-full text-left flex justify-between items-center text-lg xl:text-2xl font-semibold p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
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
                <h1 className="p-4 text-lg xl:text-xl text-semibold text-gray-700">
                  {faq.answer}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
