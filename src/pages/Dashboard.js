import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  storeDataAction,
  getDataAction,
} from "../actionCreators/databaseActions";
import Card from "../components/Card";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const dispatch = useDispatch();
  const docs = useSelector((state) => state.database.docs);

  useEffect(() => {
    if (user) {
      dispatch(getDataAction(user.uid));
    } else {
      console.log("rip");
    }
  }, [user]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  if (isFetching) return <h1>Loading...</h1>;
  if (user == null) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(storeDataAction({ userId: user.uid, name, amount }));
    setName("");
    setAmount("");
  };

  return (
    <div
      id="dashboard"
      className="container xl:mb-5 2xl:my-8 px-6 max-h-full  max-w-full  grid grid-cols-3"
    >
      <div
        id="left"
        className="container flex w-full flex-col justify-between items-center"
      >
        <div
          id="info"
          className="container bg-white p-10 w-3/4 border rounded-md shadow-md mb-8 font-Nunito flex flex-col"
        >
          <div
            id="top-info"
            className="flex justify-between  max-w-full items-center mb-10 "
          >
            <div className="flex flex-col justify-center items-center ">
              <h1 className="font-semibold text-2xl uppercase">Income</h1>
              <p className="text-green-500 font-medium">₹1000</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h1 className="font-semibold text-2xl uppercase">Expense</h1>
              <p className="text-red-500 font-medium">₹2000</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              10000 <sup className="text-gray-400">INR</sup>{" "}
            </h2>
            <p className="text-gray-400">Total Balance</p>
          </div>
        </div>
        <div
          id="add-transaction"
          className="w-3/4 bg-white p-8 rounded-md border-0 shadow-md"
        >
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <h1 className="font-Nunito font-semibold text-xl mb-3">
                New Transaction
              </h1>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    autoComplete="off"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1"
                  />
                </div>
              </div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <div className="mt-1">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  id="amount"
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="right"
        className="col-span-2 container bg-white flex flex-col justify-start py-10  px-10 shadow-md  items-stretch w-full"
      >
        <div>
          <h1 className="font-Roboto font-bold text-3xl mb-2">History</h1>
          {docs &&
            docs.map((doc) => {
              return (
                <Card
                  key={doc.id}
                  id={doc.id}
                  expenseName={doc.expenseName}
                  amount={doc.amount}
                  date={doc.date}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
