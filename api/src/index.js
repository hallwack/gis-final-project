const knex = require("knex");
const geo = require("knex-postgis")(knex);

knex("shelters")
  .update({
    name: "Trans Studio",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
