const route = require("express").Router();

const taskDb = require("./tasks_Model");

const restricted = require("../auth/restriction.js")
//create a new task
route.get("/", restricted, (req, res) => {
  taskDb
    .getAll()
    .then(tasks => {
        console.log(tasks);
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

route.get("/:id", restricted, (req, res) => {
  const id = req.params.id;
  taskDb
    .getUserTask(id)
    .then(ele => {
      if (ele.length > 0) {
        res.status(200).json(ele);
      } else res.status(404).json({ ERROR: "No task found with that id" });
    })
    .catch(err => {
      console.log(err);
    });
});

route.post("/add", restricted, (req, res) => {
  const body = req.body;
  taskDb
    .addTask(body)
    .then(ele => {
      res.status(200).json({ Message: "Added Successfully" });
    })
    .catch(err => {
      res.status(500).json({ ERROR: "Could not add" });
      console.log(err);
    });
});

route.put("/:id", restricted, (req, res) => {
  const id = req.params.id;
  const body = req.body;

  taskDb
    .updateTask(id, body)
    .then(ele => {
      res.status(200).json(ele);
    })
    .catch(err => {
      res.status(500).json({ ERROR: "Could not update" });
      console.log(err);
    });
});

route.delete("/:id", restricted, (req, res) => {
  const id = req.params.id;
  taskDb
    .deleteTask(id)
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
