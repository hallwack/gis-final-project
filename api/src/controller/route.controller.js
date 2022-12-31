const { knex, geo } = require("../helper/db");

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await knex("routes")
      .join("routes_geometry", "routes.geometry", "routes_geometry.id")
      .select("*", geo.asText("geom"));

    const coordinates = routes.map((route) => {
      let filteredRoute = [];
      let r = route.geom.slice(11, route.geom.length - 1).split(",");
      r.map((item) =>
        filteredRoute.push(item.split(" ").map((i) => parseFloat(i)))
      );
      return filteredRoute;
    });

    const featureCollection = {
      type: "FeatureCollection",
      features: routes.map((row) => {
        let filteredRoute = [];
        let r = row.geom.slice(11, row.geom.length - 1).split(",");
        r.map((item) =>
          filteredRoute.push(item.split(" ").map((i) => parseFloat(i)))
        );
        return {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: filteredRoute,
          },
          properties: {
            id: row.id,
            code: row.code,
            description: row.description,
          },
        };
      }),
    };

    /* const rute1 = routes.map(rute => rute.coordinate
      .slice(6, rute.coordinate.length - 1)
      .split(" ").join(" ")
      let routes = results.rute
      routes.map(route => { // data row
        route.map(item => { // data linestring
          let lat = item[0]
          let long = item[1]
        })
      })
    ) */

    return res.json({
      success: true,
      message: "Get All Routes Successfully",
      results: { geom: featureCollection, info: routes },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
};

exports.getRoutesById = async (req, res) => {
  const { id } = req.params;

  try {
    const routes = await knex("routes")
      .join("routes_geometry", "routes.geometry", "routes_geometry.id")
      .select("*", geo.asText("geom"))
      .where("routes_geometry.id", id);

    const featureCollection = {
      type: "FeatureCollection",
      features: routes.map((row) => {
        let filteredRoute = [];
        let r = row.geom.slice(11, row.geom.length - 1).split(",");
        r.map((item) =>
          filteredRoute.push(item.split(" ").map((i) => parseFloat(i)))
        );
        return {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: filteredRoute,
          },
          properties: {
            id: row.id,
            code: row.code,
          },
        };
      }),
    };

    return res.json({
      success: true,
      message: "Get Route By Id Successfully",
      results: { geom: featureCollection, info: routes },
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
  const { arrival_id, departure_id, description } = req.body;
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};
