const axios = require('axios');

axios.get('https://ghibliapi.vercel.app/films')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });