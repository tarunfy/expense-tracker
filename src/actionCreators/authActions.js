import { auth } from "../config/firebaseConfig";

export const signUpAction = (creds) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((res) => {
        res.user.updateProfile({ displayName: creds.username });
      })
      .then(() => {
        dispatch({
          type: "SIGN_UP",
          res: auth.currentUser,
        });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", err });
      });
  };
};

export const logInAction = (creds) => {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then((res) => {
        dispatch({ type: "LOG_IN", res });
      })
      .catch((err) => {
        dispatch({ type: "LOG_IN_ERROR", err });
      });
  };
};

export const logOutAction = () => {
  return { type: "LOG_OUT" };
};
