const jwt = require("jsonwebtoken");

const auth = async function (req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) {
      res.status(404).send({ status: false, msg: "token must be present" });
    } else {
      let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
      if (!decodedToken) {
        res.status(400).send({ status: false, msg: "token is invalid" });
      } else {
        next()

      }
    }

}


module.exports.auth = auth