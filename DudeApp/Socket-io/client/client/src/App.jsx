import "./App.css";
import { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  const socket = io("http://localhost:5656");
  useEffect(() => {
    socket.emit("data", "hello");
    socket.on("response", (d) => {
      console.log(d);
    });
  }, []);

  const getdata = () => {
    fetch("http://localhost:5656/data")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log("fetch", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    socket.emit("message-send", "hi");
    socket.on("message-received", (data) => {
      console.log("dataaa", data);
    });
  };
  return (
    <div>
      <h2>App</h2>
      <button onClick={getdata}>Get</button>
    </div>
  );
}

export default App;
