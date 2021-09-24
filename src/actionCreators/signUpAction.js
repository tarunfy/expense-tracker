import { auth } from "../config/firebaseConfig";

export const signUpAction = (creds) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((res) => {
        dispatch({ type: "SIGN_UP", res });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", err });
      });
  };
};
