const knex = require("knex")({
  client: "postgresql",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "root",
    password: "root",
    database: "gis-final-project",
  },
});

const geo = require("knex-postgis")(knex);

module.exports = { knex, geo };
