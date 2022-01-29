#!/bin/bash

if [ `whoami` != root ]; then
    echo "Please run this script as root or using sudo"
    exit
fi

# Install Node.JS and NPM
apt-get install nodejs npm

#Install all JavaScript libraries dependencies
npm install