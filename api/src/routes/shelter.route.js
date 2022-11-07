const shelters = require("express").Router();
const shelterController = require("../controller/shelter.controller");

shelters.get("/", shelterController.getAllShelters);

module.exports = shelters;
