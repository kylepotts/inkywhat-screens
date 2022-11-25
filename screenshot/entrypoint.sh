#!/bin/bash

echo "grabbing screenshot"
gowitness -X 400 -Y 300 single https://inky.andwhat.xyz/quotes -o quote

ls -l screenshots/
echo "uploading screenshot"
aws s3 cp screenshots/quote.png --endpoint=https://nyc3.digitaloceanspaces.com s3://inky-what/quotes/latest.png --acl public-read

echo "sending redis pub sub message"
echo PUBLISH quotes "https://inky-what.nyc3.digitaloceanspaces.com/quotes/latest.png" | redis-cli -h redis.andwhat.xyz