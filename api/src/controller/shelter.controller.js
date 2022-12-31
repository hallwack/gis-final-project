const { knex, geo } = require("../helper/db");

exports.getAllShelters = async (req, res) => {
  try {
    /* const sheltersGeoJSON = await knex.raw(
      "SELECT JSONB_BUILD_OBJECT('type', 'FeatureCollection', 'features', JSON_AGG(features.feature)) FROM (SELECT row_to_json(inputs) As feature FROM (SELECT 'Feature' As type, ST_AsGeoJSON(c.coordinate)::json As geometry, row_to_json((SELECT c FROM (SELECT id, name) As c)) As properties FROM shelters As c WHERE c.coordinate is not NULL) As inputs) features"
    ); */
    const shelters = await knex("shelters_geometry")
      .leftJoin("shelters", "shelters_geometry.id", "shelters.geometry")
      .select("*", "shelters_geometry.id AS id_geom", geo.asText("geom"));

    console.log(shelters);

    const featureCollection = {
      type: "FeatureCollection",
      features: shelters.map((row) => {
        return {
          type: "Feature",
          geometry: {
            type:
              row.geom.slice(0, 5).charAt(0).toUpperCase() +
              row.geom.slice(1, 5).toLowerCase(),
            coordinates: row.geom
              .slice(6, row.geom.length - 1)
              .split(" ")
              .map((c) => Number.parseFloat(c)),
          },
          /* properties: row, */
          properties: {
            id_geom: row.id_geom,
            name: row.name,
            description: row.description,
            isActive: row.isActive,
          },
        };
      }),
    };

    return res.json({
      success: true,
      message: "Get All Shelters Successfully",
      results: featureCollection,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};

exports.getShelterById = async (req, res) => {
  const { id } = req.params;
  try {
    const shelter = await knex("shelters_geometry")
      .leftJoin("shelters", "shelters_geometry.id", "shelters.geometry")
      .select("*", "shelters_geometry.id as id_geom", geo.asText("geom"))
      .where("shelters_geometry.id", id);

    const featureCollection = {
      type: "FeatureCollection",
      features: shelter.map((row) => {
        return {
          type: "Feature",
          geometry: {
            type:
              row.geom.slice(0, 5).charAt(0).toUpperCase() +
              row.geom.slice(1, 5).toLowerCase(),
            coordinates: row.geom
              .slice(6, row.geom.length - 1)
              .split(" ")
              .map((c) => Number.parseFloat(c)),
          },
          properties: {
            name: row.name,
            address: row.description,
          },
        };
      }),
    };

    return res.json({
      success: true,
      message: "Get Shelter By Id Successfully",
      results: featureCollection,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateShelterData = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const shelter = await knex("shelters")
      .insert({
        geometry: id,
        name,
        isActive: true,
        description,
      })
      .returning("*");

    return res.json({
      success: true,
      message: "Update Shelter Successfully",
      results: shelter,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};
