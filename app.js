const forecast = require("./data1/forecast");
const geocode = require("./data1/geocode");

const country = process.argv[2];
geocode(country, (error, data) => {
  if (error) {
    console.log("there exist error : ", error);
  } else {
    console.log(
      "the longtitude and latitude : ",
      data.latitude,
      data.longitude
    );
    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        console.log("there exist error : ", error);
      } else console.log(data);
    });
  }
});
