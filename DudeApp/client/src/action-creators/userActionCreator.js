import { loggedUserAction, allUsersAction } from "../actions/userAction";
export const userActionCreator = (userdata) => {
  loggedUserAction.payload = userdata;
  return loggedUserAction;
};

export const allUsersActionCreator = (data) => {
  allUsersAction.payload = data;
  return allUsersAction;
};
