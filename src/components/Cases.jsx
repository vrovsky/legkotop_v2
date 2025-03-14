import React from "react";

export default function Cases() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl font-bold mb-4">Кейсы</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-64 h-64 bg-gray-200">
        <div className="flex items-center justify-center bg-blue-400 text-white text-2xl">
          1
        </div>
        <div className="flex items-center justify-center bg-green-400 text-white text-2xl">
          2
        </div>
        <div className="flex items-center justify-center bg-red-400 text-white text-2xl">
          3
        </div>
        <div className="flex items-center justify-center bg-yellow-400 text-white text-2xl">
          4
        </div>
      </div>
    </div>
  );
}
