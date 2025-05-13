import { useState } from "react";
import "./Userchat.css";
import { useDispatch } from "react-redux";
import { createChat } from "../../services/apiCalls/chats";
import { useSelector } from "react-redux";
import { getLoggedUserChats } from "../../services/apiCalls/chats";
import {
  loggedUserChatActionCreator,
  selectedChatActionCreator,
} from "../../action-creators/chatActionCreator";
function Userchat({ image, username, email, id, user }) {
  const dispatch = useDispatch();
  const { loggedUserChats } = useSelector((store) => {
    return store.chatReducer;
  });

  const startChat = async () => {
    try {
      var res = await createChat({ id: id });
      // console.log("startchat", res);
      if (res.data.ok) {
        getLoggedUserChats()
          .then((res) => {
            addSelectedChat();
            dispatch(loggedUserChatActionCreator(res.data.result));
          })
          .catch((error) => {
            console.log(error);
            console.log("error while getting all chats of logged user");
          });
      } else {
        throw Error("Failed to Start Chat");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to start chat");
    }
  };

  const addSelectedChat = () => {
    dispatch(selectedChatActionCreator(user));
  };
  return (
    <div
      className="userchat"
      onClick={
        loggedUserChats.find((chat) => chat.members.includes(id)) &&
        addSelectedChat
      }
    >
      <div className="userimage">
        <img src={image} width={57} height={57} />
      </div>
      <div className="userdetails">
        <h4>{username}</h4>
        <span>{email}</span>
      </div>
      <div className="startChat">
        {!loggedUserChats.find((chat) => chat.members.includes(id)) && (
          <button onClick={startChat}>Start</button>
        )}
      </div>
    </div>
  );
}

export default Userchat;
