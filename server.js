// * Bringing in required packages
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');

// * App config
var app = express()

// * Port config
var PORT = 8080 || process.env.PORT;

// * Handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// * Middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride('_method'));

// * Requiring our router
var routes = require('./controllers/controller.js');
app.use('/', routes);

app.listen(PORT, function(){
    console.log("App listening on localhost:/"+ PORT);
});