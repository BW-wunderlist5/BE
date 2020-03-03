const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const logger = require('../middleware/logger');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.get("/", (req, res) => {
  res.send(`It's alive 🚀!!`);
});

module.exports = server;
