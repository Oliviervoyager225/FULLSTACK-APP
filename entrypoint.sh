#!/bin/sh
echo "--- Starting application on port $PORT ---"
npx serve -s dist -l ${PORT:-3000}
