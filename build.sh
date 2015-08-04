#!/bin/sh
browserify -t coffee-reactify cjsx/application.cjsx > bundle.js
http-server
