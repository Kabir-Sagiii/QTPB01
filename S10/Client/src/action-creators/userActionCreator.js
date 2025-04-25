import { userAction } from "../actions/userAction";
export const userActionCreator = (userdata) => {
  userAction.payload = userdata;
  return userAction;
};
