# BRN_PI_Thermometer

A simple temperature and humidity meter with DHT11 sensor for Raspberry PI3

## Build

To building de installer(.deb) run the command below on Raspberry PI

```console
foo@bar:~$ wget https://github.com/rodrigobruner/BRN_PI_Thermometer/archive/refs/heads/main.zip
foo@bar:~$ unzip main.zip
foo@bar:~$ cd ./BRN_PI_Thermometer-main
foo@bar:~$ sudo sh ./build.sh
```

## Information web service for dashboard

To manually start the service, on raspberry run the command below:

```console
foo@bar:~$ node BRN_PI_Thermometer/src/service.js
```

## Dashboard with temperature and humidity

client.html


![Dashboard](doc/BRN_PI_Thermometer.png)
