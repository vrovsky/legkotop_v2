import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Когда прокрутка больше 50px, уменьшаем хэдер
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 bg-white z-10 shadow-md transition-all duration-300 ease-in-out ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <Link to="/" className="flex flex-row items-center">
          <img src={logo} alt="Legko_top" className="w-24 ml-8 p-2" />
          <div className="text-3xl font-bold ">Legko_Top</div>
        </Link>
      </header>
    </>
  );
}
