import React from "react";
import "./Chatarea.css";
import { useSelector } from "react-redux";
function Chatarea() {
  const { image_url, first_name } = useSelector((store) => {
    return store.chatReducer.selectedChat;
  });
  return (
    <div className="chatarea">
      <div className="chatarea-header">
        <div>
          <img src={image_url} width={43} height={43} />
        </div>
        <div>
          <h3>{first_name}</h3>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="chatarea-body"></div>
      <div className="chatarea-footer">
        <div className="flex">
          <i class="bi bi-plus"></i>
        </div>
        <div className="flexStart">
          <i class="bi bi-file-earmark-image"></i>
        </div>
        <div className="flex">
          <input type="text" placeholder="Type a Message" />
        </div>
        <div className="flex">
          <i class="bi bi-send"></i>
        </div>
      </div>
    </div>
  );
}

export default Chatarea;
