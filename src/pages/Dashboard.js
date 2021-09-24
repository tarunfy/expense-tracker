import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const state = useSelector((state) => state);
  console.log(state);
  return <div className="text-center text-5xl">Dashboard</div>;
}

export default Dashboard;
