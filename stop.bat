@echo off
echo Stopping and removing containers...
docker-compose down

echo Removing volumes...
docker-compose down -v

echo Done!
