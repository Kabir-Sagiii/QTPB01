import { messageAction } from "../actions/messageAction";
export const messageActionCreator = (messagedata) => {
  messageAction.payload = messagedata;
  return messageAction;
};
