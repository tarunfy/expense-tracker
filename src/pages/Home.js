import React from "react";
import bank from "../imgs/bank.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="max-w-screen relative  lg:px-20  flex  justify-center lg:flex-row flex-col items-center  lg:mt-1 mt-12 ">
        <div className="container lg:block flex justify-center align-middle flex-col z-50 lg:mx-auto w-full lg:text-left text-center">
          <motion.div
            className="w-full"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              type: "tween",
            }}
          >
            <h1 className="uppercase font-bold lg:text-9xl text-8xl mb-2 text-primary">
              XPENSE
            </h1>
            <p className="font-normal font-Roboto lg:text-4xl text-gray-500 text-3xl  ">
              Your personal expense manager designed to help you keep track of
              your day-to-day expense and income
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center lg:block"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/signup"
              className={user ? `hidden` : `get-started-btn z-50`}
            >
              <div>Get Started</div>
            </Link>
          </motion.div>
        </div>
        <motion.img
          animate={{ opacity: 1, y: 0 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "tween",
          }}
          src={bank}
          alt="hero"
          className="lg:h-hero lg:relative z-40 h-96 w-96 top-full lg:w-hero"
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 z-0 h-60 w-100"
        viewBox="100 80 2000 200"
      >
        <path
          fill="#5928E5"
          fill-opacity="1"
          d="M0,0L40,37.3C80,75,160,149,240,192C320,235,400,245,480,213.3C560,181,640,107,720,112C800,117,880,203,960,234.7C1040,267,1120,245,1200,213.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default Home;
