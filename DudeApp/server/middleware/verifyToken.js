const jwt = require("jsonwebtoken");
const secret_key =
  "djlbvldkfjnvdlkfnvldkfnvldkfnvblkdfnvblkdfnbvlkfdnbvlkdfnbvlkdfnblkdfnbldkfnfdlknldkfnvfdklnvkldfnvklfdnvlkfdnvkdlfvn";

const verifyToken = (req, res, next) => {
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
        // console.log(data);
        req.userdata = data;
        next();
      }
    });
  }
};

module.exports = verifyToken;
