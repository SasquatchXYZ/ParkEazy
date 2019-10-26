const db = require("../models");

module.exports = app => {
  app.get("/api/listings", (req, res) => {
    db.Listing.findAll({}).then(dbListings => res.json(dbListings));
  });

  app.post("/api/listings", (req, res) => {
    db.Listing.create(req.body).then(dbListing => res.json(dbListing));
  });

  app.delete("/api/listings/:id", (req, res) => {
    db.Listing.destroy({ where: { id: req.params.id } }).then(dbListing =>
      res.json(dbListing)
    );
  });
};
