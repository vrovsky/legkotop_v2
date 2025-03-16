import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50 shadow-md border-b-8 border-gray-200">
        <Link to="/" className="flex flex-row items-center">
          <img src={logo} alt="Legko_top" className="w-24 ml-8 p-2" />
          <div className="text-3xl font-bold ">Legko_Top</div>
        </Link>
      </header>
    </>
  );
}
