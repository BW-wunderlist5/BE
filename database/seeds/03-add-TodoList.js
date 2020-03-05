
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Todo_List")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Todo_List").insert([
        { id: 1, name: "daily stuff", User_id: 1 },
        { id: 2, name: "shopping list", User_id: 1 },
        { id: 3, name: "ricks stuff todo", User_id: 2 },
        { id: 4, name: "mortys stuff", User_id: 3 }
      ]);
    });
};