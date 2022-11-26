const routes = require("express").Router();
const routeController = require("../controller/route.controller");

routes.get("/", routeController.getAllRoutes);

module.exports = routes;
