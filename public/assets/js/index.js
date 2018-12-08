const $submitListing = $("#submit-listing");
const $inputName = $("#inputName");
const $inputNumber = $("#inputNumber");
const $inputEmail = $("#inputEmail");
const $inputAddress = $("#inputAddress");
const $inputCity = $("#inputCity");
const $inputState = $("#inputState");
const $inputZip = $("#inputZip");
const $inputDescription = $("#inputDescription");
const $viewListing = $(".view-listing");

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

const listingFormSubmit = function(event) {
  event.preventDefault();



  const listing = {
    name: $inputName.val().trim(),
    phone: $inputNumber.val().trim(),
    email: $inputEmail.val().trim(),
    street: $inputAddress.val().trim(),
    city: $inputCity.val().trim(),
    state: $inputState.val().trim(),
    zip: $inputZip.val().trim(),
    description: $inputDescription.val().trim()
  };

  let mapString = `q=${listing.street.split(" ").join("+")}+${listing.city.split(" ").join("+")}+${listing.state}+${listing.zip}`;

  console.log(mapString);

  listing.map = mapString;

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
  $inputDescription.val("");
};

$submitListing.on("click", listingFormSubmit);

/*
$viewListing.on("click", function(event) {
  event.preventDefault();
  const id = $(this).data("id");
  console.log(id);
});*/
