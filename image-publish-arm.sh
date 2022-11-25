#! /bin/bash

docker buildx build --platform linux/amd64 -t registry.digitalocean.com/kptech/inkywhat-screens:latest --push .