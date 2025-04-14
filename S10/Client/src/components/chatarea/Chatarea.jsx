import React from "react";
import "./Chatarea.css";
function Chatarea() {
  return (
    <div className="chatarea">
      <div className="chatarea-header">
        <div>
          <img
            src={
              "https://th.bing.com/th/id/OIP.2E08EBjs__izA_1vBw5PggHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
            }
            width={43}
            height={43}
          />
        </div>
        <div>
          <h3>Rohan Verma</h3>
        </div>
        <div>
          {/* <div className="icons">
            <i class="bi bi-camera-video"></i>
            <i class="bi bi-search"></i>
            <i class="bi bi-search"></i>
          </div> */}
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
