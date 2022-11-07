const KnexPostgis = require("knex-postgis");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const geo = KnexPostgis(knex);
  // Deletes ALL existing entries
  await knex("shelters").del();
  await knex("shelters").insert([
    {
      name: "apa lu",
      coordinate: geo.geomFromText("POINT(107.238943844 -6.324324322)", 4326),
    },
  ]);
};
