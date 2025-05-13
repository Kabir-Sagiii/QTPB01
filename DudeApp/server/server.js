const express = require("express");
const cors = require("cors");
const port = 7979;
const app = express();
const UsersRoute = require("./routes/usersRoute");
const ChatsRoute = require("./routes/chatsRoute");
const MessageRoute = require("./routes/messageRoute");

app.use(cors());
app.use(express.json());
app.use("/api/users", UsersRoute);
app.use("/api/chats", ChatsRoute);
app.use("/api/message", MessageRoute);

app.listen(port, () => {
  console.log("NodeJS Web Server Started");
});
