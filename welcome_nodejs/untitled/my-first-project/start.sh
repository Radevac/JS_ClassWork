#!/bin/bash

docker-compose down

docker-compose up --build -d

if [ $? -eq 0]; then
  echo "done. http://localhost"
else
  echo "error"
fi