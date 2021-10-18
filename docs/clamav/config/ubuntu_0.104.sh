#!/bin/bash
#
# Libellux: Up and Running
# ClamAV 0.104 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: https://docs.clamav.net/manual/Installing/Installing-from-source-Unix.html
# Description: Pre-installation test for ClamAV 0.104 on Ubuntu 20.04 (Focal Fossa)
# Last updated: 2021-10-18
#

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y gcc make pkg-config python3 python3-pip python3-pytest valgrind \
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev \
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev

#
python3 -m pip install --user cmake

# Verify
https://www.clamav.net/downloads/production/clamav-0.104.0.tar.gz
https://www.clamav.net/downloads/production/clamav-0.104.0.tar.gz.sig

# Build
tar -xvzf https://www.clamav.net/downloads/production/clamav-0.104.0.tar.gz && \
cd clamav-0.104.0/ && \
mkdir build && cd build && \
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=OFF && \
cmake --build . && \
ctest && \
sudo cmake --build . --target install
