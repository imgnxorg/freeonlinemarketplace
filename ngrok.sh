#!/bin/bash

# Start the Next.js development server
npx dotenvx run -- next dev --turbo &

# Wait for the server to be available
npx wait-on http://localhost:3000

# Start ngrok to tunnel the local server
npx ngrok http 3000

# Open the ngrok dashboard in the default browser
open https://ngrok.com
