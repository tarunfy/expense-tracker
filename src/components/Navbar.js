import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center z-10">
        <Link
          to="/"
          className=" uppercase font-extrabold text-3xl tracking-widest"
        >
          XPENSE
        </Link>
        <Link to="/login" className="font-semibold text-lg">
          Login
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
