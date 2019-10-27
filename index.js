const express = require("express");
const app = express();
const routes = require("./routes/index");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
// app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// set staticfiles
app.use(express.static("public"));

app.get("/", routes);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
