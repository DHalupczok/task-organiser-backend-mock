require("dotenv").config();
const { TOKEN_SECRET } = process.env;
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const validToken = jwt.verify(token, TOKEN_SECRET);
    if (validToken) {
      req.userId = validToken.id;
      req.userEmail = validToken.email;
      req.userName = validToken.userName;
      req.userSurneame = validToken.surname;
      next();
    }
  } catch (e) {
    if (e.name === "JsonWebTokenError" || e.name === "TokenExpiredError") {
      res.status(401).send(e.message);
      return;
    }
    res.status(500).send(e);
  }
};
