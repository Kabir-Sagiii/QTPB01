const chatReducer = (
  state = { loggedUserChats: [], selectedChat: {} },
  action
) => {
  if (action.type === "logged-user-chats") {
    state = {
      ...state,
      loggedUserChats: action.payload,
    };
  } else if (action.type === "selected-chat") {
    state = {
      ...state,
      selectedChat: action.payload,
    };
  }
  return state;
};

export default chatReducer;
