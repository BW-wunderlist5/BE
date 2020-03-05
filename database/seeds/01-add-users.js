exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "frodo", password: "ring" },
        { username: "sam", password: "loyal" },
        { username: "legolas", password: "elf" }
      ]);
    });
};
