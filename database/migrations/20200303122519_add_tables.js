exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .notNullable()
        .index();
      tbl.string("password").notNullable();
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .string("name", 256)
        .notNullable()
        .unique()
        .index();
      tbl.string("description", 256);
      tbl.date("start_Date");
      tbl.date("end_date");
      tbl.boolean("completed").defaultTo(false);
      tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("tasks");
};
