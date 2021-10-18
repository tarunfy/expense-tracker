import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  storeDataAction,
  getDataAction,
} from "../actionCreators/databaseActions";
import Card from "../components/Card";
import { motion } from "framer-motion";
import bars from "../imgs/bars.svg";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const dispatch = useDispatch();
  const docs = useSelector((state) => state.database.docs);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (user) {
      dispatch(getDataAction(user.uid));
    } else {
      console.log("rip");
    }
  }, [user]);

  useEffect(() => {
    setExpense(0);
    setIncome(0);
    if (docs) {
      const amounts = docs.map((doc) => parseInt(doc.amount));
      setTotal(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));
      setIncome(
        amounts.filter((item) => item > 0).reduce((acc, item) => acc + item, 0)
      );
      setExpense(
        amounts
          .filter((item) => item < 0)
          .reduce((acc, item) => acc + item, 0) * -(1).toFixed(2)
      );
    }
  }, [docs]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  if (isFetching)
    return (
      <img
        className="h-20 w-20 absolute top-1/2 left-1/2"
        src={bars}
        alt="loader"
      />
    );
  if (user == null) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(storeDataAction({ userId: user.uid, name, amount }));
    setName("");
    setAmount("");
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id="dashboard"
      className="container lg:px-6   max-w-full grid lg:grid-cols-3  overflow-y-auto lg:overflow-hidden"
    >
      <div
        id="left"
        className="container flex lg:py-5 mx-auto w-full flex-col justify-between items-center"
      >
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          id="info"
          className="container bg-white p-10 lg:w-3/4 w-full border rounded-md shadow-md mb-8 font-Nunito flex flex-col"
        >
          <div
            id="top-info"
            className="flex justify-between  max-w-full items-center mb-10 "
          >
            <div className="flex flex-col justify-center items-center ">
              <h1 className="font-semibold text-2xl uppercase">Income</h1>
              <p className="text-green-500 font-medium">{`₹${income}`}</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <h1 className="font-semibold text-2xl uppercase">Expense</h1>
              <p className="text-red-500 font-medium">{`₹${expense}`}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">
              {total} <sup className="text-gray-400">INR</sup>{" "}
            </h2>
            <p className="text-gray-400">Total Balance</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7, type: "tween" }}
          id="add-transaction"
          className="lg:w-3/4 w-full lg:mb-0 mb-8 bg-white p-8 rounded-md border-0 shadow-md"
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
                Amount (use "<span className="font-bold text-black">-</span>"
                for expenses)
              </label>
              <div className="mt-1">
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="text"
                  id="amount"
                  autoComplete="off"
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
        </motion.div>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7, type: "tween" }}
        id="right"
        className="lg:col-span-2 container bg-white flex flex-col justify-start lg:py-5 lg:px-10 px-3 py-5  shadow-md mx-auto items-stretch w-full rounded-md"
      >
        <div>
          <h1 className="font-Nunito font-bold text-3xl mb-2">History 👀</h1>
          {docs &&
            docs.map((doc) => {
              return (
                <Card
                  key={doc.id}
                  id={doc.id}
                  expenseName={doc.expenseName}
                  amount={doc.amount}
                  date={doc.date}
                  setExpense={setExpense}
                  setIncome={setIncome}
                />
              );
            })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
