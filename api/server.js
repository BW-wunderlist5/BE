const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require("../middleware/logger");

const usersRouter = require("../users/user-router");
const loginRouter = require("../auth/login-router.js");
const registerRouter = require("../auth/register-router.js");

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(cors());

server.use("/api/login", loginRouter);
server.use("/api/register", registerRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`It's alive 🚀!!`);
});

module.exports = server;
