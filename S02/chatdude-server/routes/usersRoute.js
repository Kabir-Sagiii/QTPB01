const express = require("express");
const route = express.Router();
const createConnection = require("../config/connection");
route.post("/signup", async (req, res) => {
  const newuser = req.body;
  console.log(newuser);
  const collection = await createConnection();
  collection
    .insertOne(newuser)
    .then(() => {
      res.send({ ok: true, results: "User Created" });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        results: "Failed to create user",
      });
    });
}); //http://localhost:7979/users/signup

module.exports = route;
