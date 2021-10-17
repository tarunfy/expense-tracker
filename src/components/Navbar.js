import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../config/firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { logOutAction } from "../actionCreators/authActions";
import { motion } from "framer-motion";

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutAction());
    history.push("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    });
  }, [dispatch]);
  return (
    <>
      <motion.nav
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="py-5 lg:px-10 px-3 flex justify-between items-center z-10"
      >
        <Link
          to="/"
          className=" uppercase font-extrabold lg:text-4xl text-3xl tracking-widest font-Montserrat"
        >
          XPENSE
        </Link>
        {user && (
          <div className="flex items-center">
            {location.pathname === "/" && (
              <Link to="/dashboard" className="nav-btn mr-3">
                Dashboard
              </Link>
            )}
            <div onClick={handleLogout} className="nav-btn cursor-pointer">
              Logout
            </div>
          </div>
        )}
        {!user && (
          <Link
            to={location.pathname.includes("login") ? "/signup" : "/login"}
            className="nav-btn"
          >
            {location.pathname.includes("login") ? "Signup" : "Login"}
          </Link>
        )}
      </motion.nav>
    </>
  );
}

export default Navbar;
