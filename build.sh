#!/bin/sh
browserify app/cjsx/application.jsx -t babelify --outfile bundle.js
http-server
