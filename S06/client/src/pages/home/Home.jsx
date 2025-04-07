import { useEffect } from "react";
import "./Home.css"; // Import the updated CSS
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // var token = localStorage.getItem("token");

    axios
      .get("url", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        //add the code in state and display the data in table format
      })
      .catch(() => {
        //show the error notification
      });
  }, []);

  return (
    <div className="home-container">
      <button
        onClick={() => {
          navigate("/");
          localStorage.removeItem("token");
        }}
        style={{ padding: "7px 20px", color: "red", border: "3px solid red" }}
      >
        Logout
      </button>
      <br />
    </div>
  );
};

export default Home;
