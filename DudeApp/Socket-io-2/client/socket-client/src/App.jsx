import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:5151");
  useEffect(() => {
    socket.emit("first-data", "Hello i am first message");
    socket.on("server-message", (data) => {
      console.log("I am from server" + "  " + data);
    });
  }, []);
  return (
    <div>
      <h2>Socket IO Introduction</h2>
    </div>
  );
}

export default App;
