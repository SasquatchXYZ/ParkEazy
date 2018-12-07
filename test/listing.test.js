const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const db = require("../models");
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;

describe("GET /api/listings", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function(done) {
    request = chai.request(server);
    db.sequelize.sync({ force: true }).then(function() {
      done();
    });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.Listing.bulkCreate([
      { text: "First Listing", description: "First Description" },
      { text: "Second Listing", description: "Second Description" }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/listings").end(function(err, res) {
        const responseStatus = res.status;
        const responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            text: "First Listing",
            description: "First Description"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            text: "Second Listing",
            description: "Second Description"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
