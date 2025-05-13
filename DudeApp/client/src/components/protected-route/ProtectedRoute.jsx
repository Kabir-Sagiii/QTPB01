import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser, getAllUsers } from "../../services/apiCalls/user";
import { getLoggedUserChats } from "../../services/apiCalls/chats";
import { useDispatch } from "react-redux";
import {
  userActionCreator,
  allUsersActionCreator,
} from "../../action-creators/userActionCreator";

import { loggedUserChatActionCreator } from "../../action-creators/chatActionCreator";
function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      //action
      getLoggedUser()
        .then((res) => {
          dispatch(userActionCreator(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      getAllUsers()
        .then((res) => {
          dispatch(allUsersActionCreator(res.data.result));
        })
        .catch((error) => {
          console.log("Error while fetching all users");
          console.log(error);
        });

      getLoggedUserChats()
        .then((res) => {
          dispatch(loggedUserChatActionCreator(res.data.result));
        })
        .catch((error) => {
          console.log(error);
          console.log("error while getting all chats of logged user");
        });
    } else {
      navigate("/");
    }
  }, []);
  return <div>{children}</div>;
}

export default ProtectedRoute;
