import React from "react";

function Card() {
  return (
    <div
      id="card"
      className="flex border-b-2 border-gray-100 w-full mb-2 justify-between items-center py-3 px-4 font-Nunito"
    >
      <div className="flex flex-col justify-evenly items-start">
        <h1 className="font-semibold text-lg">Motherboard Purchase</h1>
        <p className="font-semibold text-base text-gray-400">21, sep 4:00pm</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-Nunito font-medium text-lg text-green-500">
          ₹3000
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
