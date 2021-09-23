import React from "react";
import hero from "../imgs/hero.svg";
function Home() {
  return (
    <>
      <div className="max-w-screen px-20 flex  justify-center items-center mt-2">
        <div className="container mx-auto">
          <h1 className="uppercase font-bold text-9xl mb-2">
            XPE<span className="text-primary">NSE</span>
          </h1>
          <p className="font-semibold text-4xl">
            Your personal expense manager designed to help
            <br /> you keep track of your day-to-day expense and income.
          </p>
          <div className="get-started-btn">Get Started</div>
        </div>
        <img src={hero} alt="hero" className="h-hero w-hero" />
      </div>
    </>
  );
}

export default Home;
