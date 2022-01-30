let fs = require("fs");
let http = require("http");
let sensorLib = require("node-dht-sensor");

var date = new Date();

let app = {
  obj: {
    maxTemperature: 30,
    maxHumidity: 60,
    data: new Array(),
  },
  sensor: {
    type: 11, // 11 = DHT11 OR 22 = (DHT22 or AM2302)
    pin: 21, // Raspberry pin data port
  },

  read: function () {
    let readout = sensorLib.read(this.sensor.type, this.sensor.pin);
    readout.datetime = date.toISOString();
    this.obj.data.push(readout);
    setTimeout(function () {
      app.read();
    }, 10000);
  },

  start: function () {
    this.read();

    // Create an instance of the http server to handle HTTP requests
    let app = http.createServer((req, res) => {
      // Website you wish to allow to connect
      res.setHeader("Access-Control-Allow-Origin", "*");

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      // Request headers you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);

      // Set a response type of plain text for the response
      res.writeHead(200, { "Content-Type": "application/json" });

      // Send back a response and end the connection
      res.end(JSON.stringify(this.obj));
    });

    // Start the server on port 3000
    app.listen(3000, "0.0.0.0");
    console.log("Node server running on http://localhost:3000");
  },
};

app.start();
