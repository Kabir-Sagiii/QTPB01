import {
  loggedUserChatAction,
  selectedChatAction,
} from "../actions/chatAction";

export const loggedUserChatActionCreator = (chatdata) => {
  loggedUserChatAction.payload = chatdata;
  return loggedUserChatAction;
};

export const selectedChatActionCreator = (selectedUser) => {
  selectedChatAction.payload = selectedUser;
  return selectedChatAction;
};
