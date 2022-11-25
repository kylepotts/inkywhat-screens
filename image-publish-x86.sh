#! /bin/bash

docker build -t inkywhat-screens:latest .
docker tag inkywhat-screens:latest registry.digitalocean.com/kptech/inkywhat-screens:latest
docker push registry.digitalocean.com/kptech/inkywhat-screens:latest