// * Requiring our packages
var express = require("express");
var exphbs = require("express-handlebars");

// * PORT and app config
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// * Importing routers
var routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});