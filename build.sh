#!/bin/sh
browserify -t [babelify] app/js/application.jsx -o bundle.js
http-server
