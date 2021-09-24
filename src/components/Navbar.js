import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../config/firebaseConfig";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("Current user: ", user);
      dispatch({
        type: "SET_USER",
        payload: user,
      });
    });
  }, []);

  return (
    <>
      <nav className="py-5 px-10 flex justify-between items-center z-10">
        <Link
          to="/"
          className=" uppercase font-extrabold text-3xl tracking-widest"
        >
          XPENSE
        </Link>
        {user && (
          <div
            onClick={handleLogout}
            className="font-semibold cursor-pointer text-lg"
          >
            Logout
          </div>
        )}
        {!user && (
          <Link
            to={location.pathname.includes("login") ? "/signup" : "/login"}
            className="font-semibold text-lg"
          >
            {location.pathname.includes("login") ? "Sign Up" : "Login"}
          </Link>
        )}
      </nav>
    </>
  );
}

export default Navbar;
