import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="brand">
        <i class="bi bi-send-arrow-up-fill">&nbsp;Chat Dude</i>
      </div>
      <div className="options">
        <img
          src="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
          width={40}
          height={40}
        />
        <h3>Rohan</h3>
        <i
          class="bi bi-power"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        ></i>
      </div>
    </div>
  );
}

export default Header;
