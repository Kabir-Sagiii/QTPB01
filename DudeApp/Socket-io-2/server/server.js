var express = require("express");
var socketio = require("socket.io");
var http = require("http");

var app = express();

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket is connected", socket.id);

  socket.on("first-data", (data) => {
    console.log("data is recived", data);
    socket.emit("server-message", data);

    //  io.to(idOfUser1).to(idOfUser2).emit("server-message",data)
  });
});

server.listen(5151, () => {
  console.log("Server started");
});

//http://localhost:5151
