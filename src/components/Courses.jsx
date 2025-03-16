import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: 'Курс для родителей "Коррекция асимметрий у детей"',
    content: (
      <div className="space-y-4 px-10 text-2xl">
        <p>
          Вам нужен этот курс, если вы видите, что у ребенка были и/или есть:
        </p>
        <ul className="list-none space-y-1">
          <li>🔸 привычный наклон и поворот головы</li>
          <li>🔸 поза "банана"</li>
          <li>🔸 ползание "раненым партизаном"</li>
          <li>
            🔸 ползание на четвереньках, когда одна ножка идет в опору на стопу,
            а вторая опирается на колено ("паучок")
          </li>
        </ul>
        <p>
          Это все исправимо с помощью активных гравитационных упражнений и
          правильных поддержек на руках.
        </p>
        <p>
          На коррекцию асимметрии обычно уходит{" "}
          <strong>от 2 до 4 недель</strong>, если вы четко понимаете причины,
          повлиявшие на ее формирование, и выполняете упражнения регулярно!
        </p>
        <p>
          Для этого у вас будет <strong>вебинар с теорией</strong> и{" "}
          <strong>4 блока упражнений</strong> с подробным описанием техники
          выполнения.
        </p>
        <p>
          У моих клиентов чаще всего удается справиться самостоятельно.
          Специалисты также отмечают хорошие результаты, когда применяют мою
          методику в своей работе.
        </p>
        <p>
          Для сложных случаев асимметрии на курсе предусмотрено{" "}
          <strong>окно обратной связи</strong> с ответами на вопросы.
        </p>
        <p className="font-semibold">Доступ навсегда!</p>
        <Link
          to="/correction-course"
          // href="https://legkotopcorrection.wayforpay.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-2xl text-center bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-lg transition-all"
        >
          Хочу на курс!
        </Link>
      </div>
    ),
    gradient: "from-red-500 to-yellow-500",
  },
  {
    title: 'Курс для родителей "Сажать нельзя ждать"',
    content: (
      <div className="space-y-4 text-2xl px-10">
        <p>
          Курс состоит из <strong>теоретического вебинара</strong>, видео с
          реальными младенцами, практики и упражнений для самостоятельного
          перехода к сидению и ползанию.
        </p>
        <p className="font-semibold">На вебинаре разбираем такие темы:</p>
        <ul className="list-none space-y-1">
          <li>➡️ Как и когда дети начинают сидеть</li>
          <li>➡️ Сидит и садится самостоятельно: в чем разница</li>
          <li>➡️ Устройства для сидения: полезные и вредные девайсы</li>
          <li>
            ➡️ Что говорят исследователи, педиатры и специалисты по движению в
            разных странах о сидении детей
          </li>
          <li>
            ➡️ Признаки готовности к самостоятельному сидению, на которые могут
            ориентироваться родители
          </li>
          <li>➡️ Почему ребенок не сидит/не садится и как помочь</li>
          <li>➡️ Когда и для чего уже точно нужно помогать ребенку сесть</li>
        </ul>
        <p>
          Далее идут <strong>4 блока упражнений</strong>, которые помогут
          ребенку сесть и поползти самостоятельно. Все упражнения я объясняю и
          показываю на реальных детях или на кукле.
        </p>
        <p>
          Также есть возможность задать вопрос и получить ответ{" "}
          <strong>от меня лично</strong>.
        </p>
        <div className="pt-4">
          <Link
            to="/sitting-course"
            // href="https://example.com/payment-link2"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-2xl text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-lg transition-all"
          >
            Хочу на курс!
          </Link>
        </div>
      </div>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: 'Курс для родителей "Хендлинг 0-3 месяца"',
    content: (
      <div className="space-y-4 text-2xl px-10">
        <p>
          Хотите научиться безопасно и комфортно носить ребенка на руках,
          успокаивать его без слез, позаботиться о его здоровье и своевременном
          двигательном развитии?
        </p>
        <p>
          Приглашаем вас на{" "}
          <strong>Курс-практикум "Основы хендлинга для мам"!</strong>
        </p>
        <div className="pt-4">
          <Link
            // href="https://secure.wayforpay.com/payment/se8e29f6d04ee"
            to="/handling-course"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-2xl text-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg transition-all"
          >
            Хочу на курс!
          </Link>
        </div>
      </div>
    ),
    gradient: "from-green-500 to-lime-500",
  },
  {
    title:
      'Курс для специалистов "Основы хендлинга и двигательной терапии для детей"',
    content: (
      <div className="space-y-4 text-2xl px-10">
        <p className="font-semibold">Поздравляю, меня зовут Татьяна Труба!</p>
        <p>
          Приглашаю на авторский курс{" "}
          <strong>
            "Основы хендлинга и двигательной терапии для специалистов"
          </strong>
          , который поможет вам быть более эффективными в работе с детьми.
        </p>

        <p className="font-semibold">Что будет на курсе?</p>
        <p>
          <strong>3 модуля теории:</strong>
        </p>
        <ul className="list-none space-y-1">
          <li>
            📌 Позы контакта, позиционирования и поддержки на руках для детей
            разных возрастов
          </li>
          <li>
            📌 Упражнения для коррекции асимметрий для разных возрастов (от 0 до
            15 мес)
          </li>
          <li>
            📌 Ежедневный уход и развивающее позиционирование во время
            кормления, купания, прогулок, в девайсах
          </li>
        </ul>

        <p>
          <strong>Практика:</strong>
        </p>
        <ul className="list-none space-y-1">
          <li>✅ Интервизия – разбор кейсов студентов во время Zoom-сессии</li>
          <li>✅ Ответы на вопросы</li>
        </ul>

        <div className="pt-4">
          <Link
            // href="https://secure.wayforpay.com/payment/sc9a241e72963"
            to="/specialists-course"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-2xl text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-4 rounded-lg transition-all"
          >
            Хочу на курс!
          </Link>
        </div>
      </div>
    ),
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Courses() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col mx-auto my-20">
      <div className="text-4xl font-bold pb-6 px-8 pt-6">Курсы</div>
      {courses.map((course, index) => (
        <div key={index} className="">
          <button
            className={`w-full text-left text-white text-4xl p-10 transition-all 
                        bg-gradient-to-r ${course.gradient} hover:brightness-110`}
            onClick={() => toggleCourse(index)}
          >
            {course.title}
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
              openIndex === index
                ? "max-h-50xl opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-gray-100 rounded-b-lg text-gray-800">
              {course.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
