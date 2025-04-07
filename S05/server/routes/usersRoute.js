const express = require("express");
const jwt = require("jsonwebtoken");
const secret_key =
  "djlbvldkfjnvdlkfnvldkfnvldkfnvblkdfnvblkdfnbvlkfdnbvlkdfnbvlkdfnblkdfnbldkfnfdlknldkfnvfdklnvkldfnvklfdnvlkfdnvkdlfvn";
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
}); //http://localhost:7979/api/users/signup

route.post("/signin", async (req, res) => {
  const user = req.body;
  var collection = await createConnection();
  collection
    .findOne(user)
    .then((data) => {
      const token = jwt.sign(data, secret_key);
      res.send({
        ok: true,
        message: "User Exist",
        result: token,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        message: "User Does not Exist",
        result: null,
      });
    });
});
//http://localhost:7979/api/users/signin

module.exports = route;
