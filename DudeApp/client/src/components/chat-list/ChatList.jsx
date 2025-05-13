import React from "react";
import "./ChatList.css";
import Userchat from "../user-chat/Userchat";
import { useSelector } from "react-redux";
function ChatList() {
  const allusers = useSelector((store) => {
    return store.userReducer.allUsers;
  });
  return (
    <div className="chatlist">
      {allusers.length > 0 &&
        allusers.map((user) => {
          return (
            <Userchat
              id={user._id}
              image={user.image_url}
              username={user.first_name + " " + user.last_name}
              email={user.email}
              user={user}
            />
          );
        })}
    </div>
  );
}

export default ChatList;
