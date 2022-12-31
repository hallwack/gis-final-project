const routes = require("express").Router();
const routeController = require("../controller/route.controller");

routes.get("/", routeController.getAllRoutes);
routes.get("/:id", routeController.getRoutesById);

module.exports = routes;
