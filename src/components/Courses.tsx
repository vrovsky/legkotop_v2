import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: 'Курс для родителей "Коррекция Асимметрий у Детей"',
    content: (
      <div className="space-y-4 px-4 sm:px-10 py-4 text-lg sm:text-xl">
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
        <button>
          <Link
            to="/correction-course"
            // href="https://legkotopcorrection.wayforpay.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full sm:w-2xl text-center bg-[#F9291F] hover:bg-[#F2BB03]  text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Хочу на курс!
          </Link>
        </button>
      </div>
    ),
    gradient: "from-[#F9291F] to-[#F2BB03]",
  },
  {
    title: 'Курс для родителей "Сажать Нельзя Ждать"',
    content: (
      <div className="space-y-4 px-4 sm:px-10 py-4 text-lg sm:text-xl">
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
          <button>
            <Link
              to="/sitting-course"
              // href="https://example.com/payment-link2"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-2xl text-center bg-[#0073d9] hover:bg-blue-400 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Хочу на курс!
            </Link>
          </button>
        </div>
      </div>
    ),
    gradient: "from-[#0073d9] to-blue-400",
  },
  {
    title: 'Курс для родителей "Хендлинг 0 - 3 Месяца"',
    content: (
      <div className="space-y-4 px-4 sm:px-10 py-4 text-lg sm:text-xl">
        <p>
          <strong>Хендлинг</strong> — это искусство телесного диалога с
          ребёнком.
        </p>
        <p>
          Когда ты впервые берёшь на руки новорождённого, весь мир замирает.
          Каждое движение кажется рискованным, а малыш — таким хрупким, будто
          любое неловкое касание может ему навредить.
        </p>
        <p>
          Но тело младенца не хрупкое. Оно живое, активное, готовое к
          сотрудничеству.
        </p>
        <p>
          На курсе <strong>«Хендлинг 0–3 месяца»</strong> ты получишь:
        </p>
        <ul className="space-y-1  ">
          <li>
            ➡️ Простые объяснения, зачем и как беречь спонтанные движения малыша
          </li>
          <li>➡️ Видео, где я показываю хендлинг на реальных детях</li>
          <li>➡️ Инструкции по удержанию, подъёму, переворачиванию, купанию</li>
          <li>➡️ Возможность задать мне вопрос</li>
        </ul>
        <p>
          Это базовое знание, которое хочется, чтобы было у каждого родителя.
        </p>
        <p>С телом ребёнка — в уважении. С собой — в уверенности.</p>

        <div className="pt-4">
          <button>
            <Link
              // href="https://secure.wayforpay.com/payment/se8e29f6d04ee"
              to="/handling-course"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-2xl text-center bg-green-600 hover:bg-lime-400 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Хочу на курс!
            </Link>
          </button>
        </div>
      </div>
    ),
    gradient: "from-green-600 to-lime-400",
  },
  {
    title:
      'Курс для специалистов "Основы Хендлинга и Двигательной Терапии для Детей"',
    content: (
      <div className="space-y-4 px-4 sm:px-10 py-4 text-lg sm:text-xl">
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
          <button>
            <Link
              // href="https://secure.wayforpay.com/payment/sc9a241e72963"
              to="/specialists-course"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-2xl text-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Хочу на курс!
            </Link>
          </button>
        </div>
      </div>
    ),
    gradient: "from-purple-700 to-purple-400",
  },
  {
    title:
      'Курс для специалистов "Основы Хендлинга и Двигательной Терапии для Детей"',
    content: (
      <div className="space-y-4 px-4 sm:px-10 py-4 text-lg sm:text-xl">
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
          <button>
            <Link
              // href="https://secure.wayforpay.com/payment/sc9a241e72963"
              to="/specialists-course"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-2xl text-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Хочу на курс!
            </Link>
          </button>
        </div>
      </div>
    ),
    gradient: "from-pink-700 to-pink-400",
  },
];

export default function Courses() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col mx-auto text-justify">
      <h2 className="text-2xl sm:text-3xl font-bold my-10 px-4 xl:px-40">
        Курсы
      </h2>
      {courses.map((course, index) => (
        <div
          key={index}
          className="transition all duration-300 ease-in-out overflow-x-hidden"
        >
          <button
            className={`w-full text-left text-white text-xl sm:text-2xl py-6 sm:py-10 px-4 xl:px-40 transition-all duration-300 ease-in-out
                        bg-gradient-to-r ${course.gradient} hover:brightness-120`}
            onClick={() => toggleCourse(index)}
          >
            {course.title}
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              openIndex === index ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            <div className=" bg-gray-100 rounded-b-lg text-gray-800 px-4 xl:px-30">
              {course.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
