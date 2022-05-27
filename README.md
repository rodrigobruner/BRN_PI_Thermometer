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

## Install

After the build process you can run the command below on Raspberry PI

```console
foo@bar:~$ sudo dpkg -i ./build/BRN_PI_Thermometer.deb
```
Maybe do you need restart the Raspberry Pi to automatic start the application for this use the command bellow

```console
foo@bar:~$ sudo reboot
```

## Information web service for dashboard

To manually start the service, on raspberry run the command below:

```console
foo@bar:~$ sudo node /opt/BRN_PI_Thermometer/service.js
```
## Dashboard

To manually start the client, on raspberry run the command below:

```console
foo@bar:~$ sudo http-server -p 80 
```


![Dashboard](doc/BRN_PI_Thermometer.png)
