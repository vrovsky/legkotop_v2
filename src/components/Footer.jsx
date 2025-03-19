import React from "react";
import { FaYoutube, FaTelegram, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-4 bg-[#272119] text-white">
      <h2 className="text-base sm:text-xl py-4 font-semibold">
        Мои Социальные Сети
      </h2>
      <a
        href="https://youtube.com/@tetianatruba"
        target="_blank"
        rel="noopener noreferrer"
        className="pb-4 flex items-center space-x-2 text-base sm:text-xl font-semibold"
      >
        <span>YouTube</span>
        <FaYoutube size={28} />
      </a>
      <a
        href="https://t.me/legko_top_tt"
        target="_blank"
        rel="noopener noreferrer"
        className="pb-4 flex items-center space-x-2 text-base sm:text-xl font-semibold"
      >
        <span>Telegram</span>
        <FaTelegram size={28} />
      </a>
      <a
        href="https://www.instagram.com/legko.top?igsh=ejZ6eWR2ZTdzdW5w"
        target="_blank"
        rel="noopener noreferrer"
        className="pb-4 flex items-center space-x-2  text-base sm:text-xl font-semibold"
      >
        <span>Instagram</span>
        <FaInstagram size={28} />
      </a>
    </div>
  );
}
