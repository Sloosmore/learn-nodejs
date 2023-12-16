const allowedOrgins = require("../config/allowedOrgins");

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrgins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = credentials;
