#!/bin/bash
#
# Libellux: Up and Running
# ClamAV 0.104.1 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: https://docs.clamav.net/manual/Installing/Installing-from-source-Unix.html
# Description: Pre-installation test for ClamAV 0.104.1 on Debian 11 (bullseye)
# Last updated: 2021-11-20
#

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind \
check libbz2-dev libcurl4-openssl-dev libmilter-dev \
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev

# libjson
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb && \
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb && \
sudo dpkg -i libjson-c5_0.15-2_amd64.deb && sudo dpkg -i libjson-c-dev_0.15-2_amd64.deb

# add ClamAV user
sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav

# get ClamAV public key https://www.clamav.net/downloads
touch clamav.asc && nano clamav.asc
gpg --import clamav.asc

# edit gpg key
gpg --edit-key 609B024F2B3EDD07

# Verify
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz

# Build
tar -xvzf clamav-0.104.1.tar.gz && \
cd clamav-0.104.1/ && \
mkdir -p build && cd build && \
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=OFF && \
cmake --build . && \
ctest

sudo cmake --build . --target install
