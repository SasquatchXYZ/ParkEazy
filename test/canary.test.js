const expect = require("chai").expect;
const Listing = require("../models/listing");

describe("canary test", function() {
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });

  it("should fail this non-canary test", function() {
    expect(Listing()).to.be.instanceOf(Object);
  });
});
