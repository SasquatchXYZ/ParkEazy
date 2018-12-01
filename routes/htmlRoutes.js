const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {

    res.render("index", { testMessage: "This is the landing page..." });
  });

  app.get("/search", function(req, res) {

    res.render("search", { testMessage: "This is the search page..." });
  });

  app.get("/create", function(req, res) {

    res.render("create", { testMessage: "This is the create page..." });
  });
};