const routes = require("express").Router();

routes.use("/shelters", require("./shelter.route"));
routes.use("/routes", require("./route.route"))

module.exports = routes;
