export default function AboutMe() {
  return (
    <div className="py-4 sm:py-10 px-4 xl:px-40 text-justify text-[#3c62c9]">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">
        Обо мне и моей методике
      </h1>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6">
        Меня зовут <span className="font-semibold">Татьяна Труба</span>. Я
        функциональный терапевт, детский массажист, мама троих дочек и
        основатель пространства <span className="font-semibold">Legko_top</span>
        . С 2009 года я работаю с детьми, изучая самые эффективные подходы к их
        двигательному развитию.
      </p>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6">
        Мой путь начинался с классического массажа, но вскоре стало ясно, что
        стандартные методы не всегда работают. Я изучала{" "}
        <span className="font-semibold">
          Войта-терапию, Бобат-метод, функциональную терапию, остеопатию,
          кинезиологию, метод Фельденкрайза
        </span>
        и создала собственный подход, основанный на активных гравитационных
        упражнениях и естественных движениях.
      </p>

      <div className="bg-gray-100 p-4 ml-5 rounded-lg border-l-4 border-blue-500 mb-4">
        <p className="text-lg sm:text-2xl">
          <span className="font-semibold">С 2011 года</span> я вела частную
          практику, а в 2018 открыла свой детский центр{" "}
          <span className="font-semibold">"Dvizhenie"</span> в Запорожье. Позже
          начала обучать родителей основам хендлинга и консультировать онлайн.
        </p>
      </div>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6">
        Моя главная цель – помочь мамам и специалистам понять, как поддерживать
        естественное развитие ребёнка без лишних страхов, манипуляций и
        чрезмерного вмешательства. Рассказываю об этом на своих курсах,
        индивидуальных консультациях и супервизии.
      </p>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6 italic">
        Я верю, что правильное движение – основа здоровья и гармонии тела.
      </p>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6">
        Веду YouTube-канал, участвую в фестивалях и практикумах для родителей,
        обучаю специалистов в разных странах Европы. Мой метод уже помог{" "}
        <span className="font-semibold">тысячам семей</span> найти лёгкий и
        естественный путь в развитии их детей.
      </p>

      <p className="text-lg sm:text-2xl mb-4 pl-4 sm:pl-6">
        Сейчас я развиваю проект{" "}
        <span className="font-semibold">Legko_top</span> – онлайн-школу для
        родителей и специалистов по всему миру. Моя цель – сделать качественную
        помощь доступной и изменить культуру отношения к двигательному развитию
        малышей.
      </p>

      <p className="text-lg sm:text-2xl font-semibold mb-6 pl-4 sm:pl-6">
        Если вам это тоже откликается, буду рада нашему сотрудничеству!
      </p>

      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-4 py-4 px-6 rounded-lg transition-all text-lg shadow-md">
          Записаться на онлайн консультацию
        </button>
      </div>
    </div>
  );
}
