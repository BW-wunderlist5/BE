const db = require("../database/db-config");

module.exports = {
  add,
  del,
  update,
  findById,
  findBy,
  all,
  getAllTasks,
  getAllListsForUser
};

function all() {
  return db("Todo_List");
}

function add(body) {
  return db("Todo_List").insert({ ...body });
}

function update(id, body) {
  return db("Todo_List")
    .where({ id })
    .update(body);
}

function del(id) {
  return db("Todo_List")
    .where({ id })
    .del();
}

function findById(id) {
  return db("Todo_List")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("Todo_List").where({ filter });
}

function getAllListsForUser(id) {
  return db("Todo_List").where("User_id", id);
}

function getAllTasks(id) {
  return db("Tasks").where("todo_list_Id", id);
}
