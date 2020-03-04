const db = require("../database/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function update(id, user) {
  return db("users")
    .where("id", Number(id))
    .update(user);
}

function remove(id) {
  return db("users")
    .where("id", Number(id))
    .del();
}
