import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="py-5 px-10 flex justify-evenly items-center">
        <div className="container cursor-pointer uppercase font-extrabold text-3xl tracking-widest">
          XPENSE
        </div>
        <div className=" font-semibold text-lg cursor-pointer">Login</div>
      </nav>
    </>
  );
}

export default Navbar;
