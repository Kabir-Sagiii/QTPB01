const express = require("express");
const port = 7979;
const app = express();
const UsersRoute = require("./routes/usersRoute");

app.use(express.json());
app.use("/users", UsersRoute);

app.listen(port, () => {
  console.log("NodeJS Web Server Started");
});
