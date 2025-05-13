import { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
  });

  const getNewUser = () => {
    //Vaidate the data : Validation : Regex

    axios
      .post("http://localhost:7979/api/users/signup", user, {
        headers: {
          Authorization: ``,
        },
      })
      .then((res) => {
        if (res.data.ok) {
          toast("Account Created successfully", {
            style: {
              color: "white",
              backgroundColor: "green",
              fontWeight: "bold",
              fontStyle: "cursive",
            },
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);
          //Navigate user to Login Page
        }
        console.log(res);
        setUser({
          fname: "",
          lname: "",
          gender: "",
          email: "",
          password: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="main-signup-container">
      <div className="signup-container">
        <h2>Signup Page</h2>
        <form>
          <div>
            <input
              onChange={(event) => {
                setUser({ ...user, fname: event.target.value });
              }}
              type="text"
              value={user.fname}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              onChange={(event) => {
                setUser({ ...user, lname: event.target.value });
              }}
              type="text"
              value={user.lname}
              placeholder="Last Name"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"male"}
              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"female"}
              />
              <label>female</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(event) => {
                  setUser({ ...user, gender: event.target.value });
                }}
                name="gender"
                value={"other"}
              />
              <label>other</label>
            </div>
          </div>
          <div>
            <input
              type="email"
              onChange={(event) => {
                setUser({ ...user, email: event.target.value });
              }}
              placeholder="Email Id"
              value={user.email}
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }}
              placeholder="Password"
              value={user.password}
            />
          </div>
          <div>
            <input
              type="text"
              onChange={(event) => {
                setUser({ ...user, phone: event.target.value });
              }}
              placeholder="Mobile Number"
              value={user.phone}
            />
          </div>
          <div>
            <input type="button" value="signup" onClick={getNewUser} />
          </div>
        </form>
        <div style={{ textAlign: "center", color: "black" }}>
          <span style={{ color: "black" }}>Have an account? </span>
          <Link style={{ textDecoration: "none", color: "green" }} to="/">
            Sign In
          </Link>
        </div>
      </div>

      {error ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red", fontSize: "28px" }}>
            Failed to Create Account
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default SignUp;
