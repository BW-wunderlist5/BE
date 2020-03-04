const knex = require("knex");

require('dotenv').config();

const knexConfig = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[dbEnv]);
