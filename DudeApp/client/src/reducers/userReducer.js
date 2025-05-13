const userReducer = (state = { loggedUser: null, allUsers: [] }, action) => {
  if (action.type === "logged-user") {
    state = {
      ...state,
      loggedUser: action.payload,
    };
  } else if (action.type === "all-users") {
    state = {
      ...state,
      allUsers: action.payload,
    };
  }
  return state;
};

export default userReducer;
