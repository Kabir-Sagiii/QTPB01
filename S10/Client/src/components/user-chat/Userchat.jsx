import React from "react";
import "./Userchat.css";
function Userchat({ image, username, lastMessage }) {
  return (
    <div className="userchat">
      <div className="userimage">
        <img src={image} width={57} height={57} />
      </div>
      <div className="userdetails">
        <h4>{username}</h4>
        <span>{lastMessage}</span>
      </div>
    </div>
  );
}

export default Userchat;
