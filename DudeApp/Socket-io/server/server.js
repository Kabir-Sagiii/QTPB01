// var express = require("express");
// var cors = require("cors");
// var app = express();

// app.use(cors());
// app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   next();
// });

// const server = require("http").createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("connected socket", socket.id);
//   socket.on("data", (clientdata) => {
//     console.log(clientdata);
//     socket.emit("response", clientdata);
//   });
// });

// app.get("/get", (req, res) => {
//   console.log("req received");
//   res.send("working");
// });

// server.listen(5656, () => {
//   console.log("Server started");
// });
// var express = require("express");
// var http = require("http");
// var socketio = require("socket.io");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// const server = http.createServer(app);

// app.get("/data", (req, res) => {
//   console.log("working");
//   res.send("okoo");
// });

// const io = socketio(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Socket", socket.id);
//   socket.emit("response", "hello ji sagar");
// });

// server.listen(5656, () => {
//   console.log("server started");
// });
