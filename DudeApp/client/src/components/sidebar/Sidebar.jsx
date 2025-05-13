import React from "react";
import "./Sidebar.css";
import Search from "../search/Search";
import ChatList from "../chat-list/ChatList";
function Sidebar() {
  return (
    <div className="sidebar">
      <Search />
      <ChatList />
    </div>
  );
}

export default Sidebar;
