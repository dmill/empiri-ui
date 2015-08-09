#!/bin/sh
browserify -t [babelify] ./app/js/application.jsx -o ./build/bundle.js
node-sass --output-style compressed ./app/stylesheets/application.scss > ./build/application.css
http-server
