#!/bin/sh
NODE_ENV=$ENV babel --optional utility.inlineEnvironmentVariables app/js/config.js --watch --modules amd app/js --out-dir build/js &
node-sass --watch --output-style compressed ./app/stylesheets/application.scss ./build/application.css &
http-server
