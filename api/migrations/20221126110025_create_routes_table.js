/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable("routes"))) {
    await knex.schema.createTable("routes", table => {
      table.uuid("id", { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"))
      table.uuid("geometry")
      table.foreign("geometry").references('id').inTable("routes_geometry").onDelete("CASCADE").onUpdate("CASCADE")
      table.string("code")
      table.uuid("departure_id").nullable()
      table.foreign("departure_id").references('id').inTable("shelters")
      table.uuid("arrival_id").nullable()
      table.foreign("arrival_id").references('id').inTable("shelters")
      table.string("description").nullable()
      table.timestamps(true, true);
    })
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("routes")
};
