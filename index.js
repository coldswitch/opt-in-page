const express = require("express");
const app = express();
const routes = require("./routes/routes");
const path = require("path");
const bodyParser = require("body-parser");

app.set("views", path.join(__dirname, "views"));
// app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// set staticfiles
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

const port = 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
