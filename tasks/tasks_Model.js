const db = require("../database/db-config");

module.exports = {
  getAll,
  getUserTask,
  addTask,
  getTaskById,
  updateTask,
  deleteTask
};
// once user is log in, he/she can create, review, update, and delete data on ther todo list.
function getAll() {
  return db("tasks");
}

function getUserTask(userId) {
    return db('tasks as e')
    .join('users as u', "e.user_id", "=", "u.id")
    .select('e.id', 'e.user_id', 'e.name', 'e.description', 'e.start_Date', 'e.end_date')
    .where('e.user_id', userId)
}

function addTask(data) {
//   return db("Tasks").insert({ ...body });
return db("tasks").insert(data);
}

function getTaskById(id) {
    return db('tasks')
    .where("id", id)
    .first();
}

function updateTask(id, changes) {
  return db("tasks")
    .where({ id })
    .update(changes);
}

function deleteTask(id) {
    return db("tasks")
      .where({ id })
      .delete();
  }