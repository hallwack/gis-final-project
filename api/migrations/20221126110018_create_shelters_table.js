/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  if (!(await knex.schema.hasTable('shelters'))) {
    await knex.schema.createTable("shelters", table => {
      table.uuid("id", { primaryKey: true }).defaultTo(knex.raw("uuid_generate_v4()"))
      table.uuid("geometry")
      table.foreign("geometry").references('id').inTable("shelters_geometry").onDelete("CASCADE").onUpdate("CASCADE")
      table.string("name")
      table.boolean("isActive").defaultTo(false)
      table.string("description").nullable()
      table.timestamps(true, true)
    })
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("shelters")
};
