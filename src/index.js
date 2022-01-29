var sensor = require("node-dht-sensor");

let GPIO_PIN=21;

sensor.read(11, GPIO_PIN, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
