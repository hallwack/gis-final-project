const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./src/routes"));

app.listen(9876, () => {
  console.log("App listen on port 9876");
});
