import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCardAction } from "../actionCreators/databaseActions";
import { motion } from "framer-motion";

function Card({ id, amount, expenseName, date }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCardAction(id));
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, type: "tween", delay: 0.2 }}
      id="card"
      className="flex border-b-2 border-purple-400 w-full mb-2 justify-between items-center py-3 px-4 font-Nunito"
    >
      <div className="flex flex-col justify-evenly items-start">
        <h1 className="font-semibold text-lg">{expenseName}</h1>
        <p className="font-semibold text-base text-gray-400">
          {moment(date.toDate()).calendar()}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1
          className={`font-Nunito font-medium text-lg ${
            amount[0] === "-" ? `text-red-500` : `text-green-500`
          }`}
        >
          {`₹${amount}`}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleDelete}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default Card;
