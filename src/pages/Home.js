import React from "react";
import hero from "../imgs/hero.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <svg
        className="z-0 top-0 absolute h-blob w-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ type: "inertia", velocity: 120 }}
          fill="#50FBDF"
          d="M45.7,-43.7C55.4,-36.1,56.6,-18.1,58.7,2.1C60.8,22.3,63.8,44.6,54.2,51C44.6,57.4,22.3,48,4.3,43.7C-13.6,39.3,-27.2,40.1,-41.9,33.6C-56.6,27.2,-72.4,13.6,-71.1,1.3C-69.7,-11,-51.3,-21.9,-36.6,-29.5C-21.9,-37.1,-11,-41.2,3.5,-44.7C18.1,-48.3,36.1,-51.2,45.7,-43.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="max-w-screen relative  px-20 flex  justify-center items-center mt-2 z-10">
        <div className="container mx-auto">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: "tween",
            }}
          >
            <h1 className="uppercase font-bold text-9xl mb-2 text-primary">
              XPE<span className="text-secondary">NSE</span>
            </h1>
            <p className="font-semibold text-4xl text-gray-600  ">
              Your personal expense manager designed to help
              <br /> you keep track of your day-to-day expense and income.
            </p>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/signup" className={user ? `hidden` : `get-started-btn`}>
              <div>Get Started</div>
            </Link>
          </motion.div>
        </div>
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: "tween",
          }}
          src={hero}
          alt="hero"
          className="h-hero w-hero"
        />
      </div>
    </>
  );
}

export default Home;
