const submitBtn = $('#submit');

const API = {
  saveListing: function(listing) {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'POST',
      url: 'api/listings',
      data: JSON.stringify(listing)
    })
  },
  getListings: function() {
    return $.ajax({
      url: 'api/listings',
      type: 'GET'
    })
  }
};

const listingFormSubmit = function(event) {
  event.preventDefault();


};