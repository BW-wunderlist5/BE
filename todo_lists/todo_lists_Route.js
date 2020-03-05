const route = require("express").Router();
const todoDb = require("./todo_lists_Model.js");

route.get("/all", (req, res) => {
  todoDb
    .all()
    .then(todos => {
      if (todos.length > 0) {
        res.status(200).json(todos);
      } else {
        res.status(404).json({ ERROR: "No Todo Lists Found" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  todoDb
    .findById(id)
    .then(ele => {
      if (ele) {
        res.status(200).json(ele);
      } else {
        res.status(404).json({ ERROR: "no todo list found" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

route.get("/users/:id", (req, res) => {
  const id = req.params.id;

  todoDb
    .getAllListsForUser(id)
    .then(ele => {
      if (ele.length > 0) {
        res.status(200).json(ele);
      } else {
        res.status(500).json({ Error: "No todo lists for that Id" });
      }
    })
    .catch(err => console.log(err));
});

route.get("/:id/tasks", (req, res) => {
  const id = req.params.id;

  todoDb
    .getAllTasks(id)
    .then(ele => {
      if (ele.length > 0) {
        res.status(200).json(ele);
      } else {
        res.status(404).json({ ERROR: "No Tasks found for that list id" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

route.post("/add", bodyCheck, (req, res) => {
  const body = req.body;

  todoDb
    .add(body)
    .then(ele => {
      res.status(201).json(body);
    })
    .catch(err => {
      res.status(500).json({ ERROR: "Could not add" });
      console.log(err);
    });
});

route.post("/:id", bodyCheck, (req, res) => {
  const id = req.params.id;
  const body = req.body;
  todoDb
    .update(id, body)
    .then(ele => {
      if (ele === 1) {
        res.status(200).json({ Message: "Change successful" });
      } else {
        res.status(404).json({ ERROR: "No todo with that id found" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

route.delete("/:id", (req, res) => {
  const id = req.params.id;
  todoDb
    .del(id)
    .then(ele => {
      if (ele === 1) {
        res.status(200).json({ Message: "Removed succeeded" });
      } else {
        res.status(500).json({ ERROR: "Could not delete" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = route;

function bodyCheck(req, res, next) {
  const body = req.body;
  if (body.name && body.User_id) {
    next();
  } else {
    res.status(500).json({ ERROR: "A todo list must have a Name and User id" });
  }
}
