const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static("../../public/"));
app.set("views", "/public");
app.set("view engine", "html");

app.use((req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

app.listen(5000, () => {
  console.log("running on port 5000");
});
