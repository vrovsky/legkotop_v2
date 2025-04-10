import { useState, useEffect, useRef } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Cases from "../components/Cases.tsx";

import correctionHeader from "../assets/correctionCoursePage/correctionIntro.png";
import correctionCollage1 from "../assets/correctionCoursePage/correctionCollage1.png";

import course1 from "../assets/correctionCoursePage/correctionCourse1.png";
import course2 from "../assets/correctionCoursePage/correctionCourse2.png";
import course3 from "../assets/correctionCoursePage/correctionCourse3.png";
import { href } from "react-router-dom";
// import course4 from "../assets/course4.png";

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

const TariffCard = ({ title, price, features, image, href }) => (
  <div className="flex flex-col items-center justify-between text-center rounded-3xl shadow-xl pb-4">
    <div className="flex flex-col items-center p-6 ">
      {/* w-72 if different */}
      <img className=" mb-4 rounded-2xl contrast-125" src={image} alt={title} />
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

const symptoms = [
  {
    title: "Это ваш первый малыш",
    description: `Вы готовитесь стать родителем или недавно родили и вам страшно брать новорождённого на руки, вы ничего не знаете об особенностях развития детей и не хотите полагаться на "авось"`,
  },
  {
    title: "Вы уже опытная мама",
    description:
      "Вы хотите заложить здоровую основу для будущего развития малыша, но вам не хватает знаний, основанных на современном и естественном подходе к развитию младенцев",
  },
  {
    title: "Хотите легкости и уверенности",
    description:
      "Цените подход, где учитываются потребности как ребенка так и родителей. Где уход за ребенком не отнимает у вас все время, а естественно встраивается в вашу привычную жизнь",
  },
];

const tariffs = [
  {
    title: "Базовый без сопровождения для родителей",
    price: 50,
    features: [
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей разного возраста и разных видов асимметрий",
      "Возможность задавать вопросы в рамках курса",
      "Доступ навсегда",
    ],
    image: course1,
    href: "https://secure.wayforpay.com/button/b48cfbe0748de",
  },
  {
    title: "С сопровождением для родителей",
    price: 100,
    features: [
      "Индивидуальное тестирование и определение причин асимметрии вашего ребенка",
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей разного возраста и разных видов асимметрий",
      "Возможность задавать вопросы в рамках курса",
      "Доступ к курсу навсегда",
      "Обратная связь от Татьяна Трубы в течение 1 месяца",
    ],
    image: course2,
    href: "https://secure.wayforpay.com/button/bfd9c33d05784",
  },
  {
    title: "Супервизия для специалистов",
    price: 300,
    features: [
      "Индивидуальное тестирование и определение причин асимметрии ваших клиентов",
      "Вебинар с теоретической базой",
      "4 блока упражнений для детей разного возраста и разных видов асимметрий",
      "Доступ к курсу навсегда",
      "Возможность разбирать кейсы, быть куратором и задавать вопросы в рамках курса",
      "Обратная связь от Татьяна Трубы в течение 3 месяцев",
    ],
    image: course3,
    href: "https://secure.wayforpay.com/page?vkh=67f40135-51cc-4cb6-8834-252a22d1dba8",
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
      "Ребенок только начал ползать раненым партизаном. Может подождать и само пройдет?",
    answer:
      "К сожалению, само не пройдет(( Если не корректировать асимметричное ползание, то привычный способ передвижения будет интегрирован в ходьбу и может привести к ротации таза, разной длине ног и вторичному сколеозу в старшем возрасте",
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
      "Мы гарантируем 100% возврат ваших денег в первую неделю прохождения курса, если вы увидете, что упражнения вам не подходят. К счастью, они на столько эффективны, что мы ни разу еще не делали возврат! Однако покупка курса - это как покупка абонемента в спортзал. Его не достаточно просто купить, нужно регулярно делать упражнения, следить за техникой выполнения и если в чем-то сомневаетесь, у вас всегда есть возможность уточнить информацию у специалиста",
  },
];

export default function ParrentsHandlingCoursePage() {
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
          <h2 className="text-3xl font-bold ">Курс "Хендлинг 0-3 месяца"</h2>
          <h1 className="text-xl font-semibold mt-6 text-justify">
            Научитесь бережно и уверенно взаимодействовать с новорождённым — с
            первых дней жизни
          </h1>
          <h1 className="text-xl font-semibold mt-6 text-justify">
            Правильные движения, поддержка и контакт, которые развивают без
            страха и суеты
          </h1>
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
              src={correctionHeader}
              alt="Intro Pic"
              className="rounded-4xl w-6xl md:max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mt-20 mb-10">
        Вам точно нужен этот курс если
      </h2>

      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 justify-between mx-4 xl:mx-44">
        {symptoms.map((item, index) => (
          <div key={index} className="flex flex-row gap-2">
            <CheckIcon />
            <div className="w-full lg:w-80">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className=" text-lg text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center my-20 py-10 px-4 sm:px-64 bg-cyan-200">
        <h2 className="text-3xl font-bold pb-8">
          Что такое хендлинг и почему родителям важно его освоить?
        </h2>
        {/* <p className="text-lg font-bold sm:text-center pb-10">
          На вебинаре дала базу о влиянии асимметрий на развитие всего
          организма, причины и последствия врожденных и установочных асимметрий
          у детей
        </p> */}
        <iframe
          className="w-full sm:w-3xl aspect-video rounded-4xl"
          src="https://www.youtube.com/embed/ym-gDLZXLbc?si=KZIAZXtq4kW5A9kl"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col lg:ml-20 mx-4 lg:p-8 gap-8 lg:flex-row justify-around">
        <img
          src={correctionCollage1}
          className="h-[600px] md:h-[800px] rounded-2xl"
        />
        <div className="pr-4 xl:pr-20 text-justify">
          <h2 className="text-xl sm:text-3xl text-start lg:text-justify font-bold ">
            Дети развиваются природно и самостоятельно, если взрослые создают
            условия соответствующие возрасту и потребностям ребенка!
          </h2>
          <p className="text-lg sm:text-xl mt-6">
            Если вы боитесь причинить дискомфорт малышу, не уверены в своих
            движениях или хотите научиться основам телесной поддержки — этот
            курс для вас.
          </p>
          <p className="text-lg sm:text-xl mt-6">
            Вы освоите чуткий, осознанный хендлинг, который помогает ребёнку
            развиваться свободно и без напряжения
          </p>
          <p className="text-lg sm:text-xl mt-6 italic font-bold">
            Что вас ждёт в курсе:
          </p>
          <ul className="list-disc text-lg sm:text-xl mt-6">
            <li>
              Видео-уроки с практикой — объясняю и показываю, как безопасно и с
              уважением к  ребёнку брать его на руки, переворачивать, поднимать,
              переодевать, купать;
            </li>
            <li>
              Теория без перегрузки — только то, что действительно нужно знать
              родителю в первые месяцы;
            </li>
            <li>
              Демонстрации на настоящих младенцах и кукле — чтобы вы могли
              видеть реальные движения и сразу повторять;
            </li>
            <li>
              Ответы на ваши вопросы — возможность получить личный ответ и
              поддержку от меня.
            </li>
          </ul>
          <p className="text-lg sm:text-xl font-bold italic mt-6">
            Что получите в результате:
          </p>
          <ul className="text-lg sm:text-xl mt-6">
            <li className="mt-4">
              🔸Уверенность в своём взаимодействии с ребёнком;
            </li>
            <li className="mt-4">
              🔸Навык, который работает каждый день: при любых действиях с
              малышом;
            </li>
            <li className="mt-4">
              🔸Понимание, как поддерживать развитие ребёнка с самого рождения;
            </li>
            <li className="my-4">
              🔸Ответы на ваши вопросы от специалиста с 15-летним опытом работы
              с младенцами
            </li>
          </ul>

          {/* <button className="text-xl bg-red-400 px-24 py-2 hover:bg-red-500 text-white transition-all duration-800 ease-in-out font-bold rounded mt-8">
            Выбрать тариф
          </button> */}
        </div>
      </div>

      <Cases />

      <div ref={tariffRef} className="px-4 xl:px-40 py-16 ">
        <h2 className="text-3xl font-bold text-center mb-4">Тарифы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-4">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
      </div>

      <div className="mx-4 xl:mx-40 my-20 p-4 xl:p-10">
        <h2 className="text-xl xl:text-3xl font-bold text-center mb-8">
          Ответы на вопросы
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-[#3c62c9] w-full text-left flex justify-between items-center text-lg xl:text-xl font-semibold p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
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
                <h1 className="p-4 text-lg xl:text-xl text-semibold text-gray-700  text-justify">
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
