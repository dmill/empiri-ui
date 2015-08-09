#!/bin/sh
if [ -e "/tmp/empiri-http-server.pid" ]
then
  rm /tmp/empiri-http-server.pid
fi
./bin/dev-watch.sh
fswatch -o ./app | xargs -n1 -I{} ./bin/dev-watch.sh
