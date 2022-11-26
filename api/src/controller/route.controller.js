const { knex, geo } = require('../helper/db')

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await knex("shelters").select(
      "id",
      "name",
      geo.asText("coordinate")
    )
    const rute1 = routes.map(rute => rute.coordinate
      .slice(6, rute.coordinate.length - 1)
      .split(" ").join(" ")
    )

    const hasil = `LINESTRING(${rute1})`
    return res.json({
      success: true,
      message: "Get All Routes Successfully",
      results: hasil,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Error: ${err.message}`,
    });
  }
}
