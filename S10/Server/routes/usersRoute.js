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

// route.get("/getusers", async (req, res) => {
//   //1.Validate the token
//   //a. Token is Present or not
//   //b.verify the token

//   //12.Connect with database, access all the users information
//   const coll = await createConnection();
//   var resp = await coll.find().toArray();
//   if (!resp) {
//     res.send({
//       ok: false,
//       result: "Failed to get User",
//     });
//   } else {
//     res.send({
//       ok: true,
//       result: resp,
//     });
//   }
// });
//http://localhost:7979/api/users/getusers

route.get("/getLoggedUser", (req, res) => {
  //id,token
  console.log(req.headers);
  if (req.headers["authorization"] === undefined) {
    res.send({
      ok: false,
      error: "Token is missing",
    });
  } else {
    var token = req.headers.authorization.slice(7);
    jwt.verify(token, secret_key, (error, data) => {
      if (error) {
        res.send({
          ok: false,
          error: "Token is invalid",
        });
      } else {
        res.send({
          ok: true,
          data: data,
        });
      }
    });
  }
});
//http://localhost:7979/api/users/getLoggedUser
module.exports = route;
