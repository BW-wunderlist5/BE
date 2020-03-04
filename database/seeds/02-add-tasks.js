exports.seed = function(knex) {
  // Deletes ALL task entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          user_id: 1,
          task_name: "clean up the room",
          start:"",
          end: "",
          completed: false,
          created_at: ""
        },
        {
          id: 2,
          user_id: 1,
          task_name: "make breakfast",
          start:"",
          end: "",
          completed: true,
          created_at: ""
        },
        {
          id: 3,
          user_id: 2,
          task_name: "exercise",
          start:"",
          end: "",
          completed: false,
          created_at: ""
        },
        {
          id: 4,
          user_id: 2,
          task_name: "1 hr of code",
          start:"",
          end: "",
          completed: true,
          created_at: ""
        },
        {
          id: 5,
          user_id: 3,
          task_name: "pay bills",
          start:"",
          end: "",
          completed: true,
          created_at: ""
        },
        {
          id: 6,
          user_id: 3,
          task_name: "go out for a walk",
          start:"",
          end: "",
          completed: false,
          created_at: ""
        }
      ]);
    });
};
