const initState = {
  user: {},
  signUpError: null,
  logInError: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.res.user, signUpError: null };
    case "SIGN_UP_ERROR":
      return { ...state, signUpError: action.err.message };
    case "LOG_IN":
      return { ...state, logInError: null, user: action.res.user };
    case "LOG_IN_ERROR":
      return { ...state, logInError: action.err.message };
    default:
      return state;
  }
};
