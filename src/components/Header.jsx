import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex">
        <Link to="/" className="text-2xl font-bold ml-10 p-4">
          Legko_Top
        </Link>
      </div>
    </>
  );
}
