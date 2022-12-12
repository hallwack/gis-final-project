/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable("routes_geometry"))) {
    await knex.schema.createTable("routes_geometry", (table) => {
      table
        .uuid("id", { primaryKey: true })
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.specificType("geom", "geometry(linestring, 4326)");
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("routes_geometry");
};
