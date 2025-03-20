const TariffCard = ({ title, price, features }) => (
  <div className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-white">
    <img className="w-20 h-20 mb-4" src="/placeholder.jpg" alt={title} />
    <h2 className="text-2xl font-bold border-b-4 border-red-400 pb-2 mb-4">
      {title}
    </h2>
    <ul className="space-y-2 text-center text-gray-700">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="mt-6 text-lg bg-red-400 px-6 py-2 hover:bg-red-500 text-white font-bold rounded-lg transition duration-300">
      {price} EUR
    </button>
  </div>
);
