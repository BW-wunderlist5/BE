exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          name: "take out trash",
          description: "left dumpster",
          todo_list_Id: 1
        },
        { name: "clean dishes", description: "new soap", todo_list_Id: 1 },
        { name: "walk dog", description: "avoid 7th st", todo_list_Id: 1 },
        { name: "trash bags", description: "heavy duty", todo_list_Id: 2 },
        { name: "soap", description: "dawn kind", todo_list_Id: 2 },
        { name: "dog food", description: "not cheap kind", todo_list_Id: 2 },
        {
          name: "fix portal gun",
          description: "need quantom stuff",
          todo_list_Id: 3
        },
        {
          name: "terrorize morty",
          description: "blow up his love interest",
          todo_list_Id: 3
        },
        { name: "help rick", description: "dont die (again)", todo_list_Id: 4 },
        {
          name: "get quantom stuff",
          description: "please dont die",
          todo_list_Id: 4
        }
      ]);
    });
};