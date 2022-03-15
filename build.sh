#!/bin/bash

if [ `whoami` != root ]; then
    echo "Please run this script as root or using sudo"
    exit
fi

SCRIPT=$(readlink -f $0)
SCRIPTPATH=`dirname $SCRIPT`
cd $SCRIPTPATH

npm install
cp -R ./node_modules ./build/BRN_PI_Thermometer/opt/BRN_PI_Thermometer/
cp -R ./src/* ./build/BRN_PI_Thermometer/opt/BRN_PI_Thermometer/
cp -R ./README.md ./build/BRN_PI_Thermometer/opt/BRN_PI_Thermometer/
chmod -R 0755 ./build/BRN_PI_Thermometer/
cd ./build
dpkg-deb -b ./BRN_PI_Thermometer