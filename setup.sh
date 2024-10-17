#!/bin/bash

# Update package list and install necessary dependencies
apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    pkg-config \
    libssl-dev

# Install the MongoDB PHP extension using PECL
pecl install mongodb

# Enable the MongoDB extension in PHP
echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/mongodb.ini

# Verify the installation
php -m | grep mongodb

# Output success message
echo "MongoDB PHP extension installed and enabled!"

php -S 0.0.0.0:$PORT -t public