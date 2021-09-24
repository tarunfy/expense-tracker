import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
function Dashboard() {
  const user = useSelector((state) => state.user);
  const isFetching = useSelector((state) => state.isFetching);

  if (isFetching) return <h1>Loading...</h1>;
  if (user == null) return <Redirect to="/" />;

  return <div className="text-center text-5xl">Dashboard</div>;
}

export default Dashboard;
