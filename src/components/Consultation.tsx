import { Link } from "react-router-dom";
import tatyanaPhoto from "../assets/tatyana.png";

export default function Consultation() {
  return (
    <div className=" text-justify flex flex-col lg:flex-row items-center bg-white p-4 sm:p-12 lg:px-16">
      <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
        <img
          src={tatyanaPhoto}
          alt="Татьяна Труба"
          className="w-64 lg:w-80 object-contain"
        />
      </div>

      <div className="w-full lg:w-2/3 pr-4 xl:pr-30 space-y-6 text-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold">
          Индивидуальная консультация с Татьяной Трубой
        </h2>

        <p className="text-lg sm:text-xl font-semibold">
          Ваш малыш уникален, и его развитие можно поддержать соответствующим
          образом!
        </p>

        <p className="text-lg sm:text-xl">
          Если вы привыкли доверять профессионалам и не хотите самостоятельно
          разбираться в тонкостях двигательного развития и функциональной
          анатомии на наших курсах, я приглашаю вас на{" "}
          <strong>
            индивидуальную онлайн-консультацию с сопровождением 2 недели
          </strong>
          .
        </p>

        <div className="bg-orange-100 p-5 rounded-lg border-l-4 border-orange-500">
          <p className="font-semibold text-lg sm:text-xl">
            💡 Как это работает?
          </p>
          <ul className="pl-5 space-y-2 text-lg">
            <li>
              🔸Разбираем, как двигается ваш малыш, и определяем, что ему
              действительно нужно.
            </li>
            <li>
              🔸Подбираем активные гравитационные упражнения, которые помогают
              телу раскрыть свой потенциал.
            </li>
            <li>
              🔸Отрабатываем базовые приемы хендлинга, игровые методики и
              массаж.
            </li>
          </ul>
        </div>

        <p className="text-xl">
          <strong>Консультация состоит из 2 частей:</strong> онлайн-занятие +
          сопровождение.
        </p>
        <ul className=" pl-5 space-y-2 text-base sm:text-xl">
          <li>
            🔸Онлайн-встреча длится около <strong>1 часа</strong> (Zoom, запись
            предоставляется).
          </li>
          <li>
            🔸В течение <strong>2 недель</strong> вы присылаете видео занятий, а
            я корректирую и дополняю упражнения.
          </li>
        </ul>

        <p className="text-base sm:text-xl font-bold">Стоимость: 100 евро</p>

        <Link
          to="/consultation"
          className="text-lg bg-orange-500
           hover:bg-orange-600 text-white
            font-bold py-4 px-8 rounded-lg shadow-md transition-all"
        >
          Хочу на консультацию
        </Link>
      </div>
    </div>
  );
}
