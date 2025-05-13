const express = require("express");
const verifytoken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");
const secret_key =
  "djlbvldkfjnvdlkfnvldkfnvldkfnvblkdfnvblkdfnbvlkfdnbvlkdfnbvlkdfnblkdfnbldkfnfdlknldkfnvfdklnvkldfnvklfdnvlkfdnvkdlfvn";
const route = express.Router();
const createConnection = require("../config/connection");

route.post("/signup", async (req, res) => {
  const newuser = req.body;
  console.log(newuser);
  const collection = await createConnection("users");
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
  var collection = await createConnection("users");
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

route.get("/getLoggedUser", verifytoken, (req, res) => {
  res.send({
    ok: true,
    data: req.userdata,
  });
});
//http://localhost:7979/api/users/getLoggedUser

route.get("/getAllUsers", verifytoken, async (req, res) => {
  try {
    const usersCollections = await createConnection("users");
    const data = await usersCollections
      .find({ _id: { $ne: req.userdata._id } })
      .toArray();

    res.send({
      ok: true,
      result: data,
    });
  } catch (error) {
    res.send({
      ok: false,
      error: error,
    });
  }
});
//http://localhost:7979/api/users/getAllUsers
module.exports = route;
