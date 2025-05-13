import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Chatarea from "../../components/chatarea/Chatarea";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Header />

      <div className="bottomRow">
        <Sidebar />
        <Chatarea />
      </div>
    </div>
  );
}

export default Home;
