#!/bin/sh
browserify -t coffee-reactify app/cjsx/application.cjsx > bundle.js
http-server
