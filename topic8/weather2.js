let request = require('request');

let apiKey = '2291e4f9073b5ee58b772b1e3c388cf6';
let location = 'melbourne,au'; // changed to be more specific
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`; // added units=metric to convert to Celsius

request(url, function (err, response, body) {
    if (err) {
        console.log('error:', err); // changed to print the correct error variable
    } else {
        console.log('body:', body);
    }
});



