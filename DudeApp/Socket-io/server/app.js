const express = require("express");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/data", (req, res) => {
  res.send("ok saga");
});

io.on("connection", (socket) => {
  console.log("Socket Connection created", socket.id);
  socket.emit("response", { name: "Sagar" });
  socket.on("message-send", (data) => {
    console.log("Client", data);
    socket.emit("message-received", "Kaisa hai duda");
  });
});

server.listen(5656, () => {
  console.log("server started");
});
