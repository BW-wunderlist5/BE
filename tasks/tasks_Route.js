const route = require("express").Router();
const taskDb = require("./tasks_Model");

route.get("/", (req, res) => {
  taskDb
    .all()
    .then(tasks => {
      if (tasks.length > 0) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ ERROR: "No tasks found" });
      }
    })
    .catch(err => {
      res.status(500).json({ ERROR: "could not get tasks" });
      console.log(err);
    });
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  taskDb
    .findById(id)
    .then(ele => {
      if (ele.length > 0) {
        res.status(200).json(ele);
      } else res.status(404).json({ ERROR: "No task found with that id" });
    })
    .catch(err => {
      console.log(err);
    });
});

route.post("/add", checkBody, (req, res) => {
  const body = req.body;
  taskDb
    .add(body)
    .then(ele => {
      res.status(200).json({ Message: "Added Successfully" });
    })
    .catch(err => {
      res.status(500).json({ ERROR: "Could not add" });
      console.log(err);
    });
});

route.post("/:id", checkBody, (req, res) => {
  const id = req.params.id;
  const body = req.body;

  taskDb
    .update(id, body)
    .then(ele => {
      res.status(200).json(body);
    })
    .catch(err => {
      res.status(500).json({ ERROR: "Could not update" });
      console.log(err);
    });
});

route.delete("/:id", (req, res) => {
  const id = req.params.id;
  taskDb
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

function checkBody(req, res, next) {
  const { name, todo_list_Id } = req.body;
  if (name && todo_list_Id) {
    next();
  } else {
    res.status(500).json({ ERROR: "You need a name and todo list id" });
  }
}