#!/bin/sh
./bin/build.sh
if [ -e "/tmp/empiri-http-server.pid" ]
then
  kill -INT `cat /tmp/empiri-http-server.pid`
fi
http-server &
echo $! > /tmp/empiri-http-server.pid
