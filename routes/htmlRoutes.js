const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", { testMessage: "This is the landing page..." });
  });

  app.get("/search", function(req, res) {
    //res.render("search", { testMessage: "This is the search page..." });
    db.Listing.findAll({}).then(function(data) {
      const hbsObject = {Listing: data};
      res.render("search", hbsObject);
    });
  });

  app.get("/search/:id", function(req, res) {
    db.Listing.findOne({ where: { id: req.params.id } }).then(function(
      dbListing
    ) {
      res.render("search", {
        listing: dbListing
      });
    });
  });

  app.get("/create", function(req, res) {
    res.render("create", { testMessage: "This is the create page..." });
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
