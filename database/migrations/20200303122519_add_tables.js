exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 128)
        .notNullable()
        .unique();

      tbl.string("password", 128).notNullable();

      tbl.timestamp("created_at").defaultTo(knex.fn.now());
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

      tbl.string("task_name", 128).notNullable();
      tbl.dateTime('start').notNullable()
      tbl.dateTime('end').notNullable()
      tbl.boolean('completed').notNullable().defaultTo(false)
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("tasks");
};
