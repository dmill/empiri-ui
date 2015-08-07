#!/bin/sh
browserify -t [babelify] app/cjsx/application.jsx -o bundle.js
http-server
