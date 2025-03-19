const express = require("express");
const port = 7979;
const app = express();

app.get(
  "/working",

  (req, res, next) => {
    console.log("Second Router handler");
    next();
    res.send("second");
  }
);
//http://localhost:7979/working

app.listen(port, () => {
  console.log("NodeJS Web Server Started");
});
