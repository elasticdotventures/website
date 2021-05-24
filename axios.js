const axios = require('axios');


// Make a request for a user with a given ID
axios.get('http://localhost:3000/c0re/crew.json')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });