import React from "react";
import bank from "../imgs/bank.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="max-w-screen relative  lg:px-20  flex  justify-center lg:flex-row flex-col items-center lg:mt-2 mt-20 ">
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
            <p className="font-semibold font-Roboto lg:text-4xl text-gray-600 text-3xl ">
              Your personal expense manager designed to help
              <br /> you keep track of your day-to-day expense and income.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center lg:block"
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
            duration: 0.8,
            type: "tween",
          }}
          src={bank}
          alt="hero"
          className="lg:h-hero lg:relative absolute h-96 w-96 top-full lg:w-hero lg:z-30 z-0"
        />
      </div>
    </>
  );
}

export default Home;
