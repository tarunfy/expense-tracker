import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../actionCreators/authActions";
import { motion } from "framer-motion";
import wallet2 from "../imgs/wallet2.png";
import wallet from "../imgs/wallet.png";

function SignUp({ history }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAction({ email, password, username }));
    setEmail("");
    setUsername("");
    setPassword("");
  };

  if (user) {
    history.push("/dashboard");
  }

  return (
    <>
      <motion.img
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        initial={{ opacity: 0, x: -100, y: 50, scale: 2 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
        src={wallet}
        alt="safe"
        className="lg:h-52 lg:w-52 h-32 w-32 z-10 top-8/5  absolute lg:top-1/2 lg:right-28 right-5"
      />
      <motion.img
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        initial={{ opacity: 0, x: 100, y: 50, scale: 2 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
        src={wallet2}
        alt="safe"
        className="lg:h-52 lg:w-52 h-32 w-32 z-10  absolute lg:top-1/2 top-8/5 lg:left-28 left-5"
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <div className="container flex flex-col justify-center h-hero  mx-auto items-center">
          <motion.h1
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, type: "tween" }}
            className="font-Roboto font-semibold text-center text-gray-600 z-50 lg:text-7xl text-3xl mb-6"
          >
            Go paperless with an automated online expense tracker
          </motion.h1>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="bg-white z-50 lg:w-96 w-80 pt-10 pb-8 px-10 shadow-2xl rounded-lg"
          >
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      autoComplete="off"
                      id="username"
                      required
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="off"
                      id="email"
                      required
                      className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                    />
                  </div>
                </div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm bg-primary hover:opacity-95 font-Roboto font-medium text-white text-center text-lg rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-indigo-600 hover:shadow-md "
                >
                  Sign up
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 z-0 h-60 w-100"
          viewBox="10 100 2000 200"
        >
          <path
            fill="#5928E5"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,202.7C384,224,480,224,576,202.7C672,181,768,139,864,128C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </>
  );
}

export default SignUp;
