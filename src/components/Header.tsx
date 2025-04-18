import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 bg-white z-40 shadow-md transition-all duration-300 ease-in-out ${
          isScrolled ? "py-1 opacity-90" : "py-4"
        }`}
      >
        <Link to="/" className="flex flex-row items-center">
          <img
            src={logo}
            alt="Legko_top"
            className="w-20 xl:w-28 ml-4 xl:ml-8"
          />
        </Link>
      </header>
    </>
  );
}
