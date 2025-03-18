import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import tatyana3 from "../assets/tatyana3.png";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";

const CheckIcon = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-40 h-40"
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
    title: "Кривошея",
    description:
      "Ребенок постоянно наклоняет голову и поворачивает лицо в одну сторону, предпочитает одну грудь или ест из бутылочки только в 1 положении, его затылок уплощается с одной стороны.",
  },
  {
    title: 'Поза "Банана"',
    description:
      "Вы видите, что ребенок изгибается дугой в одну сторону, вы видите разные по глубине и высоте складочки на ножках, переворачивается только в одну сторону.",
  },
  {
    title: 'Ползает "Раненым Партизаном"',
    description:
      "Асимметричное ползание, в котором не одинаково задействованы диагонали рука/нога, волочит одну ногу или задирает ее вверх.",
  },
];

export default function ParentsCorrectionCoursePage() {
  return (
    <>
      <Header />
      <div className="flex items-center my-20 mx-72 justify-between">
        <div>
          <h2 className="text-4xl font-bold">
            Курс "Коррекция асимметрий у детей"
          </h2>
          <h1 className="text-2xl font-semibold mt-6">
            Помогите своему ребенку активно и симметрично двигаться в первый год
            жизни, чтобы обеспечить ему хорошую осанку в будущем
          </h1>
          <p className="text-2xl mt-6">Авторская методика Татьяны Трубы</p>
          <button className="text-xl bg-red-400 px-24 py-2 hover:bg-red-500 text-white transition-all duration-800 ease-in-out font-bold rounded mt-8">
            Хочу на курс!
          </button>
        </div>
        <div>
          <div className="relative flex justify-center lg:justify-end">
            {/* <div className="absolute -z-100  bg-teal-400 w-64 h-64 lg:w-[800px] lg:h-[650px] rounded-l-4xl top-[-30px] right-[-500px]"></div> */}
            <img
              src={tatyana3}
              alt="Intro Pic"
              className="rounded-4xl w-6xl max-w-sm md:max-w-md lg:max-w-full bg-amber-700"
            />
          </div>
        </div>
      </div>
      {/* //////////////////////////// */}
      <h2 className="text-4xl font-bold text-center mt-30 mb-10">
        Вам точно нужен этот курс, если вы видите, что у ребенка
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center my-10 mx-4 md:mx-16 lg:mx-64 gap-8">
        {symptoms.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-start  space-x-4 max-w-sm"
          >
            <CheckIcon />
            <div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-700 text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center my-20 py-10 px-64 bg-cyan-400">
        <h2 className="text-4xl font-bold pb-8">
          Как асимметрия в первый год жизни влияет на осанку в будущем?
        </h2>
        <p className="text-xl text-center pb-10">
          На вебинаре дала базу о влиянии асимметрий на развитие всего
          организма, причины и последствия врожденных и установочных асимметрий
          у детей
        </p>
        <iframe
          className="w-3xl aspect-video rounded-4xl"
          src="https://www.youtube.com/embed/FCU3SCULqnY?si=T4KIFvvdcT-u1lgq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="flex flex-col m-4 p-8 lg:flex-row justify-around">
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
        <div className="pr-40">
          <h2 className="text-4xl font-bold ">
            Вы можете самостоятельно помочь своему ребенку справиться с
            асимметрией!
          </h2>
          <p className="text-2xl mt-6">
            Это настолько эффективно, что даже специалисты с большим опытом
            работы пишут восторженные отзывы!
          </p>
          <p className="text-2xl mt-6">
            На коррекцию асимметрии обычно уходит от 2 до 4 недель, если вы
            четко понимаете причины, которые повлияли на ее формирование и
            делаете соответствующие упражнения регулярно. Все просто, логично и
            интуитивно понятно!
          </p>
          <p className="text-2xl mt-6 font-bold">
            Для этого у вас будет вебинар с теорией и 4 блока упражнений с
            подробным описанием техники выполнения.
          </p>
          <p className="text-2xl mt-6">
            У моих клиентов зачастую получается справиться самостоятельно. Но
            бывают ситуации, когда я рекомендую дополнительно обращаться к
            ортопеду, остеопату или кинезиологу, чтобы провести исследования или
            откорректировать компенсации возникшие в теле ребен
          </p>
          <p className="text-2xl mt-6">
            Для сложных случаев асимметрии на курсе предусмотрено{" "}
            <strong>окно обратной связи с ответами на вопросы</strong>.
          </p>
          <button className="text-xl bg-red-400 px-24 py-2 hover:bg-red-500 text-white transition-all duration-800 ease-in-out font-bold rounded mt-8">
            Выбрать тариф
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
