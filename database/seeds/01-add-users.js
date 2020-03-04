exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "frodo", password: "ring" },
        { id: 2, username: "sam", password: "loyal" },
        { id: 3, username: "legolas", password: "elf" }
      ]);
    });
};
