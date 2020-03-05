exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          name: "take out trash",
          description: "left dumpster",
          start_Date: "2020-10-10",
          end_date: "2020-11-10",
          completed: false
        },
        {
          id: 2,
          name: "clean room",
          description: "you will feel better",
          start_Date: "2020-10-10",
          end_date: "2020-11-10",
          completed: true
        },
        {
          id: 3,
          name: "code",
          description: "for at least one hour",
          start_Date: "2020-10-10",
          end_date: "2020-11-10",
          completed: false
        }
      ]);
    });
};
