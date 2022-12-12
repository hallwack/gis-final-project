const { knex, geo } = require("../helper/db");

exports.getAllShelters = async (req, res) => {
  try {
    /* const sheltersGeoJSON = await knex.raw(
      "SELECT JSONB_BUILD_OBJECT('type', 'FeatureCollection', 'features', JSON_AGG(features.feature)) FROM (SELECT row_to_json(inputs) As feature FROM (SELECT 'Feature' As type, ST_AsGeoJSON(c.coordinate)::json As geometry, row_to_json((SELECT c FROM (SELECT id, name) As c)) As properties FROM shelters As c WHERE c.coordinate is not NULL) As inputs) features"
    ); */
    const shelters = await knex("shelters")
      .join('shelters_geometry', 'shelters.geometry', 'shelters_geometry.id')
      .select("*");

    const featureCollection = {
      type: "FeatureCollection",
      features: shelters.map((row) => {
        return {
          type: "Feature",
          geometry: {
            type:
              row.coordinate.slice(0, 5).charAt(0).toUpperCase() +
              row.coordinate.slice(1, 5).toLowerCase(),
            coordinates: row.coordinate
              .slice(6, row.coordinate.length - 1)
              .split(" ")
              .map((c) => Number.parseFloat(c)),
          },
          properties: {
            id: row.id,
            name: row.name,
          },
        };
      }),
    };

    return res.json({
      success: true,
      message: "Get All Shelters Successfully",
      results: shelters,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};
