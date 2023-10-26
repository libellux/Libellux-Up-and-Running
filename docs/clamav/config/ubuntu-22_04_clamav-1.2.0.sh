#!/bin/bash
#
# Libellux: Up and Running
# ClamAV 1.2.1 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: https://docs.clamav.net/manual/Installing/Installing-from-source-Unix.html
# Description: Pre-installation test for ClamAV 1.2.1 on Ubuntu 22.04 (Jammy Jellyfish)
# Last updated: 2023-10-25
#

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y make pkg-config python3 python3-pip python3-pytest valgrind \
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev \
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo

# add ClamAV user
sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav

# get ClamAV public key https://www.clamav.net/downloads
touch clamav.asc && nano clamav.asc
gpg --import clamav.asc

# edit gpg key
gpg --edit-key 609B024F2B3EDD07

# Set version
export CLAMAV_VERSION=1.2.1

# Verify
wget https://www.clamav.net/downloads/production/clamav-$CLAMAV_VERSION.tar.gz && \
wget https://www.clamav.net/downloads/production/clamav-$CLAMAV_VERSION.tar.gz.sig && \
gpg --verify clamav-$CLAMAV_VERSION.tar.gz.sig clamav-$CLAMAV_VERSION.tar.gz

# Build
tar -xvzf clamav-$CLAMAV_VERSION.tar.gz && \
cd clamav-$CLAMAV_VERSION/ && \
mkdir -p build && cd build && \
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=OFF && \
cmake --build . && \
ctest

# Install
sudo cmake --build . --target install

# If you enjoy the content feel free to help out and tip me at: https://fundof.me/libellux
