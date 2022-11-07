const { knex } = require("../helper/db");

exports.getAllShelters = async (req, res) => {
  try {
    const shelters = await knex("shelters");
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
