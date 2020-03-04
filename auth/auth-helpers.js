// Create user token upon login
const jwt = require("jsonwebtoken");

module.exports = {
  getJwt
};

function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret =
    process.env.JWT_SECRET || "Let me tell you a myth about secrets..";

  const options = {
    expiresIn: "12h"
  };

  return jwt.sign(payload, secret, options);
}
