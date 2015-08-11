#!/bin/sh
babel --watch --modules amd app/js --out-dir build/js &
node-sass --watch --output-style compressed ./app/stylesheets/application.scss > ./build/application.css &
node-sass --output-style compressed ./app/stylesheets/application.scss > ./build/application.css
http-server
