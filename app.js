const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "pug");

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

module.exports = app;
