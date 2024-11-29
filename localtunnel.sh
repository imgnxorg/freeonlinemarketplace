#!/bin/sh

dotenvx run -- next dev --turbo &
wait-on http://localhost:3000 && localtunnel --port 3000 --subdomain imgnx --local-host freeonlinemarketplace.com
