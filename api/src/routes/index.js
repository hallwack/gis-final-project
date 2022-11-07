const routes = require("express").Router();

routes.use("/shelters", require("./shelter.route"));

module.exports = routes;
