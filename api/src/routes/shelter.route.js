const shelters = require("express").Router();
const shelterController = require("../controller/shelter.controller");

shelters.get("/", shelterController.getAllShelters);
shelters.get("/:id", shelterController.getShelterById);
shelters.post("/:id", shelterController.updateShelterData);

module.exports = shelters;
