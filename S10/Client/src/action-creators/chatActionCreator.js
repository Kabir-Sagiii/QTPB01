import { chatAction } from "../actions/chatAction";

export const chatActionCreator = (chatdata) => {
  chatAction.payload = chatdata;
  return chatAction;
};
