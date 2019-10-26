const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => res.render("index"));

  app.get("/search", (req, res) => {
    //res.render("search", { testMessage: "This is the search page..." });
    db.Listing.findAll({}).then(data => {
      const hbsObject = { Listing: data };
      res.render("search", hbsObject);
    });
  });

  app.get("/listing/:id", (req, res) => {
    db.Listing.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbListing =>
      res.render("listing", {
        listing: dbListing
      })
    );
  });

  app.get("/create", (req, res) => res.render("create"));

  app.get("/about", (req, res) => res.render("about"));

  app.get("*", (req, res) => res.render("404"));
};
