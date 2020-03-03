exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl.timestamp("created_at").defaultTo(knex.fn.now());

      tbl
        .string("username", 128)
        .notNullable()
        .unique();

      tbl.string("password", 128).notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.string("task-name", 128).notNullable();

      tbl
        .timestamp("created_at")
        .defaultTo(knex.fn.now())
        .notNullable();

      tbl.dateTime("start").notNullable();
      tbl.dateTime("end").notNullable();
      tbl
        .bool("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("users")
  .dropTableIfExists("tasks");
};
