import React from "react";

export default function Cases() {
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="text-xl font-bold mb-4">Кейсы</div>
      <div class="grid grid-cols-2 grid-rows-2 gap-2 w-64 h-64 bg-gray-200">
        <div class="flex items-center justify-center bg-blue-400 text-white text-2xl">
          1
        </div>
        <div class="flex items-center justify-center bg-green-400 text-white text-2xl">
          2
        </div>
        <div class="flex items-center justify-center bg-red-400 text-white text-2xl">
          3
        </div>
        <div class="flex items-center justify-center bg-yellow-400 text-white text-2xl">
          4
        </div>
      </div>
    </div>
  );
}
