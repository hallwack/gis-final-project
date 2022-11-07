/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  if (!(await knex.schema.hasTable("routes"))) {
    await knex.schema.createTable("routes", (table) => {
      table
        .uuid("id", { primaryKey: true })
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.uuid("departure_id").notNullable();
      table.uuid("arrival_id").notNullable();
      table
        .foreign("departure_id")
        .references("id")
        .inTable("shelters")
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .foreign("arrival_id")
        .references("id")
        .inTable("shelters")
        .onUpdate("cascade")
        .onDelete("cascade");
      table.string("code", 20);
      /* table.string("departure", 255);
      table.string("arrival", 255);
      table.specificType("departure_point", "geometry(point, 4326)");
      table.specificType("arrival_point", "geometry(point, 4326)"); */
      table.specificType("route_line", "geometry(multilinestring, 4326)");
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("routes");
};
