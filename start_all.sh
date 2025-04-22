#!/bin/bash

# Activate the virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Start MongoDB
echo "Starting MongoDB..."
mongod --dbpath /data/db --bind_ip_all &

# Start Django backend
echo "Starting Django backend..."
python octofit-tracker/backend/manage.py runserver &

# Start React frontend
echo "Starting React frontend..."
npm start --prefix octofit-tracker/frontend &

# Wait for all background processes to finish
wait