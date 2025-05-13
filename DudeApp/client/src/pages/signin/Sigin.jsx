import React, { useState } from "react";
import "./Signin.css"; // Importing the CSS file
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7979/api/users/signin", { email, password })
      .then((resp) => {
        if (resp.data.ok) {
          localStorage.setItem("token", resp.data.result);
          navigate("/home");
        } else {
          toast("User does not exist", {
            style: {
              color: "white",
              backgroundColor: "red",
              fontWeight: "bold",
              fontStyle: "cursive",
            },
          });
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
        <div style={{ textAlign: "center" }}>
          <span style={{ color: "black" }}> Don't have an account?</span>{" "}
          <Link style={{ textDecoration: "none", color: "green" }} to="/signup">
            Signup
          </Link>
        </div>
        {/* <button
          style={{ padding: "7px 20px" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create New User
        </button> */}
      </div>
    </div>
  );
};

export default Signin;
