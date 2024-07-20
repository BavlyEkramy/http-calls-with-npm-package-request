const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=82a9b4eb3f084102847160018241907&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect weather api service", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        "city " +
          response.body.location.name +
          " is " +
          response.body.current.condition.text +
          " and the temp is : " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
