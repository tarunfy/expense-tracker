const initState = {
  user: {},
  signUpError: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.res.user };
    case "SIGN_UP_ERROR":
      return { ...state, signUpError: action.err.message };
    default:
      return state;
  }
};
