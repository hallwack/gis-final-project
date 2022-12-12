/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable("shelters_geometry"))) {
    await knex.schema.createTable("shelters_geometry", (table) => {
      table
        .uuid("id", { primaryKey: true })
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.specificType("geom", "geometry(point, 4326)");
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("shelters_geometry");
};
