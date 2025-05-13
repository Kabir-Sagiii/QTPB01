import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => {
    return store.userReducer.loggedUser?.data;
  });
  return (
    <div className="header">
      <div className="brand">
        <i class="bi bi-send-arrow-up-fill">&nbsp;Chat Dude</i>
      </div>
      <div className="options">
        <img src={user && user.image_url} width={40} height={40} />
        <h3>{user && user.first_name}</h3>
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
