const jwt = require("jsonwebtoken");

module.exports = {
  getJwt
};

function getJwt(username) {
  const payload = {
    username
  };

  const secret =
    process.env.JWT_SECRET || "Let me tell you a myth about secrets..";

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}
