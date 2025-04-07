import React, { useState } from "react";
import "./Signin.css"; // Importing the CSS file
import axios from "Axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login validation (can replace with API calls)
    axios
      .post("http://localhost:7979/api/users/signin", { email, password })
      .then((resp) => {
        if (resp.data.ok) {
          //Navigate to Home Page

          navigate("/home");
        } else {
          alert("invalid");
          // Show Error Notification
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <br />
        <button
          style={{ padding: "7px 20px" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create New User
        </button>
      </div>
    </div>
  );
};

export default Signin;
