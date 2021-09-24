import React from "react";
import hero from "../imgs/hero.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <svg
        className="z-0 top-0 absolute h-blob w-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#50FBDF"
          d="M45.7,-43.7C55.4,-36.1,56.6,-18.1,58.7,2.1C60.8,22.3,63.8,44.6,54.2,51C44.6,57.4,22.3,48,4.3,43.7C-13.6,39.3,-27.2,40.1,-41.9,33.6C-56.6,27.2,-72.4,13.6,-71.1,1.3C-69.7,-11,-51.3,-21.9,-36.6,-29.5C-21.9,-37.1,-11,-41.2,3.5,-44.7C18.1,-48.3,36.1,-51.2,45.7,-43.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="max-w-screen relative  px-20 flex  justify-center items-center mt-2 z-10">
        <div className="container mx-auto">
          <h1 className="uppercase font-bold text-9xl mb-2 text-tertiary">
            XPE<span className="text-primary">NSE</span>
          </h1>
          <p className="font-semibold text-4xl text-gray-900  ">
            Your personal expense manager designed to help
            <br /> you keep track of your day-to-day expense and income.
          </p>
          <Link to="/signin">
            <div className="get-started-btn">Get Started</div>
          </Link>
        </div>
        <img src={hero} alt="hero" className="h-hero w-hero" />
      </div>
    </>
  );
}

export default Home;
