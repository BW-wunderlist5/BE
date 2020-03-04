exports.up = function(knex) {
  return knex.schema
    .createTable("Users", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .notNullable()
        .index();
      tbl.string("password").notNullable();
    })

    .createTable("Todo_List", tbl => {
      tbl.increments();
      tbl
        .string("name")
        .notNullable()
        .unique()
        .index();
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("User_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("Tasks", tbl => {
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
      tbl
        .integer("todo_list_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Todo_List")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("tasks");
};
