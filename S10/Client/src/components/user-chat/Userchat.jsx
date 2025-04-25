import { useState } from "react";
import "./Userchat.css";
import { createChat } from "../../services/apiCalls/chats";
function Userchat({ image, username, lastMessage, id }) {
  const [startchat, setStartChat] = useState(false);
  const startChat = async () => {
    try {
      var res = await createChat({ id: id });
      if (res.data.ok) {
        setStartChat(true);
      } else {
        throw Error("Failed Chat to Start");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to start chat");
    }
  };
  return (
    <div className="userchat">
      <div className="userimage">
        <img src={image} width={57} height={57} />
      </div>
      <div className="userdetails">
        <h4>{username}</h4>
        <span>{lastMessage}</span>
      </div>
      <div className="startChat">
        {!startchat && <button onClick={startChat}>Start</button>}
      </div>
    </div>
  );
}

export default Userchat;
