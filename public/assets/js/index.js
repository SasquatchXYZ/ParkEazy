const $submitListing = $("#submit-listing");
const $inputName = $("#inputName");
const $inputNumber = $("#inputNumber");
const $inputEmail = $("#inputEmail");
const $inputAddress = $("#inputAddress");
const $inputCity = $("#inputCity");
const $inputState = $("#inputState");
const $inputZip = $("#inputZip");

const API = {
  saveListing: function(listing) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/listings",
      data: JSON.stringify(listing)
    });
  },
  getListings: function() {
    return $.ajax({
      url: "api/listings",
      type: "GET"
    });
  }
};

var listingFormSubmit = function(event) {
  event.preventDefault();

  const listing = {
    name: $inputName.val().trim(),
    phone: $inputNumber.val().trim(),
    email: $inputEmail.val().trim(),
    street: $inputAddress.val().trim(),
    city: $inputCity.val().trim(),
    state: $inputState.val().trim(),
    zip: $inputZip.val().trim()
  };

  console.log(listing);

  API.saveListing(listing).then(function() {
    alert("Thank You for Posting a New Listing");
  });

  $inputName.val("");
  $inputNumber.val("");
  $inputEmail.val("");
  $inputAddress.val("");
  $inputCity.val("");
  $inputState.val("");
  $inputZip.val("");
};

$submitListing.on("click", listingFormSubmit);
